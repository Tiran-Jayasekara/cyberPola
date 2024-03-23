
import axios from 'axios';
import React from 'react'

const CartService = () => {
    const http = axios.create({
        // baseURL: "https://cyberpola-backend.onrender.com",
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            // "x-auth-token": token,
        },
    });

    const addItemToCart = async (itemForm) => {
        try {
            const cartResponce = await http.post("cart/addItemToCart", itemForm);
            return cartResponce;

        } catch (error) {
            throw error
        }
    }

    const getAllItemsByUser = async (userId) => {
        console.log(userId);
        try {
            const items = await http.get("cart/getAllCartItemsByUser/" + userId);
            if (items) {
                return items;
            }

        } catch (error) {
            throw error
        }
    }

    const removerItemFromCart = async (itemId) => {
        console.log(itemId);
        try {
            const itemData = await http.delete("cart/DeleteItemFromCart/" + itemId);
            if (itemData) {
                return itemData;
            }

        } catch (error) {
            throw error
        }
    }

    return {
        addItemToCart,
        getAllItemsByUser,
        removerItemFromCart
    }
}

export default CartService