'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import EnquiryDrawer from './EnquiryDrawer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const ENQUIRY_SESSION_KEY = 'caddesk-enquiry-auto-shown';
const ENQUIRY_AUTO_OPEN_DELAY_MS = 1200;

export default function MainLayout({ children }: MainLayoutProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  React.useEffect(() => {
    const handleOpenEnquiry = () => {
      setIsEnquiryOpen(true);
    };
    window.addEventListener('open-enquiry', handleOpenEnquiry);

    let autoOpenTimer: ReturnType<typeof setTimeout> | undefined;
    const alreadyShown = sessionStorage.getItem(ENQUIRY_SESSION_KEY);

    if (!alreadyShown) {
      autoOpenTimer = setTimeout(() => {
        setIsEnquiryOpen(true);
        sessionStorage.setItem(ENQUIRY_SESSION_KEY, 'true');
      }, ENQUIRY_AUTO_OPEN_DELAY_MS);
    }

    return () => {
      window.removeEventListener('open-enquiry', handleOpenEnquiry);
      if (autoOpenTimer) clearTimeout(autoOpenTimer);
    };
  }, []);

  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <div className="main-wrapper" style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>{children}</div>;
  }

  return (
    <div className="main-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onOpenEnquiry={openEnquiry} />
      
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      {/* Floating Enquiry Tab on Right Side */}
      <button 
        className="enquiry-floating-btn" 
        onClick={openEnquiry}
        aria-label="Open enquiry form"
        id="floating-enquiry-trigger"
      >
        Enquiry Now
      </button>

      {/* Enquiry Drawer */}
      <EnquiryDrawer isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      <Footer />
    </div>
  );
}
