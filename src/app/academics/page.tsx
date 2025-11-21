"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Academics() {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Academics</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Explore our diverse range of schools and programs.</p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                    <SchoolAccordion
                        title="School of Computing & Information Technology"
                        courses={[
                            "BSc. Computer Science",
                            "BSc. Information Technology",
                            "BSc. Software Engineering",
                            "Diploma in IT"
                        ]}
                    />
                    <SchoolAccordion
                        title="School of Business & Economics"
                        courses={[
                            "Bachelor of Commerce",
                            "BSc. Human Resource Management",
                            "BSc. Entrepreneurship",
                            "MBA"
                        ]}
                    />
                    <SchoolAccordion
                        title="School of Engineering & Technology"
                        courses={[
                            "BSc. Electrical & Electronics Engineering",
                            "BSc. Civil Engineering",
                            "BSc. Mechanical Engineering"
                        ]}
                    />
                    <SchoolAccordion
                        title="School of Pure & Applied Sciences"
                        courses={[
                            "BSc. Mathematics & Computer Science",
                            "BSc. Actuarial Science",
                            "BSc. Analytical Chemistry"
                        ]}
                    />
                </div>
            </section>
        </>
    );
}

function SchoolAccordion({ title, courses }: { title: string, courses: string[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            background: 'var(--white)',
            border: '1px solid #eee',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '20px'
        }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--light-gray)',
                    padding: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h3 style={{ color: 'var(--primary-blue)', margin: 0 }}>{title}</h3>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && (
                <div style={{ padding: '20px' }}>
                    <ul>
                        {courses.map((course, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: '10px 0',
                                    borderBottom: index < courses.length - 1 ? '1px solid #eee' : 'none',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span style={{ color: 'var(--secondary-green)', marginRight: '10px' }}>✓</span>
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
