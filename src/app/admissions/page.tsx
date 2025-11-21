"use client";

export default function Admissions() {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Admissions</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Join our vibrant community of scholars.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>How to Apply</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '50px' }}>
                        <StepCard number="1" title="Choose Program" desc="Browse our academic programs and select the one that fits your career goals." />
                        <StepCard number="2" title="Check Requirements" desc="Ensure you meet the minimum entry requirements for your chosen course." />
                        <StepCard number="3" title="Apply Online" desc="Create an account on our portal and submit your application details." />
                        <StepCard number="4" title="Admission Letter" desc="Successful applicants will receive an admission letter to join MUT." />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button
                            onClick={() => alert('Redirecting to Application Portal...')}
                            className="btn"
                        >
                            Start Application
                        </button>
                        <button
                            onClick={() => alert('Downloading Fee Structure...')}
                            className="btn btn-outline"
                            style={{ borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)' }}
                        >
                            Download Fee Structure
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{
                width: '50px',
                height: '50px',
                background: 'var(--secondary-green)',
                color: 'var(--white)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 20px'
            }}>
                {number}
            </div>
            <h4 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>{title}</h4>
            <p>{desc}</p>
        </div>
    );
}
