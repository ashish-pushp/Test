import React from 'react';
import '../app.css';
import { FbIcon, InstaIcon, TwitterIcon, AppleStoreIcon, PlayStoreIcon, WindowStoreIcon } from "../Util/icon"
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
            </div> 
            <div className = "copyright-text">
              <p>CopyRight</p>
            </div> 
            <div className = "social-login">
              <div className = "social-login-cont">
                <div>
                  <FbIcon color = {'#fff'} />
                </div>
                <div>
                  <InstaIcon color = {'#fff'} />
                </div>
                <div>
                  <TwitterIcon color = {'#fff'} />
                </div>
              </div>
              <div className = "social-login-cont">
                <div>
                  <AppleStoreIcon color = {'#fff'} />
                </div>
                <div>
                  <PlayStoreIcon color = {'#fff'} />
                </div>
                <div>
                  <WindowStoreIcon color = {'#fff'} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}