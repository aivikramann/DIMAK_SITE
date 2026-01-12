import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, BarChart3, Calculator, FileText, Layers, ShieldCheck, Users2, Briefcase } from 'lucide-react';

const icons = [
  <Calculator />, 
  <BarChart3 />, 
  <ShieldCheck />, 
  <Users2 />, 
  <Briefcase />, 
  <Layers />, 
  <FileText />
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dimak-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dimak-dark mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive, scalable solutions designed to navigate the complexities of modern business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-dimak-red/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dimak-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-dimak-light rounded-xl flex items-center justify-center text-dimak-dark group-hover:bg-dimak-red group-hover:text-white transition-colors duration-300">
                  {icons[index % icons.length]}
                </div>
                <span className="text-xs font-bold text-gray-300 group-hover:text-dimak-gold transition-colors">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-dimak-dark mb-4 group-hover:text-dimak-red transition-colors">
                {service.category}
              </h3>

              <ul className="space-y-3 mb-8">
                {service.items.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-dimak-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
                {service.items.length > 4 && (
                    <li className="text-xs text-gray-400 italic pl-4">+ {service.items.length - 4} more services</li>
                )}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-dimak-dark font-semibold text-sm group-hover:text-dimak-red transition-colors cursor-pointer">
                Learn More <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;