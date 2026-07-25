import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');

// Ensure file exists
function ensureFile() {
  if (!fs.existsSync(dataFilePath)) {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
}

export async function GET() {
  try {
    ensureFile();
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    
    let leads = [];
    if (fileData.trim()) {
      leads = JSON.parse(fileData);
    }
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Error reading leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newLead = await request.json();
    
    if (!newLead.name || !newLead.phone || !newLead.location || !newLead.category || !newLead.course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    newLead.location = String(newLead.location).trim();
    newLead.date = new Date().toISOString();
    newLead.id = Math.random().toString(36).substr(2, 9);

    ensureFile();
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    
    let leads = [];
    if (fileData.trim()) {
      leads = JSON.parse(fileData);
    }
    
    leads.push(newLead);
    fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2));
    
    return NextResponse.json({ message: 'Lead saved successfully', lead: newLead }, { status: 201 });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
