import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  const {showLogin} = useContext(AppContext);

  return (
    <div className="px-4  sm:px-10 md:px-14 lg:px-28  min-h-screen bg-gradient-to-b from-zinc-50 to-teal-50">
      <ToastContainer position="bottom-right"/>
      <Navbar/>

      { showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App