import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { PasswordReset } from "./pages/Auth/PasswordReset";
import { ForgotPassword } from "./pages/Auth/ForgotPassword";
import { HomeDashboard } from "./pages/Dashborad/HomeDashboard";
import { MyStore } from "./pages/Dashborad/MyStore";
import { MyProfile } from "./pages/Dashborad/MyProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
        <Route path="/store" element={<MyStore />} />
        <Route path="/profile" element={<MyProfile />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
