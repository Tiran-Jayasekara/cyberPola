'use client'
import axios from "axios";

const AdminService = () => {

    const http = axios.create({
        baseURL: "https://cyberpola-backend.onrender.com",
        // baseURL: "http://192.168.1.185:3001",
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

    const FarmerLogin = async (loginForm) => {
        try {
            const farmerLogin = await http.post("farmer/FarmerLogin", loginForm);
            return farmerLogin;
        } catch (error) {
            throw error
        }
    }

    const uplodePdf = async (file) => {
        try {
            console.log(file); // Log the file object
            // Create a FormData object and append the PDF file

            // const uplodePdf = await http.post("farmerPdfUplode/farmerUploadFile", form_data);
            // return uplodePdf;
        } catch (error) {
            throw error
        }
    }


    return {
        getAllFarmers,
        getFarmerWithItems,
        FarmerLogin,
        uplodePdf
    }
}

export default AdminService