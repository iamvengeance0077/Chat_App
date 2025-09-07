import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar"


const Chat = () => {



  return (
    <div className="bg-[url('/bg.jpg')] h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat grid grid-rows-[1fr] grid-cols-[120px_1fr] gap-1">
      <div className="bg-gradient-to-t from-[#2433D5] to-[#ED3437] flex flex-col justify-between">
      <SideBar/>
      </div>
      <div className="">
      <Outlet/>
      </div>
    </div>
  )
}

export default Chat