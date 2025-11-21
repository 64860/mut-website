"use client";
import { useState } from 'react';

export default function TestEmailPage() {
    const [formData, setFormData] = useState({
        to: '',
        subject: 'Test Email from MUT Website',
        message: 'Hello! This is a test email to verify that the email system is working correctly. 📧'
    });
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const sendTestEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('/api/test-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            setResult(data);
        } catch (error: any) {
            setResult({
                success: false,
                error: error.message
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '50px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold'
                }}>
                    📧 Email Test
                </h1>

                <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
                    Test your Resend email configuration
                </p>

                <form onSubmit={sendTestEmail} style={{ marginBottom: '30px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                            Send To (Your Email):
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.to}
                            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                            placeholder="your.email@example.com"
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '1rem',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                            Subject:
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '1rem',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                            Message:
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '1rem',
                                border: '2px solid #ddd',
                                borderRadius: '8px',
                                boxSizing: 'border-box',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            boxShadow: loading ? 'none' : '0 5px 15px rgba(102, 126, 234, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {loading ? '📨 Sending...' : '🚀 Send Test Email'}
                    </button>
                </form>

                {result && (
                    <div style={{
                        padding: '25px',
                        background: result.success ? '#d4edda' : '#f8d7da',
                        border: `2px solid ${result.success ? '#28a745' : '#dc3545'}`,
                        borderRadius: '10px',
                        animation: 'slideIn 0.3s ease'
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '15px',
                            color: result.success ? '#155724' : '#721c24'
                        }}>
                            {result.success ? '✅ Success!' : '❌ Error'}
                        </h2>

                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '15px',
                            color: result.success ? '#155724' : '#721c24',
                            fontWeight: 500
                        }}>
                            {result.message || result.error}
                        </p>

                        {result.emailId && (
                            <div style={{
                                marginTop: '15px',
                                padding: '15px',
                                background: '#f8f9fa',
                                borderRadius: '5px',
                                fontSize: '0.95rem'
                            }}>
                                <strong>Email ID:</strong> <code>{result.emailId}</code>
                            </div>
                        )}

                        {result.hint && (
                            <div style={{
                                marginTop: '15px',
                                padding: '15px',
                                background: '#d1ecf1',
                                border: '1px solid #0c5460',
                                borderRadius: '5px',
                                color: '#0c5460'
                            }}>
                                <strong>💡 Hint:</strong> {result.hint}
                            </div>
                        )}
                    </div>
                )}

                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    background: '#fff3cd',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    border: '2px solid #ffc107'
                }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#856404' }}>
                        ⚠️ Before Testing:
                    </h3>
                    <ol style={{ marginLeft: '20px', color: '#856404' }}>
                        <li>Create a <a href="https://resend.com" target="_blank" style={{ color: '#0066cc' }}>Resend</a> account (free)</li>
                        <li>Get your API key from the dashboard</li>
                        <li>Add it to <code>.env.local</code> as <code>RESEND_API_KEY</code></li>
                        <li>Restart your dev server</li>
                    </ol>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
