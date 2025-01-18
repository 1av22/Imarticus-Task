import React, { useState, useRef } from 'react';

const ProgramCurriculum = () => {
    const [activeModules, setActiveModules] = useState([]); // Track multiple open modules
    const refs = useRef({}); // Store references to each module for smooth scrolling

    const curriculumData = [
        {
            module: 'Welcome to the Digital Marketing Pro Course',
            lessons: [
                { title: 'Kickstarting your Journey as a Digital Marketer', type: 'Orientation' },
                { title: 'Network & Slack Training Session', type: 'Orientation' },
                { title: 'Know your Self Assessment', type: 'Customer Diagnostic Test' },
            ],
        },
        {
            module: 'Fundamentals of Digital Marketing',
            lessons: [
                { title: 'Business Models and Competitor Research', type: 'Live Class' },
                { title: 'How to create a Customer Persona?', type: 'Live Class' },
                { title: 'Captain Collab: Building Customer Personas with Research & Data', type: 'Live Class(Jam Session)' },
                { title: 'Minor Project: Brand Analysis for brands like Zoom & Lenskart', type: 'Minor Project' },
                { title: 'Understanding Marketing Funnels', type: 'Live Class' },
                { title: 'Success Metrics of a Funnel', type: 'Live Class' },
                { title: 'Captain Collab: Marketing Funnels & Metrics', type: 'Live Class(Jam Session)' },
                { title: 'Identifying the right career fit for you in Digital Marketing', type: 'Counselling' },
            ],
        },
        {
            module: "Search Engine Optimisation",
            lessons: [
                { title: "Understanding SEO & Setting up Google Keyword Planner", type: "Live Class" },
                { title: "How does the world of Search Engines work?", type: "Live Class" },
                { title: "How Websites and URLs are structured?", type: "Live Class" },
                { title: "Keyword Research & Analysis for Myntra", type: "Live Class (Jam Session)" },
                { title: "Identifying the Website Structure and URL Optimisation", type: "Minor Project" },
                { title: "What are Keywords and how to identify them?", type: "Live Class" },
                { title: "Creating SEO-friendly Content with the help of ChatGPT", type: "Live Class" },
                { title: "Keyword Research and Content Creation", type: "Live Class (Jam Session)" },
                { title: "Keyword Research and Content Creation for Brands like Myntra", type: "Minor Project" },
                { title: "Introduction to On-Page SEO", type: "Live Class" },
                { title: "Introduction to Technical SEO", type: "Live Class" },
                { title: "Understanding Technical SEO: Part 1", type: "Live Class" },
                { title: "Understanding Technical SEO: Part 2", type: "Live Class" },
                { title: "Introduction to Off-Page SEO", type: "Live Class" },
                { title: "Website Audit", type: "Live Class (Jam Session)" },
                { title: "Website Audit for On-Page, Technical, and Off Page SEO Issues", type: "Minor Project" },
                { title: "Explore Google Search Console and learn how to use essential SEO Tools", type: "Live Class" },
                { title: "Important Google Updates and Case Studies", type: "Live Class" },
                { title: "SEO: Doubt Solving and Interaction Session", type: "Live Class" },
                { title: "Understanding SEO Metrics and creating SEO Strategy", type: "Live Class" },
                { title: "Creating SEO Strategy for an E-Com Website", type: "Live Class" },
                { title: "Creating SEO Strategy for a SaaS Website", type: "Live Class" },
                { title: "Creating SEO Strategy for a Brand", type: "Live Class" },
                { title: "Creating SEO Strategy for a Brand", type: "Minor Project" },
                { title: "Building a kickass Digital Marketer's Resume", type: "Live Class" },
                { title: "How to build a Strong Linkedin Profile", type: "Live Class" },
                { title: "How to prepare for the Interview in SEO", type: "Live Class" },
                { title: "App Store and YouTube Optimisation", type: "Recorded Lesson" },
                { title: "How to Find Errors in a Website?", type: "Recorded Lesson" },
                { title: "How to Build a Website from Scratch?", type: "Recorded Lesson" },
                { title: "Search Engine Optimisation: Brand Audit", type: "Portfolio Project" },
            ],
        },
        {
            module: "Performance Marketing Mastery",
            lessons: [
                { title: "Introduction to Performance Marketing", type: "Orientation" },
                { title: "Understanding the Scope of Performance Marketing", type: "Live Class" },
                { title: "Starting Your Journey with Marketing Funnels", type: "Live Class" },
                { title: "Understanding Marketing Metrics and KPIs", type: "Live Class (Jam Session)" },
                { title: "Understanding of Root Cause Analysis", type: "Reading/Video Resource" },
                { title: "Tools for Root Cause Analysis", type: "Live Class" },
                { title: "A Guide to Google Analytics", type: "Reading/Video Resource" },
                { title: "Navigating Google Analytics Dashboards", type: "Live Class" },
                { title: "Starting Your Excel Journey", type: "Reading/Video Resource" },
                { title: "Excel Formulas Cheat Sheet", type: "Reading/Video Resource" },
                { title: "Data Visualization on Excel", type: "Reading/Video Resource" },
                { title: "Data Analysis on Excel", type: "Live Class" },
                { title: "Google Analytics", type: "Minor Project" },
                { title: "Understanding Online PPC Advertising", type: "Reading/Video Resource" },
                { title: "Google Ads and Business Integration", type: "Live Class" },
                { title: "Crafting Winning Google Search Ads", type: "Live Class" },
                { title: "The Art of Writing for Google Ads", type: "Reading/Video Resource" },
                { title: "Understanding Shopping Ads and Universal App Campaigns", type: "Live Class" },
                { title: "Strategies for Google Ad Campaigns", type: "Live Class" },
                { title: "Mastering Data Visualization and Reporting", type: "Reading/Video Resource" },
                { title: "Types of Reports in Performance Marketing", type: "Reading/Video Resource" },
                { title: "Tools for Data Visualization and Reporting on Google", type: "Live Class" },
                { title: "Setting up a Google Campaign", type: "Minor Project" },
                { title: "Creating SEO Strategy for a Brand", type: "Minor Project" },
                { title: "Paid Marketing on Meta Platforms", type: "Reading/Video Resource" },
                { title: "Introduction to Meta Platform and Business Integration", type: "Live Class" },
                { title: "The Art of Ad Copy in the Meta Universe", type: "Reading/Video Resource" },
                { title: "Running Campaigns and A/B Testing Analysis", type: "Recorded Lesson" },
                { title: "Strategies and A/B Testing Insights", type: "Recorded Lesson" },
                { title: "Campaign Strategies for Meta Success", type: "Recorded Lesson" },
                { title: "Campaign Optimization Strategies in the Meta Universe", type: "Live Class" },
                { title: "Mastering Data Visualization and Reporting on Meta", type: "Live Class" },
                { title: "A Guide to Data Visualization and Reporting", type: "Reading/Video Resource" },
                { title: "Running a Meta Campaign", type: "Minor Project" },
                { title: "Mastering Mid Funnel Optimization", type: "Reading/Video Resource" },
                { title: "LinkedIn: Strategies for B2B Success", type: "Live Class" },
                { title: "Mastering Play/App Store Optimization and Apple Search Ads", type: "Reading/Video Resource" },
                { title: "Leveraging Email Marketing", type: "Live Class" },
                { title: "Mastering WhatsApp, SMS, and IVR for Marketing", type: "Reading/Video Resource" },
                { title: "E-com Advertising and Strategies", type: "Live Session" },
                { title: "Navigating the World of Influencer Marketing", type: "Reading/Video Resource" },
                { title: "An Introduction to Affiliate Marketing", type: "Live Session" },
                { title: "Strategies for Targeting and Retargeting Online", type: "Reading/Video Resource" },
            ],
        },
    ];

    const toggleModule = (index) => {
        if (activeModules.includes(index)) {
            // If already active, close it
            setActiveModules(activeModules.filter((i) => i !== index));
        } else {
            // If not active, open it and scroll to it
            setActiveModules([...activeModules, index]);
            refs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div id='curriculum' style={{
            width: '90%',
            maxWidth: '1200px',
            margin: '2rem auto',
            fontFamily: 'Arial, sans-serif',

        }}>
            {/* Main Heading */}
            <h1 style={{
                fontSize: '2rem',
                textAlign: 'center',
                marginBottom: '0',
                fontWeight: '700',
                color: "#3c4852"
            }}>
                Program Curriculum
            </h1>

            {/* Subheading */}
            <p style={{
                fontSize: '0.9rem',
                textAlign: 'center',
                fontWeight: '600',
                color: '#3c4852',
                marginBottom: '1rem',
            }}>
                Our curriculum is designed to make you a finest marketer
            </p>

            {/* Accordion for Modules */}
            <div style={{ margin: '0' }}>
                {curriculumData.map((module, index) => (
                    <div
                        key={index}
                        ref={(el) => (refs.current[index] = el)} // Attach ref to each module
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '0',
                            overflow: 'hidden',
                            borderBottom: index === curriculumData.length - 1 ? '1px solid #ddd' : 'none',
                        }}
                    >
                        {/* Module Header */}
                        <div
                            onClick={() => toggleModule(index)}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.75rem 1rem',
                                backgroundColor: '#f5f5f5',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                            }}
                        >
                            <span style={{ fontWeight: 'bold' }}>
                                {module.module}
                            </span>
                            <span style={{
                                transform: activeModules.includes(index) ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                fontSize: '1rem',
                            }}>
                                ➤
                            </span>
                        </div>

                        {/* Module Content */}
                        {activeModules.includes(index) && (
                            <div style={{
                                padding: '0.75rem 1rem',
                                backgroundColor: '#fff',
                                transition: 'max-height 0.3s ease-in-out',
                            }}>
                                {module.lessons.map((lesson, lessonIndex) => (
                                    <div
                                        key={lessonIndex}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.85rem',
                                        }}
                                    >
                                        <span style={{
                                            color: '#333',
                                            wordBreak: 'break-word',
                                        }}>
                                            <img
                                                src={
                                                    lesson.type === 'Minor Project' || lesson.type === 'Portfolio Project'
                                                        ? "https://cdn.pegasus.imarticus.org/Mycaptain/image-19.webp"
                                                        : "https://webcdn.imarticus.org/myCaptainDM/image8.svg"
                                                }
                                            ></img>
                                            {lesson.title}
                                        </span>
                                        <span style={{
                                            color: '#888',
                                            fontStyle: 'italic',
                                        }}>
                                            {lesson.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <button
                    style={{
                        backgroundColor: 'rgb(255, 122, 79)',
                        color: 'white',
                        border: 'none',
                        padding: '1.5rem 2.5rem',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => {
                        alert('Downloading Curriculum...');
                    }}
                >
                    Download Curriculum
                </button>
            </div>
        </div>
    );
};

export default ProgramCurriculum;
