import React from 'react'
import axios from "axios";

const UserService = () => {

    const http = axios.create({
        baseURL: "http://localhost:3001",
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
            console.log(LoginForm);
            const user = await http.post("user/UserLogin", LoginForm);
            console.log(user);
            return user;

        } catch (error) {
            throw error
        }
    }

    const GetUserData = async (userId) => {
        try {
            const user = await http.get("user/UserData/" + userId);
            return user;

        } catch (error) {
            throw error
        }
    }


    return {
        userRegister,
        userLogin,
        GetUserData
    }
}

export default UserService