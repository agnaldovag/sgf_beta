import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
     
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

    <a href="index.html" class="logo me-auto"><img src="" alt=""></img>      </a>
      

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
           
          <li><a class="nav-link scrollto " ><Link to={`/`}>Home</Link> </a></li>
          <li><a class="nav-link scrollto " ><Link to={`/plantaRC`}>Planta RC</Link> </a></li>        
          <li><a class="nav-link scrollto " ><Link to={`/plantaRC`}>Planta JP</Link> </a></li>
          <li><a class="nav-link scrollto" ></a></li>
          <li><a class="nav-link scrollto" ></a></li>
          <li><a class="nav-link scrollto" ></a></li>
         
             
        
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    

    
    </div>
  </header>
    </div>
  )
}

export default Menu