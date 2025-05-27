import React, { useState, useEffect } from 'react';
import { tools } from '../data/tools';
import { filterTools } from '../utils';
import PageLayout from '../components/layout/PageLayout';
import ToolGrid from '../components/tools/ToolGrid';
import SearchFilter from '../components/tools/SearchFilter';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ToolsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredTools, setFilteredTools] = useState(tools);

  // Update filtered tools when search or filters change
  useEffect(() => {
    setFilteredTools(filterTools(tools, searchTerm, selectedCategories));
  }, [searchTerm, selectedCategories]);

  return (
    <PageLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: 'All Tools' }]}
            />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">All AI Tools</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <SearchFilter
                onSearch={setSearchTerm}
                onFilterChange={setSelectedCategories}
              />
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="mb-4 text-gray-600">
                {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
              </div>
              
              <ToolGrid 
                tools={filteredTools} 
                emptyMessage="No tools found matching your criteria. Try adjusting your filters or search term."
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ToolsPage;