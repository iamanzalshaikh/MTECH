'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import LeadsTable, { type Lead } from '@/components/admin/LeadsTable';
import styles from './admin.module.css';

const ADMIN_AUTH_KEY = 'mtech-admin-auth';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ADMIN_AUTH_KEY);
      if (saved === 'true') setIsAuthenticated(true);
    } catch {
      // ignore
    } finally {
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchLeads();
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoggingIn(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLoginError(data.error || 'Invalid username or password');
        return;
      }
      setIsAuthenticated(true);
      try {
        localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      } catch {
        // ignore
      }
    } catch {
      setLoginError('Could not reach login server. Please try again.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    try {
      localStorage.removeItem(ADMIN_AUTH_KEY);
    } catch {
      // ignore
    }
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/enquiry');
      if (!res.ok) throw new Error('Failed to fetch leads');
      const data = await res.json();
      data.sort((a: Lead, b: Lead) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setLeads(data);
    } catch {
      setError('Could not load leads. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo(() => {
    const totalLeads = leads.length;
    const today = new Date();
    const leadsToday = leads.filter((lead) => {
      const d = new Date(lead.date);
      return (
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
      );
    }).length;

    const categoryCounts = leads.reduce((acc, lead) => {
      acc[lead.category] = (acc[lead.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topCategory =
      Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return { totalLeads, leadsToday, topCategory };
  }, [leads]);

  if (!authChecked) {
    return <div className={styles.loadingCenter}>Loading…</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.loginShell}>
        <div className={styles.loginCard}>
          <div className={styles.loginHead}>
            <div className={styles.brandMark} style={{ margin: '0 auto 14px' }}>M</div>
            <h2>M-Tech Admin</h2>
            <p>Sign in to manage enquiry leads</p>
          </div>

          {loginError && <div className={styles.loginError}>{loginError}</div>}

          <form onSubmit={handleLogin}>
            <div className={styles.field}>
              <label htmlFor="admin-username">Username</label>
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                autoComplete="username"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className={styles.loginBtn} disabled={loggingIn}>
              {loggingIn ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div className={styles.loginFooter}>
            <Link href="/" className={styles.linkQuiet}>← Back to Website</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>M</div>
          <h1 className={styles.brandTitle}>M-Tech Admin</h1>
        </div>
        <div className={styles.navActions}>
          <Link href="/" className={styles.linkQuiet}>View Website</Link>
          <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <div className={styles.pageHead}>
          <h2>Dashboard Overview</h2>
          <p>Track enquiries, filter by location/course, and follow up faster.</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Total Leads</p>
            <h3 className={styles.statValue}>{stats.totalLeads}</h3>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>New Leads Today</p>
            <h3 className={`${styles.statValue} ${styles.statValueAccent}`}>{stats.leadsToday}</h3>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Top Category</p>
            <h3 className={`${styles.statValue} ${styles.statValueMuted}`}>{stats.topCategory}</h3>
          </div>
        </div>

        <LeadsTable
          leads={leads}
          loading={loading}
          error={error}
          onRefresh={fetchLeads}
        />
      </div>
    </div>
  );
}
