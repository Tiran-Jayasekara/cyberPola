'use client'
import React, { useContext, useEffect, useState } from 'react'
import AdminService from '@/service/adminService'
import { useParams } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { addItemControls } from '@/app/components/utils';
import ItemService from '@/service/itemService';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '@/app/context';
import CartService from '@/service/cartService';

const Shop = () => {
  const { getFarmerWithItems } = AdminService();
  const { addNewItem, deleteItem, getItemsByFarmerId, UpdateItem } = ItemService();
  const params = useParams();
  const [farmerId, setFarmerId] = useState(params["shop"])
  const [farmerData, setFarmerData] = useState();
  const [items, setItems] = useState();
  const [addItemModal, setAddItemModal] = useState(false)
  const [validateAddItemForm, setValidateAddItemForm] = useState(false);
  const [showItemData, setShowItemData] = useState(false);
  const [selectedItem, setselectedItem] = useState();
  const [deleteItemModal, setDeleteItemModal] = useState(false);
  const { shopName } = useContext(GlobalContext);
  const { addItemToCart } = CartService();

  const temporyData = {
    itemName: "TiranJ",
    img: {
      img1: "TiranJ",
      img2: "TiranJ",
      img3: "TiranJ",
    },
    price: "TiranJ",
    shopName: "TiranJ",
    availability: "TiranJ",
    itemType: "TiranJ",
    description: "TiranJ"
  }
  const [addItem, setAddItem] = useState(temporyData);
  const { farmer, userData } = useContext(GlobalContext);

  useEffect(() => {
    getFarmerDetails();
  }, [])

  const getFarmerDetails = async () => {
    const FarmerAndItems = await getFarmerWithItems(farmerId)
    if (FarmerAndItems) {
      setFarmerData(FarmerAndItems.data.farmer)
      setItems(FarmerAndItems.data.items)
    } else {
      console.log("Data Error");
    }
  }

  // GetItemsByFarmerId
  const GetItemsByFarmerId = async () => {
    const Items = await getItemsByFarmerId(farmerId);
    if (Items) {
      console.log(Items.data.ItemsByFarmer);
      setItems(Items.data.ItemsByFarmer)
    } else {
      console.log("Items Get Fail");
    }
  }

  const [ShowItemDataImg, setShowItemDataImg] = useState();
  const SelectOneItem = (data) => {
    setselectedItem(data);
    setShowItemDataImg(data.img.img1)
    setShowItemData(true);
  }

  // Add Items
  const AddItem = async () => {
    console.log(addItem);
    const isEmptyFields = Object.values(addItem).some(value => value === "TiranJ" || value === "");
    if (isEmptyFields) {
    } else {
      console.log(addItem);
      const itemData = await addNewItem(addItem);
      if (itemData) {
        setAddItemModal(false);
        GetItemsByFarmerId();
        toast.success(itemData.data.message, {
          icon: '✅',
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Item Add UnSuccess", {
          position: toast.POSITION.TOP_RIGHT,
          icon: '❗',
        });
      }
    }
  }

  //Item Update
  const updateItem = async () => {
    const isEmptyFields = Object.values(selectedItem).some(value => value === "");
    if (isEmptyFields) {
      toast.error("Pleace Fill All Fields", {
        icon: '❗',
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const UpdatedData = await UpdateItem(selectedItem);
      console.log(UpdatedData);
      if (UpdatedData && UpdatedData.data && UpdatedData.data.message) {
        toast.success(UpdatedData.data.message, {
          icon: '✅',
          position: toast.POSITION.TOP_RIGHT,
        });
        setShowItemData(false);
        GetItemsByFarmerId();
        setselectedItem("");

      } else {
        toast.error(UpdatedData.response.data.message, {
          icon: '❗',
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }

  // Delete Item
  const DeleteItem = async () => {
    const DeleteItem = await deleteItem(selectedItem._id);
    if (DeleteItem) {
      toast.success(DeleteItem.data.message, {
        icon: '✅',
        position: toast.POSITION.TOP_RIGHT,
      });
      GetItemsByFarmerId();
      setDeleteItemModal(false);
      setShowItemData(false);
    } else {
      toast.error("Delete Item Unsuccess", {
        icon: '❗',
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  // Add Item To Cart
  const addToCart = async () => {
    const cartForm = {
      itemId: selectedItem._id,
      userId: userData._id,
      quantity: 1
    }
    const cart = await addItemToCart(cartForm);
    if (cart.data.message === "Item Added to Cart Successfull") {
      toast.success(cart.data.message, {
        icon: '✅',
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(cart.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        icon: '❗',
    });
    }
  }


  const [showLargeMap, setShowLargeMap] = useState(false);

  const handleGetLocationClick = () => {
    setShowLargeMap(true);
  };



  return (
    <>
      <div className='w-full'>
        <img className='w-full h-auto' src='/assests/01.jpg' alt='No img' />
      </div>

      <h5 className=" text-center justify-center items-center text-xl md:text-4xl playfair-font mt-0 md:mt-0">Store</h5>

      <div className='w-full flex flex-wrap mt-4'>
        {items ? items.map((data, index) => (
          <div key={index} onClick={() => { SelectOneItem(data) }} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className='relative'>
              {data.availability ?
                <>

                </>
                :
                <div className='absolute top-0 right-0'>
                  <img className='w-14' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />
                  {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                </div>
              }
              <img className="p-2 rounded-t-lg md:h-52 h-32 w-full" src={data.img.img1} alt="product image" />
            </div>
            <div className="px-5 pb-5 text-center justify-center items-center text-sm md:text-xl playfair-font">
              <div>
                <h5 className=" font-semibold uppercase tracking-tight text-gray-900 dark:text-white">{data.itemName}</h5>
                <h5 className="mt-6 font-semibold tracking-tight text-red-900 dark:text-white">{data.price}</h5>
              </div>
            </div>
          </div>

        )) : <>
          <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>Loading....</h2></div>
        </>}
      </div>

      {farmer === farmerId ?
        <>
          <div className='flex justify-end w-full md:mt-40'>
            <img onClick={() => { setAddItemModal(true) }} className='w-10 md:w-20 cursor-pointer items-end mx-4 mt-10 hover:scale-110 transition-transform duration-300' src='/assests/addIcon.png' alt='addIcon' />
          </div>
        </>
        : ""}

      {/* Farmer Profile */}
      {farmerData ? <div className='flex flex-row mt-20 md:mt-40 mx-4'>
        <div className='w-1/2 flex flex-col md:ml-20'>
          <h5 className=" playfair-font  tracking-tight md:text-2xl text-gray-900 text-center dark:text-white">Seller(Farmer) Details</h5>
          <img className="p-2 rounded-t-lg" src={farmerData.farmerImg} alt="product image" />
        </div>
        <div className='w-1/2 text-xs md:text-xl text-center mt-4 p-2 justify-center items-center my-auto md:mt-40'>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white  ">Name : {farmerData.firstName} {farmerData.lastName}</h5>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white mt-2">Address : {farmerData.address}</h5>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white mt-2">Number : {farmerData.mobile}</h5>
          <button
            className='bg-green-600 p-2 mt-4 rounded-2xl text-white'
            onClick={handleGetLocationClick}
          >
            Get Location
          </button>

        </div>
      </div> : ""}


      <iframe
        className='mt-10 w-full h-60 md:h-80'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.613632544164!2d80.88285024818944!3d7.308495200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae49fe812dc4207%3A0xefb1cf53b3bb8049!2sGangoda%20Samithi%20Salawa!5e0!3m2!1sen!2slk!4v1709471355506!5m2!1sen!2slk"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />


      {/* Add Item Model */}
      {addItemModal ? (
        <>
          <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4 md:mx-40 rounded-2xl">
            <div className="w-auto mx-auto ">
              {/*content*/}
              <div className="w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {farmer === farmerId ? <section className="w-full h-auto">
                  <div className="px-0 md:px-4 mx-auto ">
                    <div className="pt-8 px-2 bg-white">
                      <div className="md:mt-0 mt-0">
                        <div>

                          {addItemControls ? addItemControls.map((controlItem, index) => (
                            <div className="px-4 mb-6" key={controlItem.id}>
                              <label className="block mb-2 text-sm font-medium">{controlItem.label}</label>

                              {(() => {
                                switch (controlItem.id) {
                                  case 'description':
                                    return (
                                      <textarea
                                        className={validateAddItemForm ? `block w-full border ${!addItem[controlItem.id] || addItem[controlItem.id] === "TiranJ" ? 'border-red-500' : 'border-stone-400'} md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded` : "block w-full border 'border-stone-400' md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded"}
                                        name=""
                                        placeholder={controlItem.placeholder}
                                        onChange={(event) => {
                                          setAddItem({
                                            ...addItem,
                                            [controlItem.id]: event.target.value,
                                            farmerId: farmerId,
                                            shopName: farmerData.shopName,
                                          });
                                        }}
                                      />
                                    );
                                  case 'dropDown':
                                    return (
                                      <>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Avalability</label>
                                        <select
                                          id="countries"
                                          className={validateAddItemForm ? `block w-full border ${!addItem.availability || addItem.availability === "TiranJ" ? 'border-red-500' : 'border-stone-400'} md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded` : "block w-full border 'border-stone-400' md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded"}
                                          onChange={(event) => {
                                            console.log("Selected value:", event.target.value);
                                            setAddItem({
                                              ...addItem,
                                              availability: event.target.value
                                            });
                                          }}
                                        >
                                          <option value="true">Select Availability</option>
                                          <option value="true">Available</option>
                                          <option value="false">Sold Out</option>
                                        </select>
                                      </>
                                    );
                                  case 'img1':
                                  case 'img2':
                                  case 'img3':
                                    return (
                                      <textarea
                                        className={validateAddItemForm ? `block w-full border ${!addItem.img[controlItem.id] || addItem.img[controlItem.id] === "TiranJ" ? 'border-red-500' : 'border-stone-400'} md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded` : "block w-full border 'border-stone-400' md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded"}
                                        name=""
                                        placeholder={controlItem.placeholder}
                                        onChange={(event) => {
                                          setAddItem({
                                            ...addItem,
                                            img: {
                                              ...addItem.img,
                                              [controlItem.id]: event.target.value,
                                              farmerId: farmerId,
                                              shopName: farmerData.shopName,
                                            }
                                          });
                                        }}
                                      />
                                    );
                                  default:
                                    return (
                                      <input
                                        className={validateAddItemForm ? `block w-full border ${!addItem[controlItem.id] || addItem[controlItem.id] === "TiranJ" ? 'border-red-500' : 'border-stone-400'} md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded` : "block w-full border 'border-stone-400' md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded"}
                                        type={controlItem.type}
                                        name=""
                                        placeholder={controlItem.placeholder}
                                        onChange={(event) => {
                                          setAddItem({
                                            ...addItem,
                                            [controlItem.id]: event.target.value,
                                            farmerId: farmerId,
                                            shopName: farmerData.shopName,
                                          });
                                        }}
                                      />
                                    )
                                }
                              })()}
                            </div>
                          )) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </section> : null}

                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setAddItem(temporyData)
                      setValidateAddItemForm(false);
                      setAddItemModal(false)
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 mr-4 bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setValidateAddItemForm(true);
                      AddItem()
                    }
                    }
                  >
                    Add
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Show item Data In Model */}
      {showItemData ? (
        <>
          <div className="justify-center items-center overflow-x-hidden md:w-full w-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">

            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none mt-10 md:mt-10">
                {/*header*/}
                {farmer === farmerId ? <section className="w-full h-auto">
                  <div className="px-0 md:px-4 mx-auto ">
                    <div className="pt-8 px-2 bg-white">
                      <div className="md:mt-0 mt-0">
                        <div>
                          {addItemControls.map((controlItem, index) => (
                            <div className="px-4 mb-6" key={controlItem.id}>
                              <label className="block mb-2 text-sm font-medium">{controlItem.label}</label>

                              {(() => {
                                switch (controlItem.id) {
                                  case 'description':
                                    return (
                                      <textarea
                                        className={`block w-full md:w-full h-40 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded ${selectedItem[controlItem.id] === "" ? 'border-red-500' : 'border-stone-400'}`}

                                        name=""
                                        placeholder={selectedItem[controlItem.placeholder]}
                                        value={selectedItem[controlItem.value]}
                                        onChange={(event) => {
                                          setselectedItem({
                                            ...selectedItem,
                                            [controlItem.id]: event.target.value,


                                          })
                                        }}
                                      />
                                    );
                                  case 'dropDown':
                                    return (
                                      <>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Avalability</label>
                                        <select
                                          id="items"
                                          className="bg-gray-50 border  text-gray-900 text-sm rounded-lg border-stone-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                          value={selectedItem.availability}
                                          onChange={(event) => {
                                            setselectedItem({
                                              ...selectedItem,
                                              availability: event.target.value
                                            });
                                          }}
                                        >
                                          <option value="true">Available</option>
                                          <option value="false">Sold Out</option>
                                        </select>
                                      </>
                                    );
                                  case 'img1':
                                  case 'img2':
                                  case 'img3':
                                    return (
                                      <textarea
                                        className={validateAddItemForm ? `block w-full border ${!addItem.img[controlItem.id] || addItem.img[controlItem.id] === "TiranJ" ? 'border-red-500' : 'border-stone-400'} md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded` : "block w-full border 'border-stone-400' md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white rounded"}
                                        name=""
                                        value={selectedItem.img[controlItem.value]}
                                        onChange={(event) => {
                                          setselectedItem({
                                            ...selectedItem,
                                            img: {
                                              ...selectedItem.img,
                                              [controlItem.id]: event.target.value,
                                            }
                                          });
                                        }}
                                      />
                                    );
                                  default:
                                    return (
                                      <input
                                        className={`block w-full md:w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border border-stone-300 rounded ${selectedItem[controlItem.id] === "" ? 'border-red-500' : 'border-stone-400'}`}
                                        type={controlItem.type}
                                        name=""
                                        placeholder={selectedItem[controlItem.placeholder]}
                                        value={selectedItem[controlItem.value]}
                                        onChange={(event) => {
                                          setselectedItem({
                                            ...selectedItem,
                                            [controlItem.id]: event.target.value,

                                          })
                                        }}
                                      />
                                    );
                                }
                              })()}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section> : <>
                  <div className="flex flex-col items-center justify-between p-4 w-full ">
                    <h3 className="w-full md:text-2xl text-xl text-center mt-4 font-semibold justify-center items-center md:ml-0">
                      {selectedItem.itemName}
                    </h3>

                    {/* Desktop Responsiveness */}
                    <div className="md:flex flex-wrap w-full items-center justify-center hidden relative">
                      {selectedItem.availability ?
                        <>

                        </>
                        :

                        <div className='absolute  top-0 right-4'>
                          {/* Sold Out Image Deskto Responce */}
                          <img className='w-20' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />

                        </div>
                      }

                      <div className="grid gap-4">
                        <div>
                          <img className="flex h-96 items-center mx-auto rounded-lg " src={ShowItemDataImg} alt="" />
                        </div>
                        <div className="grid grid-cols-3 justify-center mx-auto gap-2 w-full">
                          <div>
                            <img
                              onClick={() => { setShowItemDataImg(selectedItem.img.img1) }}
                              src={selectedItem.img.img1}
                              className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                          </div>
                          <div>
                            <img
                              onClick={() => { setShowItemDataImg(selectedItem.img.img2) }}
                              src={selectedItem.img.img2}
                              className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                          </div>
                          <div>
                            <img
                              onClick={() => { setShowItemDataImg(selectedItem.img.img3) }}
                              src={selectedItem.img.img3}
                              className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Mobile Responsiveness */}
                  <div className=" md:hidden flex flex-wrap w-full items-center justify-center relative">
                    {selectedItem.availability ?
                      <>

                      </>
                      :
                      <div className='absolute  top-0 right-4 -mt-10'>
                        {/* Sold Out Image Mobile Responce */}
                        <img className='w-20' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />
                        {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                      </div>
                    }
                    <div className="grid gap-4">
                      <div>
                        <img className="flex h-48 items-center mx-auto rounded-lg object-center "
                          src={ShowItemDataImg}
                          alt="" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div>
                          <img
                            onClick={() => { setShowItemDataImg(selectedItem.img.img1) }}
                            src={selectedItem.img.img1}
                            className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                        </div>
                        <div>
                          <img
                            onClick={() => { setShowItemDataImg(selectedItem.img.img2) }}
                            src={selectedItem.img.img2}
                            className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                        </div>
                        <div>
                          <img
                            onClick={() => { setShowItemDataImg(selectedItem.img.img3) }}
                            src={selectedItem.img.img3}
                            className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                        </div>

                      </div>
                    </div>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto mt-10">
                    <div className='text-gray-800 font-bold md:ml-10 flex'>
                      <p className='text-black md:text-xl'>Price :</p>
                      <p className='ml-4 text-red-900'>{selectedItem.price}</p>
                    </div>

                    <div className='text-gray-800 font-bold md:ml-10 mt-2'>
                      <p className='text-black md:text-xl'>Description :</p>
                      <p className='text-gray-800 md:text-xl text-sm ml-4 mr-4 break-words'>{selectedItem.description}</p>
                    </div>
                  </div>
                </>}

                {/*footer*/}
                <div className="p-6 flex items-center justify-between mr-0 border-t-2">

                  {farmer === farmerId ?
                    <>
                      <button
                        className="bg-red-500 mr-4  text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setDeleteItemModal(true)
                        }
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="bg-emerald-500 mr-4 bg-green-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          updateItem()
                        }
                        }
                      >
                        Update
                      </button>

                    </>
                    : ""}

                  {userData ? <button
                    className="ml-4 font-bold  text-sm px-0 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {

                    }
                    }
                  >
                    <div onClick={addToCart} className="flex flex-row ">
                      <img src="/assests/cart.png" className="w-12 items-center justify-center mx-auto" alt="" />
                      <h2 className="text-xs uppercase text-gray-400 items-center justify-center text-center mx-auto my-auto ml-2 p-2">Add Cart</h2>
                    </div>
                  </button> :
                    <button className="" type="button">
                    </button>}


                  <button
                    className="bg-emerald-500 text-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowItemData(false)
                    }
                    }
                  >
                    Close
                  </button>
                </div>

                {/* <div className="flex items-center justify-between p-0 mr-0 border-t-2">

                                        <button
                                            className="ml-4 font-bold  text-sm px-0 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                router.push(`/pages/shops/${showItemData.farmerId}`)
                                            }
                                            }
                                        >
                                            <div className="flex flex-row">
                                                <img src="/assests/store.png" className="w-10 items-center justify-center mx-auto" alt="" />
                                                <h2 className="text-sm uppercase text-gray-400 items-center justify-center text-center mx-auto my-auto ml-2">Visit Shop</h2>
                                            </div>
                                        </button>
                                        <button
                                            className="bg-emerald-500  text-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowItemData(false)
                                            }
                                            }
                                        >
                                            Close
                                        </button>
                                    </div> */}

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Item Delete modal */}
      {deleteItemModal ? <>
        <div id="popup-modal" className="overflow-y-auto mx-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">

                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">

                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Item?</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => { DeleteItem() }}>
                  Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => { setDeleteItemModal(false) }}>No, cancel</button>
              </div>
            </div>
          </div>
        </div>
      </> : null}

    </>
  )
}

export default Shop