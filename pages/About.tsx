import React from 'react';

const TeamMember: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => (
    <div className="text-center p-4 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-200 object-cover" />
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600">{role}</p>
    </div>
);


const About: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-4">About Us</h1>
      <div className="space-y-4 text-gray-700 mb-8 prose lg:prose-lg max-w-none">
        <p>
          We are a team of passionate developers dedicated to creating high-quality, performant, and beautiful web applications. This project is a testament to our commitment to excellence and our expertise in the modern web development stack.
        </p>
        <p>
          Our goal is to build software that not only meets user needs but also provides an enjoyable and intuitive experience. We believe in the power of clean code, thoughtful design, and continuous learning.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <TeamMember name="Alice Johnson" role="Lead Frontend Engineer" imageUrl="https://picsum.photos/seed/alice/200" />
          <TeamMember name="Bob Williams" role="UI/UX Designer" imageUrl="https://picsum.photos/seed/bob/200" />
          <TeamMember name="Charlie Brown" role="React Specialist" imageUrl="https://picsum.photos/seed/charlie/200" />
      </div>
    </div>
  );
};

export default About;
