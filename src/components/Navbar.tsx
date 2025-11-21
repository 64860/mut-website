"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Research', href: '/research' },
        { name: 'Student Life', href: '/student-life' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar" style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--white)', padding: '10px 0', fontSize: '0.9rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div className="top-contact" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}><FaPhoneAlt style={{ marginRight: '8px', color: 'var(--accent-gold)' }} /> +254 700 123 456</span>
                        <span style={{ display: 'flex', alignItems: 'center' }}><FaEnvelope style={{ marginRight: '8px', color: 'var(--accent-gold)' }} /> info@mut.ac.ke</span>
                    </div>
                    <div className="top-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Staff Portal</Link>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Student Portal</Link>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Library</Link>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header style={{
                backgroundColor: 'var(--white)',
                padding: '15px 0',
                boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaGraduationCap style={{ fontSize: '2.5rem', color: 'var(--primary-blue)' }} className="logo-icon" />
                        <div className="logo-text">
                            <h1 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', lineHeight: 1.2, margin: 0 }}>MUT</h1>
                            <span style={{ fontSize: '0.85rem', color: 'var(--secondary-green)', fontWeight: 500 }}>Murang&apos;a University of Technology</span>
                        </div>
                    </Link>

                    <nav style={{ position: 'relative' }}>
                        {/* Mobile Toggle Button */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            style={{
                                display: 'none',
                                fontSize: '1.8rem',
                                color: 'var(--primary-blue)',
                                cursor: 'pointer',
                                background: 'none',
                                border: 'none',
                                padding: '5px',
                                zIndex: 1001
                            }}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Navigation Menu */}
                        <ul
                            className={`nav-menu ${isOpen ? 'mobile-open' : ''}`}
                            style={{
                                display: 'flex',
                                gap: '25px',
                                listStyle: 'none',
                                margin: 0,
                                padding: 0
                            }}
                        >
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '0.95rem',
                                            color: 'var(--primary-blue)',
                                            position: 'relative',
                                            padding: '10px 0',
                                            display: 'block',
                                            borderBottom: pathname === link.href ? '3px solid var(--secondary-green)' : 'none',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 999,
                        display: 'none'
                    }}
                    className="mobile-overlay"
                />
            )}

            <style jsx global>{`
        /* Mobile styles */
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block !important;
          }

          .top-bar {
            font-size: 0.8rem !important;
          }

          .top-contact,
          .top-links {
            font-size: 0.8rem;
          }

          .logo-icon {
            font-size: 2rem !important;
          }

          .logo h1 {
            font-size: 1.2rem !important;
          }

          .logo span {
            font-size: 0.7rem !important;
          }

          .nav-menu {
            display: none !important;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--white);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            flex-direction: column !important;
            padding: 20px;
            gap: 0 !important;
            max-height: calc(100vh - 70px);
            overflow-y: auto;
            z-index: 1000;
          }

          .nav-menu.mobile-open {
            display: flex !important;
          }

          .nav-menu li {
            width: 100%;
            text-align: center;
            padding: 0;
            border-bottom: 1px solid var(--light-gray);
          }

          .nav-menu li:last-child {
            border-bottom: none;
          }

          .nav-link {
            padding: 15px 10px !important;
            font-size: 1rem !important;
          }

          .mobile-overlay {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .top-bar {
            display: none !important;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
        </>
    );
}
