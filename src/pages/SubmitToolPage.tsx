import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import ToolSubmissionForm from '../components/forms/ToolSubmissionForm';
import Breadcrumbs from '../components/common/Breadcrumbs';

const SubmitToolPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: 'Submit a Tool' }]}
            />
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Tool</h1>
            <p className="text-gray-600 mb-6">
              Know an amazing AI tool that should be featured on our platform? Submit it below for review.
            </p>
            
            <ToolSubmissionForm />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubmitToolPage;