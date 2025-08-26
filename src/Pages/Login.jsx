import Buttn from "../Components/Buttn"
import TextInput from "../Components/TextInput"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {


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
            <h1 className="text-[30px] font-bold">Login</h1>
          </div>
          <div className="flex flex-col gap-4 mb-4 relative">
            <TextInput placeholder="Email" type="text"/>
            <TextInput 
            maxLength={12}
            placeholder="Password" 
            type={show ? "password" : "text"}/>
            <p onClick={handleShow} className="absolute right-2 bottom-2 text-[#8F6EB0] cursor-pointer text-xl">
              {show ? <FaEye/> : <FaEyeSlash/>}</p>
          </div >
          <Link to="/forgotpass" className="absolute right-10 bottom-40 md:text-[16px] text-[13px] text-[#F600FF] cursor-pointer hover:text-[#F955FF] transitin duration-300">Forgot Password</Link> 
          <div className=" mb-10">
            <Buttn title="Login"/>
            <p className="md:text-[16px] text-[13px] text-center mt-1 ">New account?
            <Link to="/" className="transitin duration-300 text-[#F600FF] cursor-pointer hover:text-[#F955FF]
            font-semibold"> Signup</Link></p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Login