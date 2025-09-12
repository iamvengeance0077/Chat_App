import { useState } from "react";
import NavBar from "./NavBar";
import MessageBar from "./MessageBar";

const ChatInterf = () => {
  

  return (
    <>
      <NavBar/>
      <div className="h-[82%] w-full flex flex-col items-center">
        <p className="font-semibold">Today, 9:30 pm</p>
      </div>
      <MessageBar />
    </>
  );
};

export default ChatInterf;
