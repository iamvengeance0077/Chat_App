import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import ForgotPass from "./Pages/ForgotPass"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpass" element={<ForgotPass/>}/>
    </Routes>
  )
}

export default App
