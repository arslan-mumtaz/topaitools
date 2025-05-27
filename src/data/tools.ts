import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced AI chatbot that can understand and generate human-like text based on prompts.',
    longDescription: 'ChatGPT is an AI language model developed by OpenAI that can engage in conversational dialogue and provide responses that can feel surprisingly human. From answering questions and offering explanations to creative writing and coding assistance, ChatGPT represents a significant leap forward in AI communication capabilities.',
    categories: ['chatbots', 'writing', 'productivity'],
    url: 'https://chat.openai.com',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    featured: true,
    createdAt: '2022-11-30'
  },
  {
    id: '2',
    name: 'DALL-E',
    description: 'AI system that creates realistic images and art from natural language descriptions.',
    longDescription: 'DALL-E is an AI system developed by OpenAI that can create realistic images and art from a description in natural language. Named as a portmanteau of the artist Salvador Dalí and the robot WALL-E, DALL-E can generate images in multiple styles and can combine concepts, attributes, and styles in ways never seen before.',
    categories: ['image-generation', 'creativity'],
    url: 'https://openai.com/dall-e-2',
    imageUrl: 'https://images.pexels.com/photos/7541675/pexels-photo-7541675.jpeg',
    featured: true,
    createdAt: '2021-01-05'
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code by offering suggestions based on comments and context.',
    longDescription: 'GitHub Copilot is an AI pair programmer that helps you write better code. It draws context from comments and code to suggest individual lines and whole functions instantly. GitHub Copilot is powered by OpenAI Codex, a generative pretrained language model that\'s been trained on billions of lines of public code.',
    categories: ['coding', 'productivity'],
    url: 'https://github.com/features/copilot',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    featured: true,
    createdAt: '2021-06-29'
  },
  {
    id: '4',
    name: 'Midjourney',
    description: 'AI art generator that creates stunning visuals based on text prompts via Discord.',
    longDescription: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. It generates images from textual descriptions, similar to OpenAI\'s DALL-E and Stable Diffusion. The tool is currently in open beta and is available via Discord.',
    categories: ['image-generation', 'creativity'],
    url: 'https://www.midjourney.com',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg',
    featured: true,
    createdAt: '2022-07-12'
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'AI content platform that helps you create marketing copy, social media posts, and more.',
    longDescription: 'Jasper is an AI content platform that helps you create marketing copy, social media posts, and more. It uses AI to generate content in seconds, enabling creators to break through creative blocks and businesses to create content at scale.',
    categories: ['writing', 'marketing', 'productivity'],
    url: 'https://www.jasper.ai',
    imageUrl: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg',
    createdAt: '2021-02-15'
  },
  {
    id: '6',
    name: 'Stable Diffusion',
    description: 'Open-source image generation model that creates detailed images from text descriptions.',
    longDescription: 'Stable Diffusion is a deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images conditioned on text descriptions, though it can also be applied to other tasks such as inpainting, outpainting, and generating image-to-image translations guided by a text prompt.',
    categories: ['image-generation', 'open-source'],
    url: 'https://stability.ai',
    imageUrl: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    createdAt: '2022-08-22'
  },
  {
    id: '7',
    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps with grammar, clarity, engagement, and delivery.',
    longDescription: 'Grammarly is an AI-powered writing assistant that helps you write clearly and effectively. It goes beyond grammar to help you improve the clarity, engagement, and delivery of your writing. It works where you write: email, documents, social media, and more.',
    categories: ['writing', 'productivity'],
    url: 'https://www.grammarly.com',
    imageUrl: 'https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg',
    createdAt: '2009-08-01'
  },
  {
    id: '8',
    name: 'RunwayML',
    description: 'Creative toolkit with AI magic tools for content creators and artists.',
    longDescription: 'RunwayML is an applied AI research company building creative tools for creators of all kinds. Runway makes it easy to use AI in creative workflows with magical AI tools like text-to-image generation, image-to-image translation, and more.',
    categories: ['image-generation', 'video', 'creativity'],
    url: 'https://runwayml.com',
    imageUrl: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg',
    createdAt: '2018-05-15'
  }
];