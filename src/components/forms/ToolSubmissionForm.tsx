import React, { useState } from 'react';
import { categories } from '../../data/categories';
import Button from '../ui/Button';

interface FormValues {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  imageUrl: string;
  categories: string[];
}

const initialValues: FormValues = {
  name: '',
  description: '',
  longDescription: '',
  url: '',
  imageUrl: '',
  categories: [],
};

const ToolSubmissionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormValues((prev) => {
      const updatedCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return { ...prev, categories: updatedCategories };
    });
    // Clear category error if any selected
    if (errors.categories && formValues.categories.length > 0) {
      setErrors((prev) => ({ ...prev, categories: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Tool name is required';
    }
    
    if (!formValues.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formValues.description.length > 200) {
      newErrors.description = 'Description should be 200 characters or less';
    }
    
    if (!formValues.url.trim()) {
      newErrors.url = 'URL is required';
    } else {
      try {
        new URL(formValues.url);
      } catch (e) {
        newErrors.url = 'Please enter a valid URL (including https://)';
      }
    }
    
    if (!formValues.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required';
    } else {
      try {
        new URL(formValues.imageUrl);
      } catch (e) {
        newErrors.imageUrl = 'Please enter a valid image URL (including https://)';
      }
    }
    
    if (formValues.categories.length === 0) {
      newErrors.categories = 'Please select at least one category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formValues);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormValues(initialValues);
      
      // In a real app, you would send this data to your backend
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your tool submission has been received and will be reviewed by our team.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="primary"
        >
          Submit Another Tool
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tool Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Tool Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Short Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Short Description * <span className="text-gray-500">(200 characters max)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          value={formValues.description}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="flex justify-between mt-1">
          {errors.description ? (
            <p className="text-sm text-red-600">{errors.description}</p>
          ) : (
            <p className="text-sm text-gray-500">{formValues.description.length}/200</p>
          )}
        </div>
      </div>

      {/* Long Description */}
      <div>
        <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-1">
          Detailed Description <span className="text-gray-500">(optional)</span>
        </label>
        <textarea
          id="longDescription"
          name="longDescription"
          rows={4}
          value={formValues.longDescription}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Website URL */}
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL *
        </label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="https://"
          value={formValues.url}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.url ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.url && <p className="mt-1 text-sm text-red-600">{errors.url}</p>}
      </div>

      {/* Image URL */}
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL *
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="https://"
          value={formValues.imageUrl}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.imageUrl ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.imageUrl && <p className="mt-1 text-sm text-red-600">{errors.imageUrl}</p>}
        <p className="mt-1 text-sm text-gray-500">
          Please provide a URL to an image representing the tool (logo, screenshot, etc.)
        </p>
      </div>

      {/* Categories */}
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Categories * <span className="text-gray-500">(select at least one)</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => handleCategoryToggle(category.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                formValues.categories.includes(category.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {errors.categories && (
          <p className="mt-1 text-sm text-red-600">{errors.categories}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Tool for Review'}
        </Button>
      </div>
    </form>
  );
};

export default ToolSubmissionForm;