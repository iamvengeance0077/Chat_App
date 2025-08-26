const Buttn = ({title}) => {
  return (
    <div>
      <button
        className="text-[18px] font-bold bg-gradient-to-r from-[#000539] to-[#000D9F] w-full h-[40px]
             rounded-3xl cursor-pointer hover:from-[#000D9F] hover:to-[#000539] transition duration-1000"
      >
        {title}
      </button>
    </div>
  );
};

export default Buttn;
