import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Leadership Experience", value: "40+", suffix: "Years" },
    { label: "Professionals", value: "75+", suffix: "Experts" },
    { label: "Global Network", value: "5", suffix: "Continents" },
    { label: "Client Satisfaction", value: "100", suffix: "%" },
  ];

  return (
    <section className="bg-dimak-dark text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4 py-4 md:py-0">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                {stat.value}<span className="text-dimak-red text-2xl align-top ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;