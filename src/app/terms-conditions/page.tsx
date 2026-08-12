import React from 'react';
import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(/images/caddeskindia_com_wp-content_uploads_2021_03_Civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Terms & Conditions
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.8', fontSize: '15px', color: '#374151' }}>
            
            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginBottom: '12px' }}>Registration & Cancellation term</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              <li>The user shall provide accurate information during the registration process and shall update as this information changes over time without any delay.</li>
              <li>The user should ensure that the User Data is not accessible by any third party.</li>
              <li>
                CADDESK reserves the right to deny registration and is entitled to, any time, and without obligation to give reasons, to deny the users the right to access the password protected area by blocking its User Data, if the user, in particular:
                <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Uses false data or inaccurate information during registration.</li>
                  <li>Violates the Terms of Use or any applicable laws or neglects its duty of care with regard to User Data.</li>
                </ul>
              </li>
              <li>Registration of user shall not be replaces with any other product and services use through CADDESK.</li>
              <li>Students joining through any special activity or in a discount scheme or through any scheme classified as a 'special scheme' cannot avail the transfer facility.</li>
              <li>CADDESK has reserve all the rights of misconduct of virtual property.</li>
              <li>The course and course combinations are expected to change time to time based on the industry requirements. In case you are taking a break during the course and the course you have registered and paid is not available at the time of rejoining, then you will have to join an alternative program available at that point of time or must upgrade the course by paying additional fee if required for the new combination.</li>
              <li>The student should strictly adhere to the batch / schedule timings specified by the center. All breaks must be pre-approved in writing.</li>
            </ul>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '35px', marginBottom: '12px' }}>Privacy Policies</h3>
            <p style={{ marginBottom: '16px' }}>
              CADDESK considers the security and protection of your personal data and information important. Therefore, CADDESK operates its website in compliance with applicable laws on data privacy protection and data security. Below, we provide information on the types of data we collect through all CADDESK website, the purpose we use such data, and parties with which we share such data, where applicable.
            </p>

            <h4 style={{ fontSize: '17px', color: '#07294d', fontWeight: 700, marginTop: '20px', marginBottom: '10px' }}>Collected Data and Purpose of Processing</h4>
            <p style={{ marginBottom: '16px' }}>
              We only collect personal data (e.g. Names, Country, Location, Telephone/ Mobile, Email ID, etc.) with regard to operating our website only when you voluntarily provided this data to us (e.g. through registration, contact inquiries, surveys, etc.) and we are entitled to use or process such data by virtue of permission granted by you on the basis of statutory provision.
            </p>
            <p style={{ marginBottom: '24px' }}>
              As a general rule, we only use such data exclusively for the purpose for which the data was disclosed to us by you, such as to answer your inquiries, grant you access, process your orders, etc.
            </p>

            <h4 style={{ fontSize: '17px', color: '#07294d', fontWeight: 700, marginTop: '20px', marginBottom: '10px' }}>Data Sharing</h4>
            <p style={{ marginBottom: '16px' }}>
              For the purpose indicated above, insofar, as you have provided your consent, or when we are legally entitled to do so, we will share your personal data with the subsidiaries of CADDESK, wherever required.
            </p>
            <p style={{ marginBottom: '16px' }}>
              In connection with the operation of this website and the services offered CADDESK works as a network of all its subdivisions such as CADDESK Online, ITDESK and Creative desk or its applications.
            </p>
            <p style={{ marginBottom: '24px' }}>
              These Strategic Business units are located in and outside India, possibly, all over the Asia, in this regard; the applicability of data secrecy and protection laws may vary. In such cases, CADDESK takes measures to ensure an appropriate level of data privacy and protection.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Data is shared only in compliance with the applicable laws and regulations. We do not sell or otherwise market your personal data to third parties.
            </p>

            <h4 style={{ fontSize: '17px', color: '#07294d', fontWeight: 700, marginTop: '20px', marginBottom: '10px' }}>Questions, Comments and Amendments</h4>
            <p style={{ marginBottom: '16px' }}>
              CADDESK will respond to all the legitimate requests for information, and wherever applicable to correct, amend or delete your personal data. If you wish to make such a request or if you have questions or comments about this Data Privacy Policy, please click on "Contact Us" and feel free to share.
            </p>
            <p style={{ marginBottom: '16px' }}>
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
