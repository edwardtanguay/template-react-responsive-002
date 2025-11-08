import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const Welcome: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Welcome to Our Application</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          This is a modern single-page application built using React, React Router, and Tailwind CSS. Explore the different sections to learn more about what we offer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <Card title="React Router" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>
          Client-side routing with `react-router-dom` allows for seamless navigation between pages without full page reloads.
        </Card>
        <Card title="Tailwind CSS" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}>
          A utility-first CSS framework for rapidly building custom user interfaces. All styling is done directly in the markup.
        </Card>
        <Card title="TypeScript" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20v-6m0 0V4m0 6h10M5 20v-6m0 0V4m0 6H3" /></svg>}>
          Enhances JavaScript with static typing, improving code quality and developer productivity.
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
