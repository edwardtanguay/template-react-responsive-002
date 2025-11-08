import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-4">Information Page</h1>
      <div className="space-y-4 text-gray-700 prose lg:prose-lg max-w-none">
        <p>
          This application serves as a demonstration of a well-structured React project. It showcases best practices in frontend development, including component-based architecture, routing, and modern styling techniques.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 pt-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Three distinct pages:</span> Welcome, Info, and About.
          </li>
          <li>
            <span className="font-semibold">Hash-based routing:</span> Using `HashRouter` for compatibility with environments that don't support URL path manipulation.
          </li>
          <li>
            <span className="font-semibold">Responsive Design:</span> The layout adapts to different screen sizes, from mobile to desktop, thanks to Tailwind CSS.
          </li>
          <li>
            <span className="font-semibold">Clean and Modern UI:</span> A visually appealing interface with a focus on user experience.
          </li>
           <li>
            <span className="font-semibold">Type-Safe Code:</span> Written in TypeScript to ensure robustness and improve developer experience.
          </li>
        </ul>
        <p>
          All components are functional and leverage React Hooks for state management and side effects, adhering to the latest standards in React development.
        </p>
      </div>
    </div>
  );
};

export default Info;
