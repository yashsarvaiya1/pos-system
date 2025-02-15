import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <h2>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit" style={{ marginTop: '20px' }}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;