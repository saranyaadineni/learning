import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { FiMenu } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function Navbar({ toggleDrawer }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 h-[80px] bg-white/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Left section: Sidebar toggle and Logo */}
        <div className="flex items-center gap-3">
          {isLoggedIn && (
            <button onClick={toggleDrawer} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiMenu size={24} className="text-gray-700 dark:text-gray-200" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-purple-600 p-2 rounded-xl group-hover:bg-purple-700 transition-colors">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-purple-600 transition-colors">
              LearnHub
            </span>
          </Link>
        </div>

        {/* Middle section: Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { title: "Home", path: "/" },
            { title: "Courses", path: "/courses" },
            { title: "My Courses", path: "/user/my-courses" },
            { title: "About", path: "/about" },
            { title: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-gray-600 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right section: Login/Logout buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/user/profile" className="text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-colors">
                Profile
              </Link>
              <button onClick={onLogout} className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 dark:shadow-purple-900/20">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-colors">
                Log In
              </Link>
              <Link to="/signup" className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 dark:shadow-purple-900/20">
                Get Started
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button (only visible when not logged in, as logged in has drawer toggle) */}
        {!isLoggedIn && (
          <button onClick={toggleDrawer} className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200">
            <FiMenu size={24} />
          </button>
        )}
      </div>
    </nav>
  );
}
