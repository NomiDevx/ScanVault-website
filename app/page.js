'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedDemo, setCopiedDemo] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [apkModalOpen, setApkModalOpen] = useState(false);
  const [qrTheme, setQrTheme] = useState('green'); // 'green' | 'black'

  // Live QR Demo State
  const [demoText, setDemoText] = useState('https://scanvault.nomidev.com');
  const [demoColor, setDemoColor] = useState('#006C4F');

  const STORE_URL = 'https://play.google.com/store/apps/details?id=com.nomidevx.scanvault&pcampaignid=web_share';
  const PACKAGE_NAME = 'com.nomidevx.scanvault';

  const handleCopyStoreLink = async () => {
    try {
      await navigator.clipboard.writeText(STORE_URL);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

  const screenshots = [
    {
      id: 1,
      title: 'Custom Color QR Generator',
      category: 'CREATIVE SUITE',
      subtitle: 'Pick hues, adjust padding, & instant preview',
      image: '/images/screen-generator.png',
      badge: 'STYLING STUDIO',
    },
    {
      id: 2,
      title: 'Organized Scan History',
      category: 'ENCRYPTED MEMORY',
      subtitle: 'Color tags, timestamps, & quick detail',
      image: '/images/screen-history.png',
      badge: 'OFFLINE VAULT',
    },
    {
      id: 3,
      title: 'Fast Search & Filter Bar',
      category: 'INSTANT QUERY',
      subtitle: 'Query by type, schema, or scan date',
      image: '/images/screen-history.png',
      badge: 'LOCAL RETRIEVAL',
    },
    {
      id: 4,
      title: 'Instant One-Tap Sharing',
      category: 'EXPORT ENGINE',
      subtitle: 'Save to gallery, copy to clipboard, or share',
      image: '/images/hero-phone.png',
      badge: 'CROSS-APP ACTIONS',
    },
  ];

  const colors = [
    { name: 'Emerald', hex: '#006C4F' },
    { name: 'Cobalt Navy', hex: '#1E3A8A' },
    { name: 'Deep Violet', hex: '#6B21A8' },
    { name: 'Crimson', hex: '#B91C1C' },
    { name: 'Pitch Black', hex: '#111827' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <header className="header-wrapper">
        <div className="container header">
          <Link href="/" className="brand" aria-label="ScanVault Home">
            <div className="brand-icon">
              <Image src="/images/logo.png" alt="ScanVault Logo" width={32} height={32} priority />
            </div>
            <span>ScanVault</span>
          </Link>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#screenshots" className="nav-link">Screenshots</a></li>
              <li><a href="#security" className="nav-link">Security &amp; Vault</a></li>
              <li><a href="#demo" className="nav-link">Live Studio</a></li>
              <li><a href="#install" className="nav-link">How to Install</a></li>
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              id="header-play-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-1.468V3.282c0-.568.225-1.096.61-1.468zm11.604 11.608l2.67-2.67-11.758-6.72 9.088 9.39zm0-2.844L6.125 1.188 17.883 7.9l-2.67 2.678zm1.422 1.422l3.414 1.95a1.8 1.8 0 0 0 1.84 0l-3.83-3.83-1.424 1.88z"/>
              </svg>
              <span>Install Google Play</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-card)', padding: '20px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Features</a>
              <a href="#screenshots" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Screenshots</a>
              <a href="#security" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Security &amp; Vault</a>
              <a href="#demo" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>Live Studio</a>
              <a href="#install" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: 'var(--text-main)' }}>How to Install</a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play-store"
                style={{ justifyContent: 'center', marginTop: '12px' }}
              >
                <div className="play-text">
                  <span className="play-label">GET IT ON</span>
                  <span className="play-title">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container hero-grid">
          <div>
            <div className="hero-pill-badge">
              <span className="dot" />
              <span>Play Protect Verified • v2.1.0 Offline • Zero-Cloud Architecture</span>
            </div>

            <h1 className="hero-title">
              Fast, Secure QR Scanner <br />
              <span className="gradient-text">&amp; Personal Vault</span> <br />
              for Android.
            </h1>

            <p className="hero-subtitle">
              Generate custom stylized QR codes, scan instantly with edge-to-edge camera detection, and keep an encrypted, searchable history of every link, contact, and note.
            </p>

            <div className="hero-cta-group">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play-store"
                id="hero-play-store-cta"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-1.468V3.282c0-.568.225-1.096.61-1.468z" fill="#00C1A4"/>
                  <path d="M17.883 7.9L6.125 1.188 15.213 10.578l2.67-2.678z" fill="#FF3333"/>
                  <path d="M15.213 13.422l-9.088 9.39 11.758-6.72-2.67-2.67z" fill="#FFD400"/>
                  <path d="M17.883 16.1l3.414-1.95a1.8 1.8 0 0 0 0-3.15L17.883 7.9l-2.67 2.678 2.67 2.672 0 .001.001.002-.001.001z" fill="#00E676"/>
                </svg>
                <div className="play-text">
                  <span className="play-label">GET IT ON</span>
                  <span className="play-title">Google Play</span>
                </div>
              </a>

              <a href="#install" className="btn-secondary-pill" id="hero-scan-to-download-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3v-3" />
                </svg>
                <span>Scan to Download</span>
              </a>
            </div>

            <div className="hero-features-row">
              <div className="hero-feature-item">
                <span className="hero-feature-icon">⚡</span>
                <span>Sub-Second Instant Decode</span>
              </div>
              <div className="hero-feature-item">
                <span className="hero-feature-icon">🎨</span>
                <span>Custom Color Brand Styling</span>
              </div>
              <div className="hero-feature-item">
                <span className="hero-feature-icon">🛡️</span>
                <span>On-Device Local Vault</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="hero-visual-wrapper">
            <div className="hero-phone-container">
              <Image
                src="/images/hero-phone.png"
                alt="ScanVault Android Phone Mockup"
                width={768}
                height={1376}
                priority
                loading="eager"
                className="hero-phone-img"
              />

              {/* Floating Badge */}
              <div className="hero-floating-badge">
                <div className="floating-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="floating-badge-text">
                  <div className="title">Official Release</div>
                  <div className="subtitle">Google Play Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan to Install Banner Card (Using assets/extended.svg) */}
      <section className="install-banner-section" id="install">
        <div className="container">
          <div className="install-card">
            <div>
              <div className="section-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                <span>Instant Mobile Installation</span>
              </div>

              <h2 className="install-heading">Scan to install directly on your Android phone</h2>
              <p className="install-desc">
                Point your camera scanner at the QR code on the right to open the official Google Play store link immediately. No manual searching, no misleading results.
              </p>

              <div className="install-action-row">
                <div className="package-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>{PACKAGE_NAME}</span>
                </div>

                <button
                  className={`btn-copy-package ${copiedLink ? 'copied' : ''}`}
                  onClick={handleCopyStoreLink}
                  id="copy-store-link-btn"
                >
                  {copiedLink ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Store Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy Store Link</span>
                    </>
                  )}
                </button>

                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-details-link"
                >
                  <span>View All Package Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* QR Card on Right - Using the attached extended.svg */}
            <div className="install-qr-box">
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <button
                  onClick={() => setQrTheme('green')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: qrTheme === 'green' ? '#006C4F' : '#E5ECE8',
                    color: qrTheme === 'green' ? '#FFFFFF' : '#4B5563',
                    transition: 'var(--transition)'
                  }}
                >
                  Emerald Frame
                </button>
                <button
                  onClick={() => setQrTheme('black')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: qrTheme === 'black' ? '#111827' : '#E5ECE8',
                    color: qrTheme === 'black' ? '#FFFFFF' : '#4B5563',
                    transition: 'var(--transition)'
                  }}
                >
                  Classic Frame
                </button>
              </div>

              <div
                style={{
                  width: '200px',
                  height: '248px',
                  background: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  border: '1px solid #DFECE4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <Image
                  src={qrTheme === 'green' ? '/images/qr-code-green.svg' : '/images/qr-code-extended.svg'}
                  alt="Scan QR code to download ScanVault from Google Play"
                  width={180}
                  height={225}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div className="install-qr-caption">Scan with Camera</div>
              <div className="install-qr-subtext">Opens to Google Play Store page</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">ENGINEERED FOR SPEED &amp; PRIVACY</div>
            <h2 className="section-title">Everything you need in a modern QR powerhouse.</h2>
            <p className="section-subtitle">
              Scan, generate, style, and store barcodes and QR codes without friction, zero-ads clutter, and zero data leakage.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                </svg>
              </div>
              <div className="feature-category">OFFICIAL ENGINE</div>
              <h3 className="feature-title">Instant QR &amp; Barcode Detection</h3>
              <p className="feature-desc">
                Sub-second camera processing with dynamic auto-focus. Reads curved, tilted, and low-light codes with integrated flashlight support and rapid continuous batch scanning.
              </p>
              <div className="feature-bullets">
                <div className="feature-bullet-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Micro-QR, UPC, EAN, Code-128 &amp; 8 formats</span>
                </div>
                <div className="feature-bullet-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Real-time auto flashlight toggle</span>
                </div>
                <div className="feature-bullet-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Continuous blind batch scanning pipeline</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <div className="feature-category">CREATIVE SUITE</div>
              <h3 className="feature-title">Custom QR Code Studio</h3>
              <p className="feature-desc">
                Pick custom brand hues - emerald, deep navy, crimson, or violet. Adjust output dimensions up to 1080 resolution, embed center logos, and format clean quiet zones effortlessly.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <div className="color-dots-row">
                  <div className="color-dot" style={{ background: '#006C4F' }} title="Emerald Green" />
                  <div className="color-dot" style={{ background: '#1E3A8A' }} title="Deep Navy" />
                  <div className="color-dot" style={{ background: '#6B21A8' }} title="Royal Violet" />
                  <div className="color-dot" style={{ background: '#B91C1C' }} title="Crimson Red" />
                  <div className="color-dot" style={{ background: '#111827' }} title="Pitch Black" />
                </div>
                <div className="feature-bullet-item" style={{ paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Direct Vector &amp; Raster Hi-Res Export</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="feature-category">CRYPTOGRAPHIC MEMORY</div>
              <h3 className="feature-title">Encrypted History Vault</h3>
              <p className="feature-desc">
                Categorized archives for web links, text notes, Wi-Fi credentials, and contacts that are keyed and searchable. Favorite, pin, and batch CSV export with strict zero-telemetry storage.
              </p>
              <div className="metric-pills-row">
                <div className="metric-pill">0.198s</div>
                <div className="metric-pill">Play Protect</div>
                <div className="metric-pill">AES-256 Offline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live QR Generator Studio (Demo for Visitors) */}
      <section className="generator-demo-section" id="demo">
        <div className="container">
          <div className="generator-card">
            <div>
              <div className="section-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>Interactive In-Browser Demo</span>
              </div>
              <h2 className="install-heading">Try the ScanVault Studio in real-time</h2>
              <p className="install-desc">
                See how effortless it is to generate stylized QR codes. Type any link or message and pick your brand hue.
              </p>

              <div className="demo-input-group">
                <label className="demo-label">Encoded Content (URL or Text)</label>
                <input
                  type="text"
                  className="demo-input"
                  value={demoText}
                  onChange={(e) => setDemoText(e.target.value)}
                  placeholder="https://yourwebsite.com or Secret Note"
                />
              </div>

              <div className="demo-input-group">
                <label className="demo-label">Pick Brand Theme Hue</label>
                <div className="demo-palette-picker">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      className={`demo-color-btn ${demoColor === c.hex ? 'active' : ''}`}
                      style={{ background: c.hex }}
                      onClick={() => setDemoColor(c.hex)}
                      aria-label={`Select ${c.name}`}
                      title={c.name}
                    />
                  ))}
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                    {colors.find(c => c.hex === demoColor)?.name}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button
                  className="btn-play-store"
                  style={{ background: demoColor, padding: '10px 20px', fontSize: '0.9rem' }}
                  onClick={() => {
                    setCopiedDemo(true);
                    navigator.clipboard.writeText(demoText);
                    setTimeout(() => setCopiedDemo(false), 2000);
                  }}
                >
                  {copiedDemo ? 'Copied Content!' : 'Copy Code Payload'}
                </button>
              </div>
            </div>

            {/* Live QR Output Preview */}
            <div className="demo-qr-preview-box">
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: `2px solid ${demoColor}22`,
                  width: '220px',
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  {/* Top-Left Finder */}
                  <rect x="6" y="6" width="28" height="28" rx="6" fill={demoColor} />
                  <rect x="12" y="12" width="16" height="16" rx="3" fill="#FFFFFF" />
                  <rect x="16" y="16" width="8" height="8" rx="2" fill={demoColor} />

                  {/* Top-Right Finder */}
                  <rect x="66" y="6" width="28" height="28" rx="6" fill={demoColor} />
                  <rect x="72" y="12" width="16" height="16" rx="3" fill="#FFFFFF" />
                  <rect x="76" y="16" width="8" height="8" rx="2" fill={demoColor} />

                  {/* Bottom-Left Finder */}
                  <rect x="6" y="66" width="28" height="28" rx="6" fill={demoColor} />
                  <rect x="12" y="72" width="16" height="16" rx="3" fill="#FFFFFF" />
                  <rect x="16" y="76" width="8" height="8" rx="2" fill={demoColor} />

                  {/* Styled Matrix Data modules */}
                  <rect x="38" y="10" width="6" height="6" rx="2" fill={demoColor} />
                  <rect x="48" y="10" width="6" height="6" rx="2" fill={demoColor} />
                  <rect x="56" y="10" width="6" height="6" rx="2" fill={demoColor} />

                  <rect x="38" y="20" width="6" height="6" rx="2" fill={demoColor} />
                  <rect x="48" y="24" width="6" height="6" rx="2" fill={demoColor} />
                  <rect x="56" y="22" width="6" height="6" rx="2" fill={demoColor} />

                  <rect x="38" y="32" width="6" height="6" rx="2" fill={demoColor} />
                  <rect x="48" y="34" width="6" height="6" rx="2" fill={demoColor} />

                  <rect x="10" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="22" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="36" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="48" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="60" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="72" y="44" width="8" height="8" rx="2.5" fill={demoColor} />
                  <rect x="84" y="44" width="8" height="8" rx="2.5" fill={demoColor} />

                  <rect x="40" y="58" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="52" y="58" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="64" y="58" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="76" y="58" width="7" height="7" rx="2" fill={demoColor} />

                  <rect x="40" y="72" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="52" y="72" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="66" y="72" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="80" y="72" width="7" height="7" rx="2" fill={demoColor} />

                  <rect x="42" y="86" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="56" y="86" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="70" y="86" width="7" height="7" rx="2" fill={demoColor} />
                  <rect x="84" y="86" width="7" height="7" rx="2" fill={demoColor} />
                </svg>
              </div>

              <div style={{ marginTop: '14px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                ScanVault Live Stylizer
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Rendered with high-resolution vector precision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Showcase (Phone Carousel) */}
      <section className="screenshots-section" id="screenshots">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">PORTABLE VAULT IN ACTION</div>
            <h2 className="section-title">Crafted for Android. Native, fluid, and intuitive.</h2>
            <p className="section-subtitle">
              Designed with Material You ergonomics so you can scan, customize, and organize codes using effortless one-handed gestures.
            </p>
          </div>

          <div className="screenshots-grid">
            {screenshots.map((s) => (
              <div
                key={s.id}
                className="screenshot-card"
                onClick={() => setSelectedScreenshot(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedScreenshot(s); }}
              >
                <div className="screenshot-img-frame">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="screenshot-img"
                  />
                </div>
                <div className="screenshot-badge">{s.badge}</div>
                <h3 className="screenshot-title">{s.title}</h3>
                <p className="screenshot-desc">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Architecture Comparison Section */}
      <section className="security-section" id="security">
        <div className="container security-grid">
          <div>
            <div className="section-tag">SECURITY &amp; PRIVACY FIRST</div>
            <h2 className="section-title">Why ScanVault over default scanner utilities?</h2>
            <p className="section-subtitle">
              Most scanner apps quietly upload decoded URLs to remote tracking analytics or offer spam-filled behavioral metrics. ScanVault is built under a strict <strong>Zero-Knowledge &amp; Local-Processing</strong> guarantee.
            </p>

            <div className="security-points-list">
              <div className="security-point-item">
                <div className="point-number-box">1</div>
                <div>
                  <h4 className="point-title">100% Local Processing</h4>
                  <p className="point-desc">
                    Scanned items are parsed directly in Android device memory and immediately cleared. Never routed through cloud proxies or third-party servers.
                  </p>
                </div>
              </div>

              <div className="security-point-item">
                <div className="point-number-box">2</div>
                <div>
                  <h4 className="point-title">No Compulsory Sign-up</h4>
                  <p className="point-desc">
                    Start scanning the second it installs. No emails, phone numbers, contact syncs, or push notification permission requests.
                  </p>
                </div>
              </div>

              <div className="security-point-item">
                <div className="point-number-box">3</div>
                <div>
                  <h4 className="point-title">Encrypted Vault Storage</h4>
                  <p className="point-desc">
                    Saved history is stored locally in your device&apos;s private app directory with AES-256 hardware-backed encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Architecture Audit Scorecard */}
          <div className="audit-card">
            <div className="audit-header">
              <div className="audit-title-group">
                <div className="audit-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="audit-title">Privacy Architecture Audit</div>
              </div>
              <span className="badge-compliant">Compliant</span>
            </div>

            <div className="audit-rows-list">
              <div className="audit-row-item">
                <span className="audit-row-label">Telemetry Data Collection</span>
                <span className="audit-row-val">0 bytes sent</span>
              </div>
              <div className="audit-row-item">
                <span className="audit-row-label">Android Keystore Encryption</span>
                <span className="audit-row-val">AES-256-GCM / SQL</span>
              </div>
              <div className="audit-row-item">
                <span className="audit-row-label">Offline Operability</span>
                <span className="audit-row-val">100% Autonomous</span>
              </div>
            </div>

            <div className="audit-footer-box">
              <div className="audit-footer-text">User Data Ownership: You own 100%</div>
              <div className="audit-footer-stat">100% / 100%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA Banner */}
      <section className="pre-footer-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div>
              <div className="section-tag" style={{ color: '#006C4F' }}>START SCANNING CLEANLY</div>
              <h2 className="cta-banner-title">Ready to upgrade your QR experience?</h2>
              <p className="cta-banner-desc">
                Download ScanVault today for lightning-quick scans, unlimited stylish QR code generation, and layered vault peace of mind.
              </p>

              <div className="cta-buttons-row">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-green"
                  id="cta-bottom-play-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-1.468V3.282c0-.568.225-1.096.61-1.468zm11.604 11.608l2.67-2.67-11.758-6.72 9.088 9.39zm0-2.844L6.125 1.188 17.883 7.9l-2.67 2.678zm1.422 1.422l3.414 1.95a1.8 1.8 0 0 0 1.84 0l-3.83-3.83-1.424 1.88z"/>
                  </svg>
                  <span>Available on Google Play</span>
                </a>

                <button
                  className="btn-cta-white"
                  onClick={() => setApkModalOpen(true)}
                  id="cta-bottom-apk-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Direct APK (12 MB)</span>
                </button>
              </div>
            </div>

            {/* QR Card on Right - Using the attached extended.svg */}
            <div className="cta-qr-card">
              <div
                style={{
                  width: '150px',
                  height: '186px',
                  background: '#FFFFFF',
                  padding: '8px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  boxShadow: '0 4px 12px rgba(0, 108, 79, 0.08)'
                }}
              >
                <Image
                  src="/images/qr-code-green.svg"
                  alt="ScanVault Play Store QR Code"
                  width={140}
                  height={175}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#064E3B' }}>ScanVault v2.1</div>
              <div style={{ fontSize: '0.72rem', color: '#065F46' }}>Point camera to open Play Store</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer-wrapper">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="brand">
                <div className="brand-icon">
                  <Image src="/images/logo.png" alt="ScanVault Logo" width={32} height={32} />
                </div>
                <span>ScanVault</span>
              </Link>
              <p className="footer-brand-desc">
                Instant QR decoding with confidential on-device storage. A privacy-first tool built for offline cryptographic vault.
              </p>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play-store"
                style={{ padding: '8px 18px', width: 'fit-content' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-1.468V3.282c0-.568.225-1.096.61-1.468zm11.604 11.608l2.67-2.67-11.758-6.72 9.088 9.39zm0-2.844L6.125 1.188 17.883 7.9l-2.67 2.678zm1.422 1.422l3.414 1.95a1.8 1.8 0 0 0 1.84 0l-3.83-3.83-1.424 1.88z"/>
                </svg>
                <div className="play-text">
                  <span className="play-label" style={{ fontSize: '0.6rem' }}>GET IT ON</span>
                  <span className="play-title" style={{ fontSize: '0.9rem' }}>Google Play</span>
                </div>
              </a>
            </div>

            <div>
              <h4 className="footer-col-title">Product</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#features">QR Scanner</a></li>
                <li className="footer-link-item"><a href="#security">Encrypted Vault</a></li>
                <li className="footer-link-item"><a href="#demo">Offline Sync</a></li>
                <li className="footer-link-item"><a href="#features">Batch Scanning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Security &amp; Tech</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#security">Zero-Knowledge Model</a></li>
                <li className="footer-link-item"><a href="#security">AES-256 Encryption</a></li>
                <li className="footer-link-item"><a href="#security">Biometric Lock</a></li>
                <li className="footer-link-item"><a href="#security">Database Architecture</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Legal &amp; Trust</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item"><Link href="/privacy">Privacy Policy</Link></li>
                <li className="footer-link-item"><Link href="/terms">Terms of Service</Link></li>
                <li className="footer-link-item"><Link href="/app-ads.txt">Digital Ads (app-ads.txt)</Link></li>
                <li className="footer-link-item"><a href="https://github.com/NomiDevx/ScanVault-website" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © 2026 ScanVault. All rights reserved. Google Play and the Google Play logo are trademarks of Google LLC.
            </div>
            <div className="footer-bottom-links">
              <span>Security Audit</span>
              <span>•</span>
              <span>GDPR Compliance</span>
              <span>•</span>
              <Link href="/app-ads.txt">app-ads.txt</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Screenshot Lightbox Modal */}
      {selectedScreenshot && (
        <div className="modal-overlay" onClick={() => setSelectedScreenshot(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedScreenshot(null)}
              aria-label="Close Preview"
            >
              ✕
            </button>
            <div style={{ position: 'relative', width: '100%', height: '540px' }}>
              <Image
                src={selectedScreenshot.image}
                alt={selectedScreenshot.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ padding: '24px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '4px' }}>
                {selectedScreenshot.category}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                {selectedScreenshot.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {selectedScreenshot.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Direct APK Modal */}
      {apkModalOpen && (
        <div className="modal-overlay" onClick={() => setApkModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '36px' }}>
            <button
              className="modal-close-btn"
              onClick={() => setApkModalOpen(false)}
              aria-label="Close Modal"
            >
              ✕
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div className="brand-icon">
                <Image src="/images/logo.png" alt="ScanVault" width={32} height={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>ScanVault APK v2.1.0</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Direct Distribution</span>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              For sideloading or devices without Google Mobile Services. This APK contains the exact same code, signature, and AES-256 vault architecture as the Google Play release.
            </p>

            <div style={{ background: '#F8FAF9', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '14px', marginBottom: '24px', fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              <div><strong>Package:</strong> {PACKAGE_NAME}</div>
              <div><strong>Architecture:</strong> arm64-v8a, armeabi-v7a, x86_64</div>
              <div><strong>Min SDK:</strong> Android 8.0 (API 26)</div>
              <div><strong>Target SDK:</strong> Android 14 (API 34)</div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play-store"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Install via Play Store</span>
              </a>
              <button
                className="btn-secondary-pill"
                onClick={() => {
                  alert('Direct APK download link will be available upon repository release tag.');
                  setApkModalOpen(false);
                }}
              >
                <span>Download APK</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
