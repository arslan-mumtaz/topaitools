import React from 'react';
import { categories } from '../data/categories';
import PageLayout from '../components/layout/PageLayout';
import CategoryCard from '../components/tools/CategoryCard';
import Breadcrumbs from '../components/common/Breadcrumbs';

const CategoriesPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: 'Categories' }]}
            />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories</h1>
          <p className="text-gray-600 mb-8">
            Browse AI tools by category to find the perfect solution for your needs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoriesPage;