import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ToolGrid from '../tools/ToolGrid';
import { Tool } from '../../types';

interface FeaturedToolsProps {
  tools: Tool[];
}

const FeaturedTools: React.FC<FeaturedToolsProps> = ({ tools }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Tools</h2>
          <Link 
            to="/tools" 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        
        <ToolGrid tools={tools} />
      </div>
    </section>
  );
};

export default FeaturedTools;