import React from 'react';
import { AFFILIATES } from '../constants';
import { Network } from 'lucide-react';

const Affiliates: React.FC = () => {
  return (
    <section id="affiliates" className="py-24 bg-dimak-light border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-white rounded-full shadow-sm text-dimak-red">
                <Network size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-dimak-dark">Affiliate Firms & Organizations</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {AFFILIATES.map((affiliate, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-dimak-dark mb-3">{affiliate.name}</h3>
              <p className="text-gray-600 leading-relaxed">{affiliate.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliates;