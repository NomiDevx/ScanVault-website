import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Terms of Service - ScanVault',
  description: 'Terms of Service for ScanVault Android application and services.',
};

export default function TermsOfService() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="header-wrapper">
        <div className="container header">
          <Link href="/" className="brand">
            <div className="brand-icon">
              <Image src="/images/logo.png" alt="ScanVault Logo" width={32} height={32} />
            </div>
            <span>ScanVault</span>
          </Link>
          <Link href="/" className="nav-cta-btn">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="policy-page">
        <div className="container">
          <div className="policy-card">
            <h1 className="policy-title">Terms of Service</h1>
            <div className="policy-date">Last Updated: October 2026</div>

            <div className="policy-body">
              <p>
                By downloading, installing, or using <strong>ScanVault</strong>, you agree to be bound by these Terms of Service.
              </p>

              <h2>1. License & Usage</h2>
              <p>
                ScanVault grants you a personal, non-exclusive, non-transferable, revocable license to use the application on any compatible Android device that you own or control, in accordance with the Google Play Terms of Service.
              </p>

              <h2>2. User Responsibility & Content</h2>
              <p>
                You retain sole ownership and control over any data, barcodes, and QR codes generated or saved within ScanVault.
                Because ScanVault operates as an autonomous on-device utility without remote backup servers, you are responsible for maintaining backups of your sensitive notes and exported records.
              </p>

              <h2>3. Disclaimer of Warranties</h2>
              <p>
                ScanVault is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied.
                While we strive for optimal decoding accuracy and security, we do not warrant that operation will be error-free or uninterrupted.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All trademarks, logos, and service marks displayed in the application are the property of their respective owners. Google Play and the Google Play logo are trademarks of Google LLC.
              </p>

              <h2>5. Contact Information</h2>
              <p>
                For questions regarding these Terms, contact our developer team at:
                <br />
                <strong>Email:</strong> <a href="mailto:support@nomidev.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>support@nomidev.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-wrapper" style={{ marginTop: 'auto' }}>
        <div className="container footer-bottom-bar">
          <div>© 2026 ScanVault. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/app-ads.txt">app-ads.txt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
