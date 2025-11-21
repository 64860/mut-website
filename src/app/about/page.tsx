import Image from "next/image";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section style={{
                background: 'linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                textAlign: 'center',
                color: 'var(--white)',
                marginBottom: '50px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>About Us</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Discover our history, mission, and the people behind MUT.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Our History</h2>
                            <p style={{ marginBottom: '15px' }}>
                                Murang'a University of Technology (MUT) was established in September 2011 via Murang'a University College Order, 2011. It was a successor to Murang'a College of Technology. The University is strategically located in Murang'a Town, a serene environment conducive for learning.
                            </p>
                            <p>
                                Since its inception, MUT has grown tremendously in student population, infrastructure, and academic programs, positioning itself as a leader in technology and innovation.
                            </p>
                        </div>
                        <div style={{ position: 'relative', height: '400px' }}>
                            <Image
                                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Campus"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <ValueCard icon={<FaBullseye />} title="Mission" desc="To provide quality education, training, and research for the prosperity of society." />
                        <ValueCard icon={<FaEye />} title="Vision" desc="A leading University in technology, innovation, and enterprise development." />
                        <ValueCard icon={<FaGem />} title="Core Values" desc="Integrity, Professionalism, Equity, Quality, and Innovation." />
                    </div>
                </div>
            </section>
        </>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div style={{
            background: 'var(--light-gray)',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            borderBottom: '4px solid var(--secondary-green)'
        }}>
            <div style={{ fontSize: '2rem', color: 'var(--primary-blue)', marginBottom: '15px' }}>{icon}</div>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
