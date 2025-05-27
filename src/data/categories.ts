import { Category } from '../types';
import { Brush, Code, MessageSquare, PenTool, Zap } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'chatbots',
    name: 'Chatbots',
    description: 'AI assistants that can converse and help with various tasks',
    icon: 'MessageSquare'
  },
  {
    id: 'writing',
    name: 'Writing',
    description: 'Tools that help with content creation and editing',
    icon: 'PenTool'
  },
  {
    id: 'coding',
    name: 'Coding',
    description: 'AI assistants for programming and development',
    icon: 'Code'
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    description: 'Create stunning visuals from text descriptions',
    icon: 'Brush'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Tools to help you work smarter and more efficiently',
    icon: 'Zap'
  },
  {
    id: 'creativity',
    name: 'Creativity',
    description: 'Enhance your creative workflow with AI',
    icon: 'Brush'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'AI tools for better marketing campaigns',
    icon: 'Zap'
  },
  {
    id: 'open-source',
    name: 'Open Source',
    description: 'Free and open AI tools for everyone',
    icon: 'Code'
  }
];

// Helper function to get category by id
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

// Helper function to get icon component by name
export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquare':
      return MessageSquare;
    case 'PenTool':
      return PenTool;
    case 'Code':
      return Code;
    case 'Brush':
      return Brush;
    case 'Zap':
      return Zap;
    default:
      return Zap;
  }
};