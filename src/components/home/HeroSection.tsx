import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover the Best AI Tools for Your Next Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Explore our curated collection of cutting-edge AI tools to enhance your productivity, creativity, and efficiency.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for AI tools..."
              className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-full leading-5 bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tools">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Browse All Tools
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;