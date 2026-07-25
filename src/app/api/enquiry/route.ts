import { NextResponse } from 'next/server';
import { ensureLeadsTable, getSql, type LeadRow } from '@/lib/db';

function mapLead(row: LeadRow) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    location: row.location,
    category: row.category,
    course: row.course,
    date: row.created_at instanceof Date
      ? row.created_at.toISOString()
      : new Date(row.created_at).toISOString(),
  };
}

export async function GET() {
  try {
    await ensureLeadsTable();
    const sql = getSql();
    const rows = await sql`
      SELECT id, name, phone, location, category, course, created_at
      FROM leads
      ORDER BY created_at DESC
    ` as LeadRow[];

    return NextResponse.json(rows.map(mapLead));
  } catch (error) {
    console.error('Error reading leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const location = String(body.location || '').trim();
    const category = String(body.category || '').trim();
    const course = String(body.course || '').trim();

    if (!name || !phone || !location || !category || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await ensureLeadsTable();
    const sql = getSql();
    const id = Math.random().toString(36).slice(2, 11);

    const rows = await sql`
      INSERT INTO leads (id, name, phone, location, category, course)
      VALUES (${id}, ${name}, ${phone}, ${location}, ${category}, ${course})
      RETURNING id, name, phone, location, category, course, created_at
    ` as LeadRow[];

    const lead = mapLead(rows[0]);
    return NextResponse.json({ message: 'Lead saved successfully', lead }, { status: 201 });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
