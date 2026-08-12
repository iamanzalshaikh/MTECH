import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/images/caddeskindia_com_wp-content_uploads_2021_03_Civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Privacy Policy
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.8', fontSize: '15px', color: '#374151' }}>
            <p style={{ marginBottom: '24px' }}>
              CADDESK considers the security and protection of your personal data and information important. Therefore, CADDESK operates its website in compliance with applicable laws on data privacy protection and data security.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Below, we provide information on the types of data we collect through all CADDESK website, the purpose we use such data, and parties with which we share such data, where applicable.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Collected Data and Purpose of Processing</h3>
            <p style={{ marginBottom: '24px' }}>
              We only collect personal data (e.g. Names, Country, Location, Telephone/ Mobile, Email ID, etc.) with regard to operating our website only when you voluntarily provided this data to us (e.g. through registration, contact inquiries, surveys, etc.) and we are entitled to use or process such data by virtue of permission granted by you on the basis of statutory provision.
            </p>
            <p style={{ marginBottom: '24px' }}>
              As a general rule, we only use such data exclusively for the purpose for which the data was disclosed to us by you, such as to answer your inquiries, grant you access, process your orders, etc.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Data Sharing</h3>
            <p style={{ marginBottom: '24px' }}>
              For the purpose indicated above, insofar, as you have provided your consent, or when we are legally entitled to do so, we will share your personal data with the subsidiaries of CADDESK, wherever required.
            </p>
            <p style={{ marginBottom: '24px' }}>
              In connection with the operation of this website and the services offered CADDESK works as a network of all its subdivisions such as CADDESK Online, ITDESK and Creative desk or its applications.
            </p>
            <p style={{ marginBottom: '24px' }}>
              These Strategic Business units are located in and outside India, possibly, all over the Asia, in this regard; the applicability of data secrecy and protection laws may vary. In such cases, CADDESK takes measures to ensure an appropriate level of data privacy and protection.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Data is shared only in compliance with the applicable laws and regulations. We do not sell or otherwise market your personal data to third parties.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Questions, Comments and Amendments</h3>
            <p style={{ marginBottom: '24px' }}>
              CADDESK will respond to all the legitimate requests for information, and wherever applicable to correct, amend or delete your personal data. If you wish to make such a request or if you have questions or comments about this Data Privacy Policy, please click on "Contact Us" and feel free to share.
            </p>
            <p style={{ marginBottom: '24px' }}>
              This Data Privacy policy is updated on a regular basis. You will find the date of the last update on this page.
            </p>
            <p style={{ marginBottom: '0px' }}>
              Data of online training request may be further use with all the subsidiaries of CADDESK.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
