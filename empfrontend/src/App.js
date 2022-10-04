//import logo from './logo.svg';
import React from 'react'
import './App.css';
import List from './Components/List';
import Add from './Components/Add';
import Update from './Components/Update';
import { Routes, Route, Link } from 'react-router-dom';
import { FaHome , FaList } from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";


function App(){

 
  return (
   
      <div className='container my-3'>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to={"/"}><FaHome/></Link>
                <Link className="nav-link" to={"/"}><FaList/></Link>
                <Link className="nav-link" to={"/add"}><FcAddDatabase/></Link>

              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path='/' element={< List />}></Route>
          <Route exact path='/add' element={< Add />}></Route>
          <Route exact path='/update:id' element={< Update />}></Route>

        </Routes>

       


      </div>
   

  );

}

export default App;
