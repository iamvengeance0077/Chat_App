import DATA from "./MOCK_DATA.json"

const Contacts = () => {
  return (
    <>
    <div className="sticky top-0">

        <div className="flex justify-center items-center mt-5">
            <input type="text" placeholder="Search......." className="bg-[#3B1165] text-white outline-none px-3 pb-1 rounded-xl h-9 w-[90%]" />
        </div>
        <div className="flex flex-col items-center">
            <p className="text-center font-bold">Message</p>
            <div className="rounded-xl w-[69%] h-7 flex items-center  bg-gradient-to-b from-[#11C7E7] to-[#B70EAF] flex justify-center gap-5">
                <p className="bg-[#3B1165] rounded-xl w-18 text-center">All chats</p>
                <p>Groups</p>
                <p>Contacts</p>
            </div>

        </div>
    </div>

        <div className="flex flex-col items-center gap-2 py-5">
            
                {DATA.map((user)=>(
                    <div className="bg-[#3B1165] w-[94%] h-20 pl-2 rounded-xl flex items-center gap-5 cursor-pointer">
                        <div>
                            <img src="/user.png" className="pt-2"/>
                        </div>
                        <div>
                            <p>{user.first_name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))}
            
        </div>

    </>
  )
}

export default Contacts