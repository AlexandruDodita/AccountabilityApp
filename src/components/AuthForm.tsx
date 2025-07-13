import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {useState} from 'react';

function AuthForm(){
    // return (userExists ? <LoginForm /> : <RegisterForm /> );
    const [isUserRegistered, setIsUserRegistered] = useState('true');

    function toggleForm(){
        if (isUserRegistered==="true"){
            setIsUserRegistered("false");
        }else{
            setIsUserRegistered("true");
        }
    }

    return (<div className="AuthForm">
                {isUserRegistered==="true"? <LoginForm /> : <RegisterForm />}
                <p> {isUserRegistered==="false" ? "Already have an account? ":"Don't have an account?"}</p>
                <a href="#" onClick={(e)=>{
                    e.preventDefault;
                    toggleForm();
                }}
                style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline'}}>
                    {isUserRegistered==="false" ? "Login here." : "Register here."}
                </a>
            </div>);

}
export default AuthForm;