import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Registration() {
     const [username, setusername] = useState ('')
     const [email, setemail] = useState ('')
     const [password, setpassword] = useState ('')

     const handleSubmit = (e) => {
        e.preventDefault();
         console.log('user info', {username, email, password});
        //fetch request
        async function submitForm() {
            try {
                const response = await fetch('https://simple-todo-enpoints.onrender.com/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                });
                const data = await response.json();
                console.log('Success:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
     submitForm()
     
     
  
    return(
        <div className="container">
            <div className="form-wrapper">
                <h1>todo app</h1>
                <p className="subtitle">stay organized and prodtfyufugyuhuihihuctive</p>
                <h2>register</h2>
                <form onSubmit={handleSubmit} id="registration">
                    <div className='form-content'>
                        <label htmlFor="fullname">fullname</label>
                        <input type="text" name="username" id="username" onChange={(e) => setusername(e.target.value)} placeholder="enter your fullname" required />
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setemail(e.target.value)} placeholder="enter your email" required/>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setpassword(e.target.value)} placeholder="choose a password" required/>
                    </div>

                    <p className="terms">by creating an account, you agree to the <a href="./">terms of services</a> and <a href="./"> privacy policy</a></p>
                    <button type="submit" id="createAccount" className="create-account-btn">
                        {/* <span class="material-symbols-outlined">passkey</span> */}
                        create account
                        </button>
                    <p className="login"> already have an account? <Link to='/login'>login</Link> </p>
                </form>
            </div>
            
        </div>
    );
}
}

export default Registration