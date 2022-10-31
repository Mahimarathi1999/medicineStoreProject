import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({isauth, setIsAuth}) => {
    const logo= "logo.png"

    const handleRoute=()=>{
        localStorage.setItem("MedTtoken", false);
         setIsAuth(false)
      }
    return ( 
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <li class="navbar-brand" ><Link to="/"><img src={logo} alt="logo"  width="100px"  /> </Link></li>
  {/* <li class="navbar-nav" ><Link to="/"><span className="nav-link" >Medlife</span></Link></li> */}
 

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item  ml-5">
      <Link to="/">
         <span className="nav-link" >Home</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>      </li>
        <li class="nav-item  ml-5">
      <Link to="/prescription">
         <span className="nav-link" >Upload Prescription</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>
      </li>
      <li class="nav-item  ml-5">
      <Link to="/add">
         <span className="nav-link" >Add Medicine</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>
      </li>
      <li class="nav-item  ml-5">
      <Link to="/about">
         <span className="nav-link" > About Us</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>
      </li>
      { !isauth && <li class="nav-item  ml-5">
      <Link to="/signup">
         <span className="nav-link" > SignUp</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>
      </li>}
      { !isauth && <li class="nav-item ml-5">
      <Link to="/login">
         <span className="nav-link" > Login</span>
        {/* <a class="nav-link " href="#">Login</a> */}
        </Link>
      </li>}
      { isauth && <li class="nav-item ml-5">
      
      <button className="btn btnbg1  btn-lg " onClick={handleRoute}   >Logout</button>
      </li>}
    </ul>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;