"use client";
import React from 'react'
import { createContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [shopName, setShopName] = useState("");
  const [farmer, setFarmer] = useState("");
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
        setFarmer
        // admin,
        // setAdmin,
        // availability,
        // setAvailability,
        // adminDetails,
        // setAdminDetails,
        // setToken,
        // token,
        // selectedItems,
        // setSelectedItems,
        // adminCompany,
        // setAdminCompany
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState