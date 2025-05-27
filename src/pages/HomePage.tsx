import React from 'react';
import { tools } from '../data/tools';
import { categories } from '../data/categories';
import { getFeaturedTools } from '../utils';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/home/HeroSection';
import FeaturedTools from '../components/home/FeaturedTools';
import CategoriesSection from '../components/home/CategoriesSection';

const HomePage: React.FC = () => {
  const featuredTools = getFeaturedTools(tools);

  return (
    <PageLayout>
      <HeroSection />
      <FeaturedTools tools={featuredTools} />
      <CategoriesSection categories={categories} />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter to get the latest AI tools and updates delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;