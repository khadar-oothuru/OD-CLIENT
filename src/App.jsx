// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/About/Aboutus";
import Home from "./components/Home";
import MarketPrice from "./components/MarketPrice";
import Feeds from "./components/Feed/Feeds";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import QuesCards from "./components/News/QuesCards";
import UserDashboard from "./components/UserDashboard";
import DairyOwnerDashboard from "./components/DairyOwnerDashboard";
import { UserProvider, useUserContext } from "./UserContext";

const App = () => {
  const { userRole } = useUserContext();

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/market" element={<MarketPrice />} />
        <Route path="/feed" element={<Feeds />} />
        <Route path="/news" element={<QuesCards />} />

{/*       
        {userRole === 'user' && (
          <Route path="/dashboard" element={<UserDashboard />} />
       
        )}

        {userRole === 'dairyOwner' && (
          <Route path="/dashboard" element={<DairyOwnerDashboard />} />
       
        )} */}
      </Routes>

      <Footer />
    </Router>
  );
};

const AppWrapper = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default AppWrapper;
