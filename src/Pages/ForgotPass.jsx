import Buttn from "../Components/Buttn";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div
      className="bg-[url('/bg.jpg')] h-screen w-full bg-no-repeat bg-center bg-fixed
    bg-cover flex justify-center items-center"
    >
      <div
        className=" transition duration-500 backdrop-blur-xs border-[1px] border-[silver]
        md:shadow-[3px_3px_30px_2px_rgba(239,83,80,1)] shadow-[1px_1px_20px_-2px_rgba(239,83,80,1)]
        w-85 md:w-100  h-120 rounded-3xl flex justify-center items-center"
      >
        <div className=" w-65 md:w-80 h-full flex flex-col justify-around">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] md:w-[100px]" src="/logo.png" />
            <h1 className="text-[30px] font-bold">Enter your email</h1>
          </div>
          <div className="flex flex-col gap-4 mb-4 relative">
            <TextInput placeholder="Email" type="text" />
          </div>
          <Link to="/otpverify" className=" mb-10">
            <Buttn title="Sent OTP" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
