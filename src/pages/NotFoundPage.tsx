import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;