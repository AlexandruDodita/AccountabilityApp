
function LoginForm(){
    return(<div className="AuthForm">
            <h1>Login</h1>
            <form>
                <input className="AuthInput"   type="text" name="username" placeholder="Username" />
                <input className="AuthInput" type="password" name="password" placeholder="Password" />
            </form>
            <button className="btt-submit">Submit</button>
        </div>)
}

export default LoginForm;