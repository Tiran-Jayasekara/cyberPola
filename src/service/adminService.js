import React from 'react'
import axios from "axios";

const AdminService = () => {

    const http = axios.create({
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            // "x-auth-token": token,
        },
    });

    // Get All Farmers
    const getAllFarmers = async () => {
        try {
            const farmers = await http.get("/farmer/allFarmers");
            return farmers;

        } catch (error) {
            throw error
        }
    }

    // Get FArmer With Items
    const getFarmerWithItems = async (farmerId) => {
        try {
            const farmers = await http.get("farmer/FarmerWithItems/" + farmerId);
            return farmers;

        } catch (error) {
            throw error
        }
    }

    return {
        getAllFarmers,
        getFarmerWithItems
    }
}

export default AdminService