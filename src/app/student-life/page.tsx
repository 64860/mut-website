import Image from "next/image";

export default function StudentLife() {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Student Life</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Experience a holistic campus life beyond the classroom.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                        <div style={{ position: 'relative', height: '400px' }}>
                            <Image
                                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '10px' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Clubs & Societies</h2>
                            <p style={{ marginBottom: '20px' }}>
                                Join over 30 active clubs and societies ranging from professional bodies, religious groups, to hobby clubs. Whether you are interested in robotics, drama, or community service, there is a place for you.
                            </p>
                            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Sports & Recreation</h2>
                            <p>
                                We have state-of-the-art sports facilities for football, basketball, rugby, athletics, and indoor games. Our teams participate in national leagues and inter-university competitions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
