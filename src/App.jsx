import './App.css'
import Name from "./Name.jsx";
import Object from "./Object.jsx";
import Data from "./data.jsx";
import List from "./list.jsx";
import Table from "./table.jsx";
import { BrowserRouter, Routes, Router,  Route, Link } from "react-router-dom";
import MyComp from "./assets/MyComp.jsx";
import Myepenses from "./Myepenses.jsx";
import Todoapp from "./Todoapp.jsx"
import Quiz from "./Quiz.jsx"
import ReactDOM from "react-dom/client";
import { Button, Navbar } from "flowbite-react";
import Header from './Header.jsx';
import About from './about.jsx';
import Services from "./Services.jsx"
import Home from './Home.jsx';

function App() {
return ( 
  <div>
      <Header/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
)
}

export default App;
