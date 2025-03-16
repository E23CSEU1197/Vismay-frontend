
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Vismay</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/barter"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Barter
            </Link>
            <Link
              to="/donations"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Donations
            </Link>
            <Link
              to="/sell"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Sell
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">John Doe</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
