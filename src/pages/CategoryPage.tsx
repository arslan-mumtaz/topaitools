import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tools } from '../data/tools';
import { categories, getCategoryById, getCategoryIcon } from '../data/categories';
import { getToolsByCategory } from '../utils';
import PageLayout from '../components/layout/PageLayout';
import ToolGrid from '../components/tools/ToolGrid';
import Breadcrumbs from '../components/common/Breadcrumbs';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryTools, setCategoryTools] = useState(tools);
  const category = getCategoryById(categoryId || '');
  const Icon = category ? getCategoryIcon(category.icon) : null;

  useEffect(() => {
    if (categoryId) {
      setCategoryTools(getToolsByCategory(tools, categoryId));
    }
  }, [categoryId]);

  if (!category) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">
            The category you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Categories', path: '/categories' },
                { label: category.name }
              ]}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              {Icon && (
                <div className="mr-4 p-3 bg-blue-100 rounded-full">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'} found in this category
            </p>
          </div>
          
          <ToolGrid 
            tools={categoryTools} 
            emptyMessage={`No tools found in the ${category.name} category yet.`}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryPage;