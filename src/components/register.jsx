import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { globalPost } from './base';


function Registration() {

    // All your js code must be inside the component function this is because this is what you are exporting
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async function (e) {
        e.preventDefault();

        console.log("Hello, this is submitted...")
        // navigate('/dashboard');

        try {
            const response = await globalPost('auth/register', { username, email, password });
            console.log('Registration successful:', response);
            console.log(response)
            const userInfo = response.data.user
            localStorage.setItem("token", response.data.token)
            const profileBio = {
                username: userInfo.username,
                email: userInfo.email,
                _id: userInfo._id
            }
            localStorage.setItem("user", JSON.stringify(profileBio))
            navigate('/dashboard');


        } catch (error) {
            console.error('Registration failed:', error);
            // Show error message to user
        }
    }


    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>todo app</h1>
                <p className="subtitle">stay organized and productive</p>
                <h2>register</h2>
                <form onSubmit={handleSubmit} id="registration">
                    <div form-content>
                        <label htmlFor="fullname">fullname</label>
                        <input type="text" name="username" id="username" placeholder="enter your fullname" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" placeholder="enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" placeholder="choose a password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <p className="terms">by creating an account, you agree to the <a href="./">terms of services</a> and <a href="./"> privacy policy</a></p>
                    <button type="submit" id="createAccount" className="create-account-btn">
                        <span className="material-symbols-outlined">passkey</span>
                        create account
                    </button>
                    <p className="login"> already have an account? <Link to="/">login</Link></p>
                </form>
            </div>

        </div>
    );
}
export default Registration