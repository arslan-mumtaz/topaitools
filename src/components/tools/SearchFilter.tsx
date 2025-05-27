import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { categories } from '../../data/categories';

interface SearchFilterProps {
  onSearch: (term: string) => void;
  onFilterChange: (categories: string[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // Handle category toggle
  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      
      onFilterChange(newCategories);
      return newCategories;
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    onSearch('');
    onFilterChange([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-8">
      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search AI tools..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />
      </div>

      {/* Filter toggle on mobile */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full text-left px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 flex justify-between items-center"
        >
          <span>Filter by Category</span>
          <span>{isFiltersOpen ? '−' : '+'}</span>
        </button>
      </div>

      {/* Filters section */}
      <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryToggle(category.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategories.includes(category.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Clear filters button */}
        {(searchTerm || selectedCategories.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;