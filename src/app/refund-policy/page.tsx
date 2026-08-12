import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/images/caddeskindia_com_wp-content_uploads_2021_03_Civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="page-title">Refund Policy</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Refund Policy
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.9', fontSize: '15px', color: '#374151' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                Fee once paid shall not be refund and adjust in any other account however course title can be changed before commencement of batch or schedule.
              </li>
              <li>
                100% fee to be paid in advance to start the training with CADDESK.
              </li>
              <li>
                Registration and payment can be terminated, If anytime found course is been shared with others / multiple users or intention of course purchase is to copy the material/ Content, access will be blocked at the same time.
              </li>
              <li>
                In any exceptional case of refund, taxes and payment gateway charges shall be applicable as actual.
              </li>
              <li>
                Any promotion code/Gift use to purchased CADDESK course shall not in the entitlement of Refund and adjustment.
              </li>
              <li>
                Payment refund is not possible once students get registered however it can be further reschedule with stipulated time.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
