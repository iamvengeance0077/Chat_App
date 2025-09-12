

const MessageBar = () => {
  return (
     <div className="w-full h-15 flex items-center justify-around">
        <div className="bg-gradient-to-r from-[blue] to-[red] w-[94%] h-[50px] rounded-full">
            <div className="flex items-center justify-around pr-3">
                <div><img src="/emoji.png" className="w-[50px] mt-1"/></div>
                <input type="text" className="w-[83%] h-10 outline-none text-[20px]" placeholder="Message...."/>
                <div><img src="attacth.png" className="w-[35px]"/></div>
                <div><img src="camera.png" className="w-[30px]"/></div>
            </div>
        </div>
        <button className="bg-gradient-to-t from-[red] to-[blue] w-[50px] h-[50px] rounded-full flex items-center justify-center" >
            <img src="/microphone.png"/>
        </button>
      </div>
  )
}

export default MessageBar