import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex\" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <Link to="/\" className="text-gray-500 hover:text-gray-700">
            <Home size={16} />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center">
              <ChevronRight size={16} className="text-gray-400" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;