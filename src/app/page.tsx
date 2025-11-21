import Link from "next/link";
import Image from "next/image";
import { FaLaptopCode, FaUserGraduate, FaGlobeAfrica, FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                height: '80vh',
                background: 'linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 102, 51, 0.6)), url(https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: 'var(--white)'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: 700, textTransform: 'uppercase' }}>
                        Innovation for Prosperity
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
                        Empowering the next generation of leaders through technology, research, and holistic education.
                    </p>
                    <Link href="/admissions" className="btn">Apply Now</Link>
                    <Link href="/about" className="btn btn-outline">Virtual Tour</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" style={{ padding: '80px 0', backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <div className="section-title">
                        <h3>Why Choose Us</h3>
                        <h2>World Class Education</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <FeatureCard
                            icon={<FaLaptopCode />}
                            title="Technology Driven"
                            desc="State-of-the-art laboratories and digital learning resources to prepare you for the future."
                        />
                        <FeatureCard
                            icon={<FaUserGraduate />}
                            title="Expert Faculty"
                            desc="Learn from distinguished professors and industry experts committed to your success."
                        />
                        <FeatureCard
                            icon={<FaGlobeAfrica />}
                            title="Global Perspective"
                            desc="International partnerships and exchange programs to broaden your horizons."
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats" style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--white)', padding: '80px 0', textAlign: 'center' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                    <StatItem number="10k+" label="Students" />
                    <StatItem number="50+" label="Programs" />
                    <StatItem number="500+" label="Staff Members" />
                    <StatItem number="20+" label="Years of Excellence" />
                </div>
            </section>

            {/* News Section */}
            <section className="news" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="section-title">
                        <h3>Latest Updates</h3>
                        <h2>News & Events</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <NewsCard
                            image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            date="Nov 20, 2025"
                            title="10th Graduation Ceremony Announced"
                            desc="Join us as we celebrate the academic achievements of the Class of 2025."
                        />
                        <NewsCard
                            image="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            date="Nov 18, 2025"
                            title="International Research Conference"
                            desc="Scholars from around the globe gather to discuss sustainable technology solutions."
                        />
                        <NewsCard
                            image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            date="Nov 15, 2025"
                            title="University Sports Day Highlights"
                            desc="A day of fun, competition, and team spirit at the university sports complex."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: 'var(--secondary-green)', marginBottom: '20px' }}>{icon}</div>
            <h4 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.3rem' }}>{title}</h4>
            <p>{desc}</p>
        </div>
    );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '10px' }}>{number}</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{label}</p>
        </div>
    );
}

function NewsCard({ image, date, title, desc }: { image: string, date: string, title: string, desc: string }) {
    return (
        <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', background: 'var(--white)' }}>
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '25px' }}>
                <span style={{ color: 'var(--secondary-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px', display: 'block' }}>{date}</span>
                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.2rem', lineHeight: 1.4 }}>{title}</h4>
                <p style={{ marginBottom: '15px' }}>{desc}</p>
                <Link href="/news" style={{ color: 'var(--primary-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Read More <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}
