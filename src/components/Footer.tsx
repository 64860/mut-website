import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#cccccc', padding: '70px 0 20px', marginTop: 'auto' }}>
            <div className="container">
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '50px' }}>
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--white)', marginBottom: '25px', fontSize: '1.2rem', borderBottom: '2px solid var(--secondary-green)', paddingBottom: '10px', display: 'inline-block' }}>About MUT</h4>
                        <p>Murang'a University of Technology is a premier institution dedicated to providing quality education, research, and innovation for the prosperity of society.</p>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--white)', marginBottom: '25px', fontSize: '1.2rem', borderBottom: '2px solid var(--secondary-green)', paddingBottom: '10px', display: 'inline-block' }}>Quick Links</h4>
                        <ul className="footer-links">
                            <FooterLink href="/admissions">Apply Online</FooterLink>
                            <FooterLink href="#">University Portal</FooterLink>
                            <FooterLink href="#">E-Learning</FooterLink>
                            <FooterLink href="#">Tenders</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--white)', marginBottom: '25px', fontSize: '1.2rem', borderBottom: '2px solid var(--secondary-green)', paddingBottom: '10px', display: 'inline-block' }}>Academics</h4>
                        <ul className="footer-links">
                            <FooterLink href="/academics">Undergraduate</FooterLink>
                            <FooterLink href="/academics">Postgraduate</FooterLink>
                            <FooterLink href="/academics">TVET Institute</FooterLink>
                            <FooterLink href="/academics">Short Courses</FooterLink>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--white)', marginBottom: '25px', fontSize: '1.2rem', borderBottom: '2px solid var(--secondary-green)', paddingBottom: '10px', display: 'inline-block' }}>Contact Us</h4>
                        <ul className="contact-info">
                            <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}><FaMapMarkerAlt style={{ color: 'var(--secondary-green)' }} /> Murang'a, Kenya</li>
                            <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}><FaPhone style={{ color: 'var(--secondary-green)' }} /> +254 700 123 456</li>
                            <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}><FaEnvelope style={{ color: 'var(--secondary-green)' }} /> info@mut.ac.ke</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright" style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p>&copy; 2025 Murang'a University of Technology. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li style={{ marginBottom: '12px' }}>
            <Link href={href} style={{ transition: 'all 0.3s ease' }} className="hover:text-green-600 hover:pl-1">
                {children}
            </Link>
        </li>
    );
}
