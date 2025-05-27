import { Tool } from '../types';

// Filter tools based on search term and selected categories
export const filterTools = (
  tools: Tool[],
  searchTerm: string,
  selectedCategories: string[]
): Tool[] => {
  return tools.filter((tool) => {
    // Filter by search term
    const matchesSearch =
      searchTerm === '' ||
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by categories
    const matchesCategories =
      selectedCategories.length === 0 ||
      tool.categories.some((category) => selectedCategories.includes(category));

    return matchesSearch && matchesCategories;
  });
};

// Get featured tools
export const getFeaturedTools = (tools: Tool[]): Tool[] => {
  return tools.filter((tool) => tool.featured);
};

// Get tools by category
export const getToolsByCategory = (tools: Tool[], categoryId: string): Tool[] => {
  return tools.filter((tool) => tool.categories.includes(categoryId));
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};