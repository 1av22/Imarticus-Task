import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: '#e9f7ef',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    padding: '2rem',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '500px',
                }}
            >
                <h1 className="text-center mb-4" style={{ color: '#28a745' }}>
                    Welcome to the LMS
                </h1>
                <p className="text-center">Explore the available courses</p>
                <div className="text-center">
                    <Link to="/login" className="btn btn-success mx-2">
                        Login
                    </Link>
                    <Link to="/signup" className="btn btn-success mx-2">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
