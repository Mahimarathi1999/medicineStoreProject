import React from "react";
import { StyleSheet, Font } from '@react-pdf/renderer';

function Footer(){
        return(
<div className="main-footer" style={{backgroundColor:'#E8EDE1',marginTop:70, paddingTop:10 , fontSize:18, fontFamily:'sans-serif'  }}>
    <div className="container">
        <div className="row">
<div className="col-md-3 col-sm-6" style={{paddingLeft:50 , marginLeft:10}}>
    <h3 >About Us</h3>
    <p>We deliver your requirements at your doorstep</p>
    <ul className="list-unstyled">
        <li></li>
    </ul>
</div>

<div className="col-md-3 col-sm-6" style={{paddingLeft:50 , marginLeft:80}}>
    <h3>Quick Links</h3>
    <ul className="list-unstyled">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
    </ul>
</div>

<div className="col-md-3 col-sm-6" style={{paddingLeft:50 , marginLeft:150}}>
    <h3>Contact Us</h3>
    <ul className="list-unstyled">
        <li><a className="Number" href="#"> +91xxxxxxxxxx</a></li>
        <li><a className="address" href="#">Gurgaon</a></li>
        <li><a className="email" href="#">abc123@gmail.com </a></li>
    </ul>
</div>
        </div>
        <div className="footer-bottom">
            <p className="text-xs-center" style={{paddingTop:50 , marginLeft:350}}>
                &copy; {new Date().getFullYear()} Medcad App- All Rights
                Reserved
            </p>
        </div>
    </div>
</div>
        );
}
export default Footer;
