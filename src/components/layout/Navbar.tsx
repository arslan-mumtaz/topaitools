import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Tools Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/tools"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            All Tools
          </Link>
          <Link
            to="/categories"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Categories
          </Link>
          <Link to="/submit-tool">
            <Button>Submit a Tool</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/tools"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              All Tools
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Categories
            </Link>
            <Link to="/submit-tool" className="py-2">
              <Button className="w-full">Submit a Tool</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;