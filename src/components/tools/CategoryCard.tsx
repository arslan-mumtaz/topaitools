import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import { getCategoryIcon } from '../../data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = getCategoryIcon(category.icon);

  return (
    <Link
      to={`/category/${category.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
    >
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 text-center">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;