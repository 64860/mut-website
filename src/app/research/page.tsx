import { FaFlask, FaRobot, FaHandshake } from "react-icons/fa";

export default function Research() {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Research & Innovation</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Solving real-world problems through cutting-edge research.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <FeatureCard
                            icon={<FaFlask />}
                            title="Scientific Research"
                            desc="Our labs are buzzing with activity as researchers tackle challenges in health, agriculture, and environment."
                        />
                        <FeatureCard
                            icon={<FaRobot />}
                            title="Tech Innovation"
                            desc="Developing software and hardware solutions to modernize local industries."
                        />
                        <FeatureCard
                            icon={<FaHandshake />}
                            title="Collaborations"
                            desc="Partnering with industry leaders and other universities to maximize impact."
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
