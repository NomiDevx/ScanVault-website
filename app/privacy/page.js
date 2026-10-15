import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy - ScanVault',
  description: 'Privacy Policy for ScanVault Android App and Services. Zero telemetry, 100% local processing.',
};

export default function PrivacyPolicy() {
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
            <h1 className="policy-title">Privacy Policy</h1>
            <div className="policy-date">Last Updated: October 2026 • Effective Date: October 2026</div>

            <div className="policy-body">
              <p>
                At <strong>ScanVault</strong>, your privacy and cryptographic sovereignty are our core design principles.
                This Privacy Policy explains how our Android mobile application and website handle information.
              </p>

              <h2>1. Zero-Cloud & Local-First Architecture</h2>
              <p>
                ScanVault is built under a strict <strong>Zero-Knowledge guarantee</strong>:
              </p>
              <ul>
                <li><strong>No Remote Processing:</strong> All QR code and barcode decoding occurs 100% locally on your Android device CPU/NPU using Android CameraX and hardware ML acceleration.</li>
                <li><strong>No Telemetry or Tracking:</strong> We do not log, upload, track, or inspect the contents of your scanned barcodes, Wi-Fi credentials, contacts, or URLs.</li>
                <li><strong>No Intermediary Proxies:</strong> URLs scanned with the camera are never redirected through remote redirectors or analytics gateways.</li>
              </ul>

              <h2>2. Vault Data Storage & Encryption</h2>
              <p>
                When you choose to save scans to your History Vault:
              </p>
              <ul>
                <li>Data is saved exclusively in your device&apos;s sandboxed internal storage.</li>
                <li>Encrypted records utilize Android Keystore hardware-backed keys with AES-256-GCM encryption.</li>
                <li>No account creation is required: no email, phone number, or password is sent to any remote server.</li>
              </ul>

              <h2>3. Camera & Hardware Permissions</h2>
              <p>
                ScanVault requests only permissions strictly necessary for application functionality:
              </p>
              <ul>
                <li><strong>Camera:</strong> Used in real-time solely to detect and decode QR codes and barcodes within the viewfinder. No video or frames are saved or transmitted without your explicit action.</li>
                <li><strong>Storage / Media (Optional):</strong> Required only when you explicitly tap &quot;Save to Gallery&quot; to export a generated QR code image.</li>
                <li><strong>Flashlight:</strong> Used to illuminate low-light scanning environments at your option.</li>
              </ul>

              <h2>4. Third-Party Services & Advertisements</h2>
              <p>
                We adhere to strict transparency standards. Any advertising partners (such as Google AdMob) operate within Google Play&apos;s standard SDK sandbox and comply with Google&apos;s Families and User Data policies.
                Our authorized digital ads verification record is published at <code>/app-ads.txt</code> in compliance with IAB standards.
              </p>

              <h2>5. Contact Us</h2>
              <p>
                If you have questions regarding this privacy policy or ScanVault&apos;s cryptographic implementation, contact us at:
              </p>
              <p>
                <strong>Developer Support:</strong> <a href="mailto:support@nomidev.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>support@nomidev.com</a><br />
                <strong>Website:</strong> <a href="https://github.com/NomiDevx/ScanVault-website" style={{ color: 'var(--primary)', fontWeight: 600 }}>ScanVault GitHub Repository</a>
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
            <Link href="/terms">Terms of Service</Link>
            <Link href="/app-ads.txt">app-ads.txt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
