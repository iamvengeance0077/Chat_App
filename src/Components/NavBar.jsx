const NavBar = ({ Name }) => {
  return (
    <div className="bg-gradient-to-r from-[blue] to-[red] w-full flex justify-between px-5 h-17">
      <div className="flex gap-2 items-center">
        <div>
          <img src="/user.png" />
        </div>
        <div>
          <p className="font-bold text-[18px]">Name</p>
          <p className="text-[#21FF5F] font-semibold text-[14px]">Online</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src="/videocall.png" className="w-[40px]" />
        </div>
        <div>
          <img src="/voicecall.png" className="w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
