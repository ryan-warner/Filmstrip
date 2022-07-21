import React, { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

function AuthProvider(props) {
    const navigate = useNavigate();

    const login = (username, password) => {
        const content = {"userIdentifier": username, "password": password};
        const response = fetch("http://127.0.0.1:5000/api/v1/auth/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify(content)
        })
        response.then(response => {if (response.status !== 200) {response.reject("Problem with the request")} else {return response.json()}})
        .then(body => {
            localStorage.setItem("filmstripToken", body.token);
            
            console.log(localStorage.getItem("filmstripToken"));
            navigate("/portfolio");
        })
    }
    const register = () => {console.log("register")}
    const logout = () => {console.log("logging out")}
    const isLoggedIn = () => {return true}

    return (
        <AuthContext.Provider value={{login, register, logout, isLoggedIn}} {...props} />
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }