import React from 'react';
import Logo from '../img/intro.png';
import Shadow from '../img/shadow.png';
import '../App.scss';

function Banner () {
    
    return (
      <div className="banner">
          <div className="container">
              <div className="row">
                
                {/* <div className="banner-image-mobile">
                    <div className="col-xl-7 col-lg-6 d-lg-block">
                        <div className="banner-area">
                            <img className="banner-image" src={Logo} alt="images"/>
                        </div>
                    </div>
                </div> */}
                <div className="banner-image-desktop col-xl-5 col-lg-6 d-lg-block">
                    <div className="banner-area">
                        <img className="banner-image" src={Logo} alt="images"/>
                        <img className="banner-shadow" src={Shadow} alt="images"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                    <div className="banner-text text-left">
                        <h1 className="title-font">
                            DIGITAL CREATIVE AGENCY
                        </h1>
                        <p>We are a creative agency who makes life easy for thousands of peoples.</p>
                    </div>
                    <label className = 'agency_btn'> <label>KNOW MORE</label> </label>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;