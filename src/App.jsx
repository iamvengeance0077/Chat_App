import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import ForgotPass from "./Pages/ForgotPass"
import OtpVerify from "./Pages/otpVerify"
import CreatePass from "./Pages/CreatePass"
import Success from "./Pages/Success"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpass" element={<ForgotPass/>}/>
      <Route path="/otpverify" element={<OtpVerify/>}/>
      <Route path="/createpass" element={<CreatePass/>}/>
      <Route path="/success" element={<Success/>} />
    </Routes>
  )
}

export default App
