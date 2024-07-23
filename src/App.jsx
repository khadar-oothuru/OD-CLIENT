import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/About/Aboutus";
import Home from "./components/Home";
import MarketPrice from "./components/MarketPrice";
import Feeds from "./components/Feed/Feeds";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import QuesCards from "./components/News/QuesCards";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/market" element={<MarketPrice />} />
        <Route path="/feed" element={<Feeds />} />

        <Route path="/news" element={<QuesCards />} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

// // src/App.jsx

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/Store';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';

// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import TransactionEntry from './pages/TransactionEntry';
// import BillGeneration from './pages/BillGeneration';
// import TransactionHistory from './pages/TransactionHistory';
// import Reports from './pages/Reports';

// import Dashboard from './pages/Dashboard';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Header />
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route exact path="/" component={Dashboard} />
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//             <PrivateRoute path="/transaction-entry" component={TransactionEntry} />
//             <PrivateRoute path="/bill-generation" component={BillGeneration} />
//             <PrivateRoute path="/transaction-history" component={TransactionHistory} />
//             <PrivateRoute path="/reports" component={Reports} />
//             <PrivateRoute path="/dashboard" component={Dashboard} />
//             {/* <PrivateRoute path="/dairy-owner-dashboard" component={DairyOwnerDashboard} /> */}
//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//     </Provider>
//   );
// };import React from "react";import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
