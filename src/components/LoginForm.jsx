
import React, {useState} from 'react';
import axios from 'axios';
import {useAuth} from '../context/AuthContext';

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();

    async function handleSubmit(event){
        event.preventDefault();
        setMessage('');

        try{
            const response = await axios.post('http://localhost:5001/api/login',{
                username: username,
                password: password
            }); 
            
            login(response.data.token, response.data.user);

            // setMessage(response.data.message);
            console.log("Succesful");
        }catch(error){
            if(error.response){
                setMessage(error.response.data.error);
            }else{
                setMessage('Network error. Is the server running?');
            }
        }
    }

    function changeUsername(event){
        setUsername(event.target.value);
    }

    function changePassword(event){
        setPassword(event.target.value);
    }


    return(<div className="AuthForm">
            <h1>Login</h1>
            <form>
                <input className="AuthInput"   type="text" name="username" placeholder="Username" onChange={changeUsername}/>
                <input className="AuthInput" type="password" name="password" placeholder="Password" onChange={changePassword}/>
            </form>
            <button className="btt-submit" onClick={handleSubmit}>Submit</button>
            {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        </div>)
}

export default LoginForm;