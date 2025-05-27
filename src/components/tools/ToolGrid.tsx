import React from 'react';
import ToolCard from './ToolCard';
import { Tool } from '../../types';

interface ToolGridProps {
  tools: Tool[];
  emptyMessage?: string;
}

const ToolGrid: React.FC<ToolGridProps> = ({ 
  tools, 
  emptyMessage = "No tools found matching your criteria." 
}) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolGrid;