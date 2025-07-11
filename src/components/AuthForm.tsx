import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


function AuthForm(){
    var userExists=false;
    return (userExists ? <LoginForm /> : <RegisterForm /> );
}

export default AuthForm;