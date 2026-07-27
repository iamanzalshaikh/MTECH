'use client';

import React from 'react';

export function openEnquiryDrawer() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-enquiry'));
  }
}

interface EnquiryTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function EnquiryTrigger({ children, onClick, ...props }: EnquiryTriggerProps) {
  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        openEnquiryDrawer();
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
