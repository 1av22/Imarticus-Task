import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://imarticus-task.onrender.com/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/enroll'); // Redirect to home after successful login
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

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
                <h2 className="text-center mb-4" style={{ color: '#28a745' }}>
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
