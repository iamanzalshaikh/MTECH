/**
 * One-time migration: copy data/leads.json into Neon Postgres.
 * Run: npx tsx scripts/migrate-leads.ts
 */
import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config({ path: path.join(process.cwd(), '.env') });

type OldLead = {
  id?: string;
  name: string;
  phone: string;
  location?: string;
  category: string;
  course: string;
  date?: string;
};

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL missing in .env');
  }

  const sql = neon(databaseUrl);
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      location TEXT NOT NULL,
      category TEXT NOT NULL,
      course TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  const filePath = path.join(process.cwd(), 'data', 'leads.json');
  if (!fs.existsSync(filePath)) {
    console.log('No data/leads.json found — nothing to migrate.');
    return;
  }

  const leads = JSON.parse(fs.readFileSync(filePath, 'utf8')) as OldLead[];
  let inserted = 0;

  for (const lead of leads) {
    const id = lead.id || Math.random().toString(36).slice(2, 11);
    const location = (lead.location || 'Other').trim();
    const createdAt = lead.date ? new Date(lead.date).toISOString() : new Date().toISOString();

    await sql`
      INSERT INTO leads (id, name, phone, location, category, course, created_at)
      VALUES (
        ${id},
        ${lead.name},
        ${lead.phone},
        ${location},
        ${lead.category},
        ${lead.course},
        ${createdAt}
      )
      ON CONFLICT (id) DO NOTHING
    `;
    inserted += 1;
  }

  console.log(`Migration done. Processed ${inserted} lead(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
