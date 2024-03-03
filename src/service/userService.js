import React from 'react'
import axios from "axios";

const UserService = () => {

    const http = axios.create({
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            // "x-auth-token": token,
        },
    });

    const userRegister = async (registerForm) => {
        try {
            const user = await http.post("user/addUser", registerForm);
            return user;

        } catch (error) {
            throw error
        }
    }

    const userLogin = async (LoginForm) => {
        try {
            const user = await http.post("user/UserLogin", LoginForm);
            return user;

        } catch (error) {
            throw error
        }
    }

    return {
        userRegister,
        userLogin
    }
}

export default UserService