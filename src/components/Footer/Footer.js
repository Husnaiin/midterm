import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>The Basics</h3>
          <ul>
            <li><a href="#">About TMDB</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Forums</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">System Status</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get Involved</h3>
          <ul>
            <li><a href="#">Contribution Bible</a></li>
            <li><a href="#">Add New Movie</a></li>
            <li><a href="#">Add New TV Show</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">API Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <p>&copy; 2024 Movie Database. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;