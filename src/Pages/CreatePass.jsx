import Buttn from "../Components/Buttn"
import TextInput from "../Components/TextInput"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const CreatePass = () => {
    const [show,setShow]=useState(false);

  const handleShow=()=>{
    setShow(!show);
  }
  return (
    <div className="bg-[url('/bg.jpg')] h-screen w-full bg-no-repeat bg-center bg-fixed
    bg-cover flex justify-center items-center" >
        <div className="transition duration-500 backdrop-blur-xs border-[1px] border-[silver]
        md:shadow-[3px_3px_30px_2px_rgba(239,83,80,1)] shadow-[1px_1px_20px_-2px_rgba(239,83,80,1)]
        w-85 md:w-100  h-120 rounded-3xl flex justify-center items-center">
          <div className="w-65 md:w-80 h-full flex flex-col justify-between"> 
            <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] md:w-[100px]" src="/logo.png"/>
            <h1 className="text-[30px] font-bold">Create password</h1>
            <p className="text-[13px] text-center md:text-[16px] text-[#8F6EB0]">Please enter a new password. Your new password must be different from previous password.</p>
          </div>
          <div className="flex flex-col gap-4 mb-10 relative">
            <TextInput 
            maxLength={12}
            placeholder="New password" 
            type={show ? "password" : "text"}/>
            <p onClick={handleShow} className="absolute right-2 top-2 text-[#8F6EB0] cursor-pointer text-xl">
              {show ? <FaEye/> : <FaEyeSlash/>}</p>
            <TextInput type="password" placeholder="Confirm password"/>  
          </div >
          <div className=" mb-10">
            <Link to="/success">
            <Buttn title="Submit"/>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}

export default CreatePass