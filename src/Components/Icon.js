import React from "react";
import {  FaRegCircle, FaTimes } from 'react-icons/fa'
import { BsLockFill } from "react-icons/bs";
export default function Icon ({name}){
        switch(name){
            case "circle": 
            return <FaRegCircle className='icon'/>
            case "cross": 
            return <FaTimes className="icon"/>
            default :
            return <BsLockFill className="icon"/>
        }
    
}