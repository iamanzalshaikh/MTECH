import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body.username || '');
    const password = String(body.password || '');

    const expectedUser = process.env.ADMIN_USERNAME || 'admin';
    const expectedPass = process.env.ADMIN_PASSWORD || '';

    if (!expectedPass) {
      return NextResponse.json(
        { error: 'Admin credentials are not configured on the server.' },
        { status: 500 }
      );
    }

    if (username === expectedUser && password === expectedPass) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
