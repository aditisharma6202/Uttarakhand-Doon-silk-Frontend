"use client";

import Label from "@/components/Label/Label";
import React, { FC, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import Radio from "@/shared/Radio/Radio";
import Select from "@/shared/Select/Select";
import axios from "axios";
import { baseUrl } from "@/Url";
import { toast ,ToastContainer} from "react-toastify";


interface Props {
  isActive: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
}

const ShippingAddress: FC<Props> = ({
  isActive,
  onCloseActive,
  onOpenActive,
}) => {
  const renderShippingAddress = () => {
   const[name, setName]=useState('')
   const[address, setAddress]=useState('')
   const[city, setCity]=useState('')
   const[country, setCountry]=useState('')
   const[state, setState]=useState('')
   const[pinCode, setPinCode]=useState('')
   const[phone, setPhone]=useState('')
///axios code for posting data

const handleSubmit = async () => {
  event.preventDefault();

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')} `,
      'Content-Type': 'application/json',
    },
  };

  
   axios.post(`${baseUrl}/order`,
        {
          phone:phone,
          shippingAddress:address,
          name:name,
          address:address,
          city:city,
          country:country,
          state:state,
          postalCode:pinCode,
        },
     config).then((response)=>{console.log(response.data) 
      if(response.status===200||response.status===201){
       toast.success("Order is confirmed")
      }else(
        toast.error("There was some error: Try Again")
      )
    })
     .catch((error)=>{console.log(error) 
    toast.error("Server Was Slow")})
   
};




   ///code starts here
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl ">
        <div className="p-6 flex flex-col sm:flex-row items-start">
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div className="sm:ml-8">
            <h3 className=" text-slate-700 dark:text-slate-300 flex ">
              <span className="uppercase">SHIPPING ADDRESS</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </h3>
            <div className="font-semibold mt-1 text-sm">
              <span className="">
                
              </span>
            </div>
          </div>
         
        </div>
        <div
          className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
            isActive ? "block" : "hidden"
          }`}
        >
          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">Name</Label>
              <Input className="mt-1.5" defaultValue={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">Phone</Label>
              <Input className="mt-1.5" defaultValue={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
           
          </div>

          {/* ============ */}
          <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
            <div className="flex-1">
              <Label className="text-sm">Address</Label>
              <Input
                className="mt-1.5"
                placeholder=""
                defaultValue={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                type={"text"}
              />
            </div>
            
          </div>
          
          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">City</Label>
              <Input className="mt-1.5" defaultValue={city} onChange={(e)=>{setCity(e.target.value)}} />
            </div>
            <div>
              <Label className="text-sm">Country</Label>
              <Input className="mt-1.5" defaultValue={country} onChange={(e)=>{setCountry(e.target.value)}} />
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">State/Province</Label>
              <Input className="mt-1.5"defaultValue={state} onChange={(e)=>{setState(e.target.value)}} />
            </div>
            <div>
              <Label className="text-sm">Postal code</Label>
              <Input className="mt-1.5" defaultValue={pinCode} onChange={(e)=>{setPinCode(e.target.value)}} />
            </div>
          </div>

          {/* ============ */}
          <div>
            <Label className="text-sm">Address type</Label>
            <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <Radio
                label={`<span class="text-sm font-medium">Home <span class="font-light">(All Day Delivery)</span></span>`}
                id="Address-type-home"
                name="Address-type"
                defaultChecked
              />
              <Radio
                label={`<span class="text-sm font-medium">Office <span class="font-light">(Delivery <span class="font-medium">9 AM - 5 PM</span>)</span> </span>`}
                id="Address-type-office"
                name="Address-type"
              />
            </div>
          </div>

          {/* ============ */}
          <div className="flex flex-col sm:flex-row pt-6">
            <ButtonPrimary
              className="sm:!px-7 shadow-none"
              onClick={handleSubmit}
            >
            Confirm Order
            </ButtonPrimary>
            {/* <ButtonSecondary
              className="mt-3 sm:mt-0 sm:ml-3"
              onClick={onCloseActive}
            >
              Cancel
            </ButtonSecondary> */}
          </div>
        </div>
      </div>
    );
  };
  return renderShippingAddress();
};

export default ShippingAddress;
