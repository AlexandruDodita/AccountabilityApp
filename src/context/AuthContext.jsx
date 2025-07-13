import React, {createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [token,setToken]=useState(null);
    const [user, setUser]=useState(null);

    useEffect(()=>{
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('authUser');

        if (storedToken && storedUser){
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (newToken, userData) => {
        localStorage.setItem('authToken', newToken);
        localStorage.setItem('authUser',JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
    };

    const logout = () =>{
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        setToken(null);
        setUser(null);
    }

    const value={token, user, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    return useContext(AuthContext);
}