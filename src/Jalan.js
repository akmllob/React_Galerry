import React from "react";
import {Routes, Route} from 'react-router-dom'

import MainPage from "./page/Mainpage";
import AboutMe from "./page/Aboutme";
import Kreatif from "./page/Kreatif";
import Contact from "./page/Contact";
import Galerry from  './page/Galerry';
import Cart from "./page/Cart";

class Lakukan extends React.Component{
    render(){
        return(
            <Routes>
                 <Route exact path="/" Component={MainPage}></Route>
                <Route path="/Aboutme" Component={AboutMe}></Route>
                <Route path="/Kreatif" Component={Kreatif}></Route>
                <Route path="/Contact" Component={Contact}></Route>
                <Route path="/Galerry" Component={Galerry}></Route>
                <Route path="/Cart" Component={Cart}></Route>
            </Routes>
        );
    }
}

export default Lakukan;