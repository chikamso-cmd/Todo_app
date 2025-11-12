import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { globalPost } from './base';

function Login() {

    // All your js code must be inside the component function this is because this is what you are exporting
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async function (e) {
        e.preventDefault();

        console.log("Hello, this is submitted login...")
        navigate('/dashboard');

        // try {
        //     const response = await globalPost('register', { username, email, password });
        //     console.log('Registration successful:', response);
        //     // Redirect to login or `dashboard`
        // } catch (error) {
        //     console.error('Registration failed:', error);
        //     // Show error message to user
        // }
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>todo app</h1>
                <p className="subtitle">stay organized and productive</p>
                <h2>login</h2>
                <form onSubmit={handleSubmit} id="login" className="login-body">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" placeholder="enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="label">
                        <label htmlFor="password">password</label>
                        <a href="./"> forgot password</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="choose a password" required value={password~} />

                    <button type="submit" id="login-btn" className="login-btn">
                        <span className="material-symbols-outlined">login</span>
                        login
                    </button>
                    <p className="login"> don't have an account?  <Link to="/register">register</Link></p>
                </form>
            </div>

        </div>
    );
}
export default Login