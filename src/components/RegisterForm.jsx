import React, {useState} from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function RegisterForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('');
    const {login} = useAuth();


    async function handleSubmit(event){
        event.preventDefault();
        setMessage('');
        
        try{

            if (password===confirmedPassword){

                const response = await axios.post('http://localhost:5001/api/register', { //TODO change this to dynamically get the proper link through the .env
                    username: username,
                    password: password,
                    email: email,
                    phoneNumber: phoneNumber
                });
                setMessage(response.data.message);
                // console.log(`Logged in user: ${response.data.user}`);

                setUsername(''); setEmail(''); setPhoneNumber(''); setPassword('');  setConfirmedPassword('');
                login(response.data.token, response.data.user);
            }else{
                setMessage("Passwords don't match!")
            }
        }catch(error){
            if (error.response){
                setMessage(error.response.data.error);
            }else{
                setMessage('Network error. Is the server running?');
            }
        }
    }

    function changeUsername(event){
        setUsername(event.target.value);
    }

    function changeEmail(event){
        setEmail(event.target.value);
    }
    
    function changePhoneNumber(event){
        setPhoneNumber(event.target.value);
    }

    function changePassword(event){
        setPassword(event.target.value);
    }

    function changeConfirmedPasswword(event){
        setConfirmedPassword(event.target.value);
    }

    return (<div className="AuthForm">
            <h1>Register</h1>
            <form>
                <input className="AuthInput"   type="text" name="username" placeholder="Username" onChange={changeUsername} />
                <input className="AuthInput" type="email" name="email" placeholder="email@address.com" onChange={changeEmail} />
                <input className="AuthInput" type="text" name="phoneNumber" placeholder="Phone Number (optional)" onChange={changePhoneNumber}/>
                <input className="AuthInput" type="password" name="password" placeholder="Password" onChange={changePassword}/>
                <input className="AuthInput" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={changeConfirmedPasswword} />
            </form>
            <button className="btt-submit" onClick={handleSubmit}>Submit</button>
            {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        </div>)
}

export default RegisterForm;