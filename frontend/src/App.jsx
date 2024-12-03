import "./App.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import { HashRouter as Router,  Route, Routes, Switch }  from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Listing from "./components/listing/Listing";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Addcar from "./components/addcar/Addcar";
import AllCars from "./components/AllCars";
import PageNotFound from "./components/notfound/PageNotFound";
import Login from "./components/status/Login";
import Profile from "./components/status/Profile";
import Register from "./components/authentication/Register";
import SignIn from "./components/authentication/SignIn";
import CarDetails from "./components/listing/CarDetails";


const App = () => {
 

  return (
    //    <div>
    // //       {/* <h1>Car Listing Bay</h1> */}

    // //       {/* { isLoggedIn ? <Counter/> : <Login/>} */}
    // // {/*
    // //       <Login/>
    // //        */}
    // //       {/* <ImageGallery/> */}
    // //       {/* <Counter/> */}
    // //       {/* <TeamList/> */}
    // // {/*
    // //      <div>
    // //       <AddTeamForm/>
    // //      </div>

    // //      <AllCars/>
    // //      <Addcar/> */}
    //     </div>
    <>
    {/* header section*/}
      <NavigationBar />

      {/* react router setup */}
      <Router>
       <Switch>
       <Route path="/" element={<Home/>}/>
        <Route path="#/about" element={<About/>}/>
        <Route path="#/listing" element={<AllCars/>}/>
        <Route path="#/contact" element={<Contact/>}/>
        <Route path="#/blog" element={<Blog/>}/>
        <Route path="#/car" element={<Addcar />}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="#/login" element={<SignIn />}/>
        {/* <Route path="/cardet" element={<Listing/>}/> */}
        <Route path="#/register" element={<Register/>}/>
        <Route path="#/cardetails/:id" element={<CarDetails/>}/>
       </Switch>
      </Router>

      {/* footer section */}
      <Footer/>
    </>
  );
};

export default App;
