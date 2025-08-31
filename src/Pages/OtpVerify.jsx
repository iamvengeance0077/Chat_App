import { useState } from "react";
import Buttn from "../Components/Buttn";
import { Link } from "react-router-dom";

const OtpVerify = () => {
  const [otp1, setotp1] = useState("");
  const [otp2, setotp2] = useState("");
  const [otp3, setotp3] = useState("");
  const [otp4, setotp4] = useState("");

  const [error, setError] = useState("");

  const numberValid = /^\d+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp1 + otp2 + otp3 + otp4);
    if (
      otp1 === "" ||
      otp2 === "" ||
      otp3 === "" ||
      otp4 === "" ||
      !numberValid.test(otp1 || otp2 || otp3 || otp4)
    ) {
      setError("Enter Valid OTP");
    }
    setotp1("");
    setotp2("");
    setotp3("");
    setotp4("");
  };

  return (
    <div
      className="bg-[url('/bg.jpg')] h-screen w-full bg-no-repeat bg-center bg-fixed
    bg-cover flex justify-center items-center"
    >
      <div
        className="transition duration-500 backdrop-blur-xs border-[1px] border-[silver]
        md:shadow-[3px_3px_30px_2px_rgba(239,83,80,1)] shadow-[1px_1px_20px_-2px_rgba(239,83,80,1)]
        w-85 md:w-100  h-120 rounded-3xl flex justify-center items-center"
      >
        <form
          onSubmit={handleSubmit}
          className="w-65 md:w-80 h-full flex flex-col justify-around"
        >
          <div className="flex flex-col justify-center items-center">
            <img className="w-[80px] md:w-[100px]" src="/logo.png" />
            <h1 className="text-[30px] font-bold">Enter OTP</h1>
          </div>
          <div className="flex flex-col gap-4 mb-20">
            <p className="text-[13px] text-center md:text-[16px] text-[#8F6EB0]">
              We have sent the verification code to your email address
            </p>
            <div className="flex justify-between relative">
              <input
                type="text"
                maxLength="1"
                className="border-b-[1px] border-[silver] h-12 w-12 text-[#8F6EB0] text-center
                rounded-full text-[24px] pb-1 focus:outline-none caret-transparent focus:border-[1px] focus:border-[#F600FF]"
                value={otp1}
                onChange={(e) => {
                  setotp1(e.target.value);
                  console.log(e.target.value);
                  if (e.target.value.length === 1 && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling
                  ) {
                    e.target.previousSibling.focus();
                  }
                }}
              />
              <input
                type="text"
                maxLength="1"
                className="border-b-[1px] border-[silver] h-12 w-12 text-[#8F6EB0] text-center 
                rounded-full text-[24px] pb-1 focus:outline-none caret-transparent focus:border-[1px] focus:border-[#F600FF]"
                value={otp2}
                onChange={(e) => {
                  setotp2(e.target.value);
                  console.log(e.target.value);
                  if (e.target.value.length === 1 && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling
                  ) {
                    e.target.previousSibling.focus();
                  }
                }}
              />
              <input
                type="text"
                maxLength="1"
                className="border-b-[1px] border-[silver] h-12 w-12 text-[#8F6EB0] text-center 
                rounded-full text-[24px] pb-1 focus:outline-none caret-transparent focus:border-[1px] focus:border-[#F600FF]"
                value={otp3}
                onChange={(e) => {
                  setotp3(e.target.value);
                  console.log(e.target.value);
                  if (e.target.value.length === 1 && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling
                  ) {
                    e.target.previousSibling.focus();
                  }
                }}
              />
              <input
                type="text"
                maxLength="1"
                className="border-b-[1px] border-[silver] h-12 w-12 text-[#8F6EB0] text-center 
                rounded-full text-[24px] pb-1 focus:outline-none caret-transparent focus:border-[1px] focus:border-[#F600FF]"
                value={otp4}
                onChange={(e) => {
                  setotp4(e.target.value);
                  console.log(e.target.value);
                  if (e.target.value.length === 1 && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling
                  ) {
                    e.target.previousSibling.focus();
                  }
                }}
              />
            </div>
          </div>
          <p
            className="absolute right-10 bottom-42 md:bottom-36 md:text-[16px] text-[13px] text-[#F600FF] 
          cursor-pointer hover:text-[#F955FF] transitin duration-300"
          >
            Resend OTP
          </p>
          <div className=" mb-10">
            <p className="text-center text-[13px] text-red-500 absolute bottom-25 right-31 md:bottom-24 md:right-38">
              {error}
            </p>
            <Link to="/createpass">
              <Buttn title="Submit" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
