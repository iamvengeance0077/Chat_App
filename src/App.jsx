import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPass from "./Pages/ForgotPass";
import OtpVerify from "./Pages/otpVerify";
import CreatePass from "./Pages/CreatePass";
import Success from "./Pages/Success";

import ErrorPage from "./Pages/ErrorPage";
import Chat from "./Pages/Chat";
import Chatscreen from "./screens/Chatscreen";
import UserProfile from "./screens/UserProfile";
import Setting from "./screens/Setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/otpverify" element={<OtpVerify />} />
      <Route path="/createpass" element={<CreatePass />} />
      <Route path="/success" element={<Success />} />
      <Route path="/*" element={<ErrorPage />} />

      <Route element={<Chat />}>
        <Route path="/chatscreen" element={<Chatscreen />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
