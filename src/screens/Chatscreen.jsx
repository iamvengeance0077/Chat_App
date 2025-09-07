import Contacts from "../Components/Contacts"

const Chatscreen = () => {
  return (
    <div className="grid grid-cols-[350px_1fr] gap-1 grid-rows-[1fr] h-screen w-full "> 
      
      <div className="bg-gradient-to-bl from-[blue] to-[red] flex flex-col justify-between overflow-auto [&::-webkit-scrollbar]:hidden">
        <Contacts/>
      </div>
      <div className="">
        screen
      </div>
      </div>
  )
}

export default Chatscreen