import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { tools } from '../data/tools';
import { Tool } from '../types';
import { formatDate, getToolsByCategory } from '../utils';
import PageLayout from '../components/layout/PageLayout';
import ToolCard from '../components/tools/ToolCard';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/ui/Button';

const ToolDetailPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [tool, setTool] = useState<Tool | null>(null);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);

  useEffect(() => {
    if (toolId) {
      const foundTool = tools.find((t) => t.id === toolId) || null;
      setTool(foundTool);

      // Find related tools (same category, excluding current tool)
      if (foundTool) {
        const related = getToolsByCategory(tools, foundTool.categories[0])
          .filter((t) => t.id !== toolId)
          .slice(0, 3);
        setRelatedTools(related);
      }
    }
  }, [toolId]);

  if (!tool) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
          <p className="text-gray-600 mb-6">
            The tool you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/tools">
            <Button>Browse All Tools</Button>
          </Link>
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
                { label: 'All Tools', path: '/tools' },
                { label: tool.name }
              ]}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 h-64 md:h-auto">
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                  {tool.featured && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-6">{tool.description}</p>
                
                {tool.longDescription && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">About</h2>
                    <p className="text-gray-700">{tool.longDescription}</p>
                  </div>
                )}
                
                {/* Categories */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Categories</h2>
                  <div className="flex flex-wrap gap-2">
                    {tool.categories.map((category) => (
                      <Link
                        key={category}
                        to={`/category/${category}`}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Details */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Details</h2>
                  <p className="text-gray-700">
                    <span className="font-medium">Added:</span> {formatDate(tool.createdAt)}
                  </p>
                </div>
                
                {/* Visit Button */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Visit Website <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ToolDetailPage;