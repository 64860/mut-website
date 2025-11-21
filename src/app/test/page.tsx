"use client";
import { useState } from 'react';

export default function TestPage() {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const testConnection = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/test');
            const data = await response.json();
            setResult(data);
        } catch (error: any) {
            setResult({
                success: false,
                message: 'Failed to connect to API',
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
                maxWidth: '800px',
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
                    🧪 Backend Connection Test
                </h1>

                <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
                    Click the button below to test your Supabase database connection
                </p>

                <button
                    onClick={testConnection}
                    disabled={loading}
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: loading ? 'none' : '0 5px 15px rgba(102, 126, 234, 0.4)',
                        transition: 'all 0.3s ease',
                        transform: loading ? 'none' : 'translateY(0)',
                    }}
                    onMouseOver={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.6)';
                        }
                    }}
                    onMouseOut={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                        }
                    }}
                >
                    {loading ? '⏳ Testing...' : '🚀 Test Connection'}
                </button>

                {result && (
                    <div style={{
                        marginTop: '30px',
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
                            {result.message}
                        </p>

                        {result.tables && (
                            <div style={{ marginTop: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>
                                    Database Tables:
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {result.tables.map((table: any) => (
                                        <li key={table.table} style={{
                                            padding: '10px',
                                            marginBottom: '8px',
                                            background: table.exists ? '#d4edda' : '#f8d7da',
                                            borderRadius: '5px',
                                            border: `1px solid ${table.exists ? '#28a745' : '#dc3545'}`
                                        }}>
                                            <strong>{table.table}</strong>: {table.exists ? '✅ Exists' : '❌ Not found'}
                                            {table.error && <div style={{ fontSize: '0.9rem', color: '#721c24', marginTop: '5px' }}>{table.error}</div>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {result.error && (
                            <div style={{
                                marginTop: '15px',
                                padding: '15px',
                                background: '#fff3cd',
                                border: '1px solid #ffc107',
                                borderRadius: '5px'
                            }}>
                                <strong>Error Details:</strong>
                                <pre style={{
                                    marginTop: '10px',
                                    padding: '10px',
                                    background: '#f8f9fa',
                                    borderRadius: '5px',
                                    overflow: 'auto',
                                    fontSize: '0.9rem'
                                }}>
                                    {result.error}
                                </pre>
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
                    marginTop: '40px',
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    color: '#666'
                }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#333' }}>
                        📋 What This Tests:
                    </h3>
                    <ul style={{ marginLeft: '20px' }}>
                        <li>✅ Environment variables are configured</li>
                        <li>✅ Supabase client can connect</li>
                        <li>✅ Database tables exist (schema.sql was run)</li>
                        <li>✅ API routes are working</li>
                    </ul>
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
