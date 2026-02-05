import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const curDate = new Date();
  const year = curDate.getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-purple-600 p-2.5 rounded-xl group-hover:bg-purple-700 transition-colors">
                <FaGraduationCap size={28} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">LearnHub</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Empowering learners worldwide with high-quality online education and professional development courses.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <span className="text-sm">hello@learnhub.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 shrink-0">
                  <FaPhone size={18} />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-purple-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-purple-500 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-purple-500 transition-colors">Press</Link></li>
              <li><Link to="/blog" className="hover:text-purple-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/courses" className="hover:text-purple-500 transition-colors">Courses</Link></li>
              <li><Link to="/tutorials" className="hover:text-purple-500 transition-colors">Tutorials</Link></li>
              <li><Link to="/docs" className="hover:text-purple-500 transition-colors">Documentation</Link></li>
              <li><Link to="/community" className="hover:text-purple-500 transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Column 4: Support (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/help" className="hover:text-purple-500 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-purple-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 5: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Get the latest updates and offers directly in your inbox.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-purple-500/25">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {year} LearnHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
