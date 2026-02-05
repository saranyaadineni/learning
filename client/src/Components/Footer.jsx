import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const curDate = new Date();
  const year = curDate.getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    
    // Simulate API call
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Column 1: Brand & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                <FaGraduationCap size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">LearnHub</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-xs pr-4">
              Empowering learners worldwide with high-quality online education and professional development courses.
            </p>
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <FaEnvelope size={14} />
                </div>
                <span className="text-xs">hello@learnhub.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <FaPhone size={14} />
                </div>
                <span className="text-xs">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span className="text-xs">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><Link to="/courses" className="hover:text-primary-500 transition-colors">Courses</Link></li>
            </ul>
          </div>

          {/* Column 4: Support (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Get the latest updates and offers directly in your inbox.
            </p>
            <div className="space-y-2">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-gray-500 text-sm"
                />
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 rounded-lg transition-all shadow-lg hover:shadow-primary-500/25 text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {year} LearnHub. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
              <FaFacebook size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
              <FaTwitter size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
              <FaLinkedin size={14} />
            </a>
             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
