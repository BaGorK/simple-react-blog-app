import { Blog } from '@/types/blog.type';

export const blogs: Blog[] = [
  {
    id: '04998d30-cccd-47fd-ad93-598d970a8079',
    title: 'Understanding React Hooks',
    subtitle: 'A deep dive into useState, useEffect, and beyond',
    paragraphs: [
      '<p>React Hooks revolutionized state management in functional components. <strong>useState</strong> allows us to add state to functional components...</p>',
      '<p><strong>useEffect</strong> helps in handling side effects such as API calls...</p>',
    ],
    image: '/images/hooks.png',
  },
  {
    id: '79744d74-73ea-4e09-ab07-71feabf71ba9',
    title: 'Mastering Tailwind CSS',
    subtitle: 'How utility-first CSS speeds up your development',
    paragraphs: [
      '<p>Tailwind CSS offers a faster, more flexible way to style applications...</p>',
      '<p>By using utility classes, we eliminate the need for complex CSS files...</p>',
    ],
    image: '/images/tailwind.png',
  },
  {
    id: 'c0b5f1a2-4d3e-4f8b-9c7d-5a6e1f3b8c2d',
    title: 'State Management with Redux Toolkit',
    subtitle: 'Simplify global state management in React',
    paragraphs: [
      '<p>Redux Toolkit makes managing state in large applications easier...</p>',
      '<p>With features like <strong>createSlice</strong> and <strong>createAsyncThunk</strong>, we simplify reducers and API handling...</p>',
    ],
    image: '/images/redux.png',
  },
  {
    id: 'f1a2b3c4-d5e6-7f8g-9h0i-j1k2l3m4n5o6',
    title: 'Building a Blog with Next.js',
    subtitle: 'Why Next.js is the best framework for modern web apps',
    paragraphs: [
      '<p>Next.js offers features like <strong>server-side rendering (SSR)</strong> and <strong>static site generation (SSG)</strong>...</p>',
      '<p>With API routes, we can build full-stack applications using only Next.js...</p>',
    ],
    image: '/images/next.png',
  },
  {
    id: '7a8b9c0d-e1f2-3g4h-5i6j-7k8l9m0n1o2p',
    title: 'Deploying on Vercel',
    subtitle: 'How to quickly deploy your React & Next.js apps',
    paragraphs: [
      '<p>Vercel provides a seamless experience for deploying frontend applications...</p>',
      '<p>With automatic deployments from GitHub, your project goes live instantly...</p>',
    ],
    image: '/images/vercel.png',
  },
];
