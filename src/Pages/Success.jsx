import Buttn from "../Components/Buttn"
import { Link } from "react-router-dom"

const Success = () => {
  return (
    <div className="bg-[url('/bg.jpg')] h-screen w-full bg-no-repeat bg-center bg-fixed
    bg-cover flex justify-center items-center" >
        <div className="transition duration-500 backdrop-blur-xs border-[1px] border-[silver]
        md:shadow-[3px_3px_30px_2px_rgba(239,83,80,1)] shadow-[1px_1px_20px_-2px_rgba(239,83,80,1)]
        w-85 md:w-100  h-120 rounded-3xl flex justify-center items-center">
          <div className="w-65 md:w-80 h-full flex flex-col justify-between md:justify-around"> 
            <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] md:w-[100px]" src="/logo.png"/>
          </div>
          <div className="flex flex-col justify-center items-center"> 
            <img width="200px" src="/src/assets/switch-profile-success-smooth-1s-nobg.gif"/>
            <h1 className="text-[24px] font-bold text-center">Successfully changed your password</h1>
          </div>
          <Link to="/login" className=" mb-10">
            <Buttn title="Back to login"/>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default Success