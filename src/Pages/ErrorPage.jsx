
const ErrorPage = () => {
  return (
    <div
      className="bg-[url('/bg.jpg')] h-screen w-full bg-no-repeat bg-center bg-fixed
    bg-cover flex justify-center items-center overflow-hidden"
    >
      <div className="flex w-full h-screen">
        <div>
          <div className="h-22"> </div>
          <img src="/One side.png" className="w-250" />
        </div>
        <div className="w-200 flex flex-col justify-evenly gap-20">
          <div className="text-center">
            <h1 className="text-[110px] font-bold">404</h1>
            <h2 className="text-[34px] font-semibold">Page not found</h2>
          </div>
          <div className="flex justify-center">
            <button
              className="text-[18px] font-bold bg-gradient-to-r from-[#000539] to-[#000D9F] h-[50px] w-70
        rounded-3xl cursor-pointer hover:from-[#000D9F] hover:to-[#000539] transition duration-1000"
            >
              Go to home ➡️
            </button>
          </div>
        </div>
        <div>
          <img src="/Other side.png" className="w-150" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
