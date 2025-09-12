import CONTACTS from "./CONTACT_DATA.json";
import DATA from "./MOCK_DATA.json";
import { useState } from "react";

const Contacts = () => {
  const [actTab, setActTab] = useState("chats");

  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r from-[blue] to-[red] pb-3 from-[blue] to-[red]">
        <div className="flex justify-center items-center mt-5">
          <input
            type="text"
            placeholder="Search......."
            className="bg-[#3B1165] text-white outline-none px-3 pb-1 rounded-xl h-9 w-[90%]"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center font-bold">Message</p>
          <div className="rounded-xl w-[69%] h-7 flex items-center  bg-gradient-to-b from-[#11C7E7] to-[#B70EAF] flex justify-center gap-5">
            <div className="w-[97%] flex justify-between items-center mb-0.4 h-[97%]">
              <button
                onClick={() => {
                  setActTab("chats");
                }}
                className={`cursor-pointer w-[50%] transition-all duration-200   ${
                  actTab === "chats" && "bg-[#3B1165] rounded-xl text-center "
                }`}
              >
                All chats
              </button>
              <button
                onClick={() => {
                  setActTab("contacts");
                }}
                className={`cursor-pointer w-[50%] transition-all duration-200 ${
                  actTab === "contacts" &&
                  "bg-[#3B1165] rounded-xl text-center "
                }`}
              >
                Contacts
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 py-5">
        {actTab == "chats" &&
          DATA.map((user) => (
            <div className="bg-[#3B1165] w-[94%] h-20 transition-hover duration-300  hover:bg-blue-900 pl-2 rounded-xl flex items-center gap-5 cursor-pointer">
              <div>
                <img src="/user.png" className="pt-2" />
              </div>
              <div>
                <p>{user.first_name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        {actTab == "contacts" &&
          CONTACTS.map((user) => (
            <div className="bg-[#3B1165] w-[94%] h-20 transition-hover duration-300  hover:bg-blue-900 pl-2 rounded-xl flex items-center gap-5 cursor-pointer">
              <div>
                <img src="/user.png" className="pt-2" />
              </div>
              <div>
                <p>{user.first_name}</p>
                <p>{user.phone}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contacts;
