"use client";
import React from 'react'
import { createContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";

export const GlobalContext = createContext(null);

useEffect(()=>{
  const storedUserData = localStorage.getItem('user');
  setUserData(JSON.parse(storedUserData))
},[])

const GlobalState = ({ children }) => {
  const [shopName, setShopName] = useState("");
  const [farmer, setFarmer] = useState("");
  const [userData, setUserData] = useState("");
  // const [availability, setAvailability] = useState(false);
  // const [adminDetails, setAdminDetails] = useState();
  // const [token, setToken] = useState();
  // const [selectedItems, setSelectedItems] = useState();
  // const [adminCompany, setAdminCompany] = useState()

  // useEffect(() => {
  //   if (Cookies.get("token") !== undefined) {
  //     console.log(Cookies.get("token"));
  //     const adminData = JSON.parse(localStorage.getItem("admin")) || {};
  //     setToken(Cookies.get("token"));
  //   } else {
  //   }
  // }, [Cookies])

  return (
    <GlobalContext.Provider
      value={{
        shopName,
        setShopName,
        farmer,
        setFarmer,
        userData,
        setUserData
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState