import { Link, NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <div>
          <div className="flex justify-center">
            <img width="80" src="/logo.png"/>
          </div>
          <NavLink to="/chatscreen">
            <button className="cursor-pointer transition-hover duration-300  hover:bg-blue-900 w-full h-15 flex items-center justify-center gap-2">
              <img src="/home.png" className=" w-10"/>
              <p>Chats</p>
            </button>
          </NavLink>
          <NavLink to="/profile">
            <button className="cursor-pointer transition-hover duration-300  hover:bg-blue-900  flex items-center justify-center h-15 w-full gap-2">
              <img src="/user.png" className="w-10"/>
              <p>Profile</p>
            </button>
          </NavLink>
      </div>
      <div>

      <NavLink to="/settings">
        <button className="cursor-pointer transition-hover duration-300  hover:bg-blue-900 flex items-center justify-center gap-2 w-full h-15">
          <img src="/settings.png" className="w-8"/>
          <p>Settings</p>
        </button>
      </NavLink>
      <Link to="/login">
        <button className="cursor-pointer transition-hover duration-300 hover:bg-blue-900 h-15 flex justify-center items-center gap-2 w-full">
          <img src="/switch.png" className="w-9"/>
          <p>Log out</p>
        </button>
      </Link>
      </div>
    </>
  )
}

export default SideBar