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
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="top-contact">
                        <span style={{ marginRight: '20px' }}><FaPhoneAlt style={{ marginRight: '8px', color: 'var(--accent-gold)', display: 'inline' }} /> +254 700 123 456</span>
                        <span><FaEnvelope style={{ marginRight: '8px', color: 'var(--accent-gold)', display: 'inline' }} /> info@mut.ac.ke</span>
                    </div>
                    <div className="top-links" style={{ display: 'flex', gap: '15px' }}>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Staff Portal</Link>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Student Portal</Link>
                        <Link href="#" style={{ color: 'var(--white)', fontWeight: 500 }}>Library</Link>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header style={{
                backgroundColor: 'var(--white)',
                padding: '20px 0',
                boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaGraduationCap style={{ fontSize: '3rem', color: 'var(--primary-blue)' }} />
                        <div className="logo-text">
                            <h1 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', lineHeight: 1.2 }}>MUT</h1>
                            <span style={{ fontSize: '0.9rem', color: 'var(--secondary-green)', fontWeight: 500 }}>Murang'a University of Technology</span>
                        </div>
                    </Link>

                    <nav>
                        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', fontSize: '1.5rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>

                        {/* Desktop Nav */}
                        <ul className="nav-menu" style={{ display: 'flex', gap: '30px' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                        style={{
                                            fontWeight: 600,
                                            color: 'var(--primary-blue)',
                                            position: 'relative',
                                            padding: '10px 0',
                                            borderBottom: pathname === link.href ? '3px solid var(--secondary-green)' : 'none'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
