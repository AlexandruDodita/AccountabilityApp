

function RegisterForm(){
    return (<div className="AuthForm">
            <h1>Register</h1>
            <form>
                <input className="AuthInput"   type="text" name="username" placeholder="Username" />
                <input className="AuthInput" type="email" name="email" placeholder="email@address.com" />
                <input className="AuthInput" type="text" name="phoneNumber" placeholder="Phone Number" />
                <input className="AuthInput" type="password" name="password" placeholder="Password" />
                <input className="AuthInput" type="password" name="confirmPassword" placeholder="Confirm Password"/>
            </form>
            <button className="btt-submit">Submit</button>
        </div>)
}

export default RegisterForm;