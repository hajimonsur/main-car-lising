import "./App.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import {   Route, Routes,  }  from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Addcar from "./components/addcar/Addcar";
import AllCars from "./components/AllCars";
import PageNotFound from "./components/notfound/PageNotFound";
import Profile from "./components/status/Profile";
import Register from "./components/authentication/Register";
import SignIn from "./components/authentication/SignIn";
import CarDetails from "./components/listing/CarDetails";


const App = () => {
 

  return (
  
    <>

    {/* header section*/}

      <NavigationBar />

      {/* react Router setup */}

      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/listing" element={<AllCars/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/car" element={<Addcar />}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cardetails/:id" element={<CarDetails/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    

      {/* footer section */}

      <Footer/>
      
    </>
  );
};

export default App;
