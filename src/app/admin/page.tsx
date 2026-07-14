'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Lead {
  id: string;
  name: string;
  phone: string;
  category: string;
  course: string;
  date: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/enquiry');
      if (!res.ok) throw new Error('Failed to fetch leads');
      const data = await res.json();
      data.sort((a: Lead, b: Lead) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setLeads(data);
    } catch (err) {
      setError('Could not load leads. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ color: '#0f172a', margin: '0 0 8px 0', fontSize: '28px' }}>Admin Dashboard</h2>
            <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>Sign in to manage your leads</p>
          </div>
          
          {loginError && (
            <div style={{ padding: '12px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', textAlign: 'center', border: '1px solid #f87171' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#334155', fontWeight: 600 }}>Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }}
                placeholder="Enter username"
                required
              />
            </div>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#334155', fontWeight: 600 }}>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '15px' }}
                placeholder="••••••••"
                required
              />
            </div>
            <button 
              type="submit"
              style={{ width: '100%', padding: '14px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.2s' }}
            >
              Sign In
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
             <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
               <span>←</span> Back to Website
             </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate stats
  const totalLeads = leads.length;
  const leadsToday = leads.filter(lead => {
    const leadDate = new Date(lead.date);
    const today = new Date();
    return leadDate.getDate() === today.getDate() && 
           leadDate.getMonth() === today.getMonth() && 
           leadDate.getFullYear() === today.getFullYear();
  }).length;
  
  const categoryCounts = leads.reduce((acc, lead) => {
    acc[lead.category] = (acc[lead.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const mostPopularCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: 'Inter, sans-serif' }}>
      {/* Top Navbar */}
      <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
            M
          </div>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>M-Tech Admin</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
            View Website
          </Link>
          <button 
            onClick={() => setIsAuthenticated(false)}
            style={{ padding: '8px 16px', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}
          >
            Logout
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>Dashboard Overview</h2>
          <p style={{ color: '#64748b', margin: 0 }}>Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 600, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Leads</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{totalLeads}</h3>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 600, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>New Leads Today</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 700, color: '#10b981', margin: 0 }}>{leadsToday}</h3>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 600, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Category</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#3b82f6', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mostPopularCategory}</h3>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', margin: 0 }}>Recent Enquiries</h3>
            <button 
              onClick={fetchLeads}
              style={{ padding: '8px 16px', backgroundColor: '#ffffff', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 500, cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span style={{ fontSize: '16px' }}>↻</span> Refresh
            </button>
          </div>

          {error && (
            <div style={{ padding: '16px 24px', backgroundColor: '#fef2f2', color: '#b91c1c', borderBottom: '1px solid #fecaca' }}>
              {error}
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
                <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '3px solid #cbd5e1', borderTopColor: '#3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ marginTop: '16px', fontWeight: 500 }}>Loading leads data...</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            ) : leads.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', color: '#64748b' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f172a', margin: '0 0 8px 0' }}>No leads yet</h3>
                <p style={{ margin: 0, maxWidth: '400px', marginInline: 'auto' }}>When visitors submit the enquiry form on your website, they will automatically appear here.</p>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc' }}>
                    <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Date Submitted</th>
                    <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Applicant</th>
                    <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</th>
                    <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Course Details</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} style={{ borderTop: '1px solid #e2e8f0', transition: 'background-color 0.15s' }}>
                      <td style={{ padding: '16px 24px', color: '#475569', fontSize: '14px' }}>
                        <div style={{ fontWeight: 500, color: '#0f172a' }}>{new Date(lead.date).toLocaleDateString()}</div>
                        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{new Date(lead.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '14px' }}>{lead.name}</div>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <a href={`tel:${lead.phone}`} style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                          {lead.phone}
                        </a>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 500 }}>
                            {lead.category}
                          </span>
                          <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: 500 }}>
                            {lead.course}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
