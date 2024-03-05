import axios from 'axios';
import React from 'react'

const ItemService = () => {

    const http = axios.create({
        baseURL: "https://cyberpola-backend.onrender.com",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            // "x-auth-token": token,
        },
    });

    const addNewItem = async (itemForm) => {
        try {
            const items = await http.post("/item/addItem", itemForm);
            return items;

        } catch (error) {
            throw error
        }
    }

    const deleteItem = async (itemId) => {
        try {
            const deleteItemData = await http.delete("/item/deleteItem/" + itemId);
            return deleteItemData;

        } catch (error) {
            throw error
        }
    }

    const getItemsByFarmerId = async (farmerId) => {
        try {
            const getItems = await http.get("/item/itemsByFarmer/" + farmerId);
            return getItems;

        } catch (error) {
            throw error
        }
    }

    const getItemsBySearch = async (search) => {
        try {
            const getItems = await http.get("/item/getItemBySearch/" + search);
            return getItems;

        } catch (error) {
            throw error
        }
    }

    const pagination = async (pageNumber) => {
        try {
            const getItems = await http.get("/item/getSelectetItems/" + pageNumber);
            return getItems;

        } catch (error) {
            throw error
        }
    }

    const UpdateItem = async (itemDataForm) => {
        try {
            const updateItemData = await http.put("/item/updateItem", itemDataForm);
            return updateItemData;

        } catch (error) {
            throw error
        }
    }

    return {
        addNewItem,
        deleteItem,
        getItemsByFarmerId,
        UpdateItem,
        pagination,
        getItemsBySearch
    }
}

export default ItemService