

function Registration() {
  
    return(
        <div className="container">
            <div className="form-wrapper">
                <h1>todo app</h1>
                <p className="subtitle">stay organized and productive</p>
                <h2>register</h2>
                <form action="" id="registration">
                    <div form-content>
                        <label htmlFor="fullname">fullname</label>
                        <input type="text" name="username" id="username" placeholder="enter your fullname" required/>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" placeholder="enter your email" required/>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" placeholder="choose a password" required/>
                    </div>

                    <p className="terms">by creating an account, you agree to the <a href="./">terms of services</a> and <a href="./"> privacy policy</a></p>
                    <button type="submit" id="createAccount" className="create-account-btn">
                        <span class="material-symbols-outlined">passkey</span>
                        create account</button>
                    <p className="login"> already have an account? <a href="./">login</a></p>
                </form>
            </div>
            
        </div>
    );
}
export default Registration