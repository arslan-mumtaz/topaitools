import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import { formatDate } from '../../utils';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {tool.featured && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label={`Visit ${tool.name} website`}
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-gray-600 mb-4">{tool.description}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full px-3 py-1 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Added: {formatDate(tool.createdAt)}
          </span>
          <Link
            to={`/tool/${tool.id}`}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;