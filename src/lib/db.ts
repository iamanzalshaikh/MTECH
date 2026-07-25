import { neon } from '@neondatabase/serverless';

function getDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set. Add it to your .env file.');
  }
  return url;
}

export function getSql() {
  return neon(getDatabaseUrl());
}

let tableReady: Promise<void> | null = null;

/** Creates the leads table once if it does not exist. */
export async function ensureLeadsTable() {
  if (!tableReady) {
    tableReady = (async () => {
      const sql = getSql();
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
    })().catch((err) => {
      tableReady = null;
      throw err;
    });
  }
  await tableReady;
}

export type LeadRow = {
  id: string;
  name: string;
  phone: string;
  location: string;
  category: string;
  course: string;
  created_at: string | Date;
};
