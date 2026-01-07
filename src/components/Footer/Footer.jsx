import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div>
          <div className="logoname">
            <h2>F</h2>
            <h2>FoodFleet</h2>
          </div>
          <p>
            Discover food you love, delivered fast. Join millions of happy
            customers ordering from the best restaurants in your city.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Investors</p>
        </div>
        <div>
          <h3>Services</h3>
          <p>Food Delivery</p>
          <p>Restaurants Partners</p>
          <p>Delivery Partners</p>
          <p>Coperate Orders</p>
          <p>Catering</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Safety</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div>
          <h3>Cities</h3>
          <p>Mumbai</p>
          <p>Delhi</p>
          <p>Bangalore</p>
          <p>Chennai</p>
          <p>Kolkata</p>
          <p>Hyderabad</p>
        </div>
      </div>
      <div className="copyright">
        <div>
          <p>© 2025 FoodFleet Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
        <div className="terms">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
