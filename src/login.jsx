

function Login() {

    return(
                 <div className="container">
            <div className="form-wrapper">
                <h1>todo</h1>
                  <p className="subtitle">stay organized and productive</p>
                <h2>login</h2>
                <form action="" id="login" className="login-body">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" placeholder="enter your email" required/>
                    <div className="label">
                        <label htmlFor="password">password</label>
                         <a href="./"> forgot password</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="choose a password" required/>

                    <button type="submit" id="login-btn" className="login-btn">
                    <span class="material-symbols-outlined">login</span>
                    login</button>
                    <p className="login"> don't have an account? <a href="./">create one</a></p>
                </form>
            </div>
            
        </div>
    );
}
export default Login