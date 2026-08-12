'use client';

import React from 'react';
import { GOOGLE_REVIEW_URL } from '@/config/site';

export default function GoogleReviewTab() {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="google-review-tab"
      aria-label="Leave a Google review for M-Tech Computers"
      id="google-review-tab"
    >
      <span className="google-review-tab-inner">
        <span className="google-review-tab-text">
          <span className="g-blue">G</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">g</span>
          <span className="g-green">l</span>
          <span className="g-red">e</span>
          <span className="google-review-label"> Reviews!</span>
        </span>
        <span className="google-review-arrow" aria-hidden>▲</span>
      </span>
    </a>
  );
}
