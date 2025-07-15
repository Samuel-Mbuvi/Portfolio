import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contactDetails, socialMediaUrl } from "../Details";

function Footer() {
  const { email, phone } = contactDetails;
  const { linkdein, github, twitter } = socialMediaUrl;
  
  return (
    <footer className="w-full bg-[#f5f5dc] text-dark-content dark:text-light-content py-6 px-4">
      <div className="max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li><strong>Email:</strong><a href={`mailto:${email}`} className="hover:underline">{email}</a></li>
            <li><strong>Phone:</strong><a href={`tel:${phone}`} className="hover:underline">{phone}</a></li>
            <li><strong>Location:</strong> Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/technologies" className="hover:underline">Technologies</Link></li>
            <li><Link to="/lab-challenges" className="hover:underline">Lab Challenges</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-2">Follow</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href={linkdein} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-2 hover:underline"> 
                <FaLinkedin className="text-lg" />  
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-2 hover:underline"> 
                <FaGithub className="text-lg" />  
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-2 hover:underline"> 
                <FaTwitter className="text-lg" />  
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs">
        Crafted by{" "}
        <a
          className="font-medium underline"
          href="https://www.linkedin.com/in/samuel-obaigwa"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mbuvi
        </a>{" "}
        © {new Date().getFullYear()} — ✅, just code.
      </div>
    </footer>
  );
}

export default Footer;
