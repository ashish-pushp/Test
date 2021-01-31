import React from 'react';
import '../app.css';
export default function Footer({}) {
    return(
        <div className = "footer-container" >
          <div className = "footer-inner-container">
            <div className = "footer-pages-info">
              <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">Term And Condition</a>
                |
                <a href="#">Privacy Policy</a>
                |
                <a href="#">Collection Statement</a>
                |
                <a href="#">Help</a>
                |
                <a href="#">Manage Account</a>
              </p>
              <div className = "footer-copyright">
                <p class="footer-copyright-title">Copyright &copy; 2017 All Rights Reserved by 
                </p>
              </div>
            </div>
            <div className = "footer-social-container">
              <div className = "social-login">

              </div>
              <div className = "social-download">

              </div>
            </div>
          </div>
        </div>
    )
}