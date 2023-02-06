import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./server/AuthContext";
import ProtectedRoute from "./server/ProtectedRoute";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import Dashboard from "./components/pages/Dashboard";
import LandingPage from "./components/pages/LandingPage";
import SetupAccount from "./components/pages/SetupAccount";
import Error from "./components/pages/Error";

function App() {
  return (
    <AuthContextProvider>

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="setup-account" element={<ProtectedRoute><SetupAccount /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />

    </AuthContextProvider>
  );
}

export default App;
