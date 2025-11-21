"use client";
import { useState, FormEvent } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>We&apos;d love to hear from you. Get in touch.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                        {/* Contact Form */}
                        <div>
                            <h2 style={{ marginBottom: '20px', color: 'var(--primary-blue)' }}>Send us a Message</h2>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div style={{
                                    padding: '15px',
                                    marginBottom: '20px',
                                    background: '#d4edda',
                                    border: '1px solid #28a745',
                                    borderRadius: '5px',
                                    color: '#155724'
                                }}>
                                    ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div style={{
                                    padding: '15px',
                                    marginBottom: '20px',
                                    background: '#f8d7da',
                                    border: '1px solid #dc3545',
                                    borderRadius: '5px',
                                    color: '#721c24'
                                }}>
                                    ❌ {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={status === 'loading'}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            fontFamily: 'inherit',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={status === 'loading'}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            fontFamily: 'inherit',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        disabled={status === 'loading'}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            fontFamily: 'inherit',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        disabled={status === 'loading'}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            fontFamily: 'inherit',
                                            height: '150px',
                                            resize: 'vertical',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={status === 'loading'}
                                    style={{
                                        opacity: status === 'loading' ? 0.6 : 1,
                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {status === 'loading' ? '📤 Sending...' : '📨 Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h2 style={{ marginBottom: '20px', color: 'var(--primary-blue)' }}>Visit Us</h2>
                            <ul style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                                <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <FaMapMarkerAlt style={{ color: 'var(--secondary-green)', marginTop: '5px', flexShrink: 0 }} />
                                    <span>Murang&apos;a University of Technology<br />P.O. Box 75-10200, Murang&apos;a</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <FaPhone style={{ color: 'var(--secondary-green)' }} /> +254 700 123 456
                                </li>
                                <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <FaEnvelope style={{ color: 'var(--secondary-green)' }} /> info@mut.ac.ke
                                </li>
                                <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <FaClock style={{ color: 'var(--secondary-green)' }} /> Mon - Fri: 8:00 AM - 5:00 PM
                                </li>
                            </ul>
                            <div style={{
                                height: '300px',
                                background: '#eee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '10px',
                                color: '#666'
                            }}>
                                <p><i className="fas fa-map"></i> Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
