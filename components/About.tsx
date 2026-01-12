import React from 'react';
import { Eye, Flag, Target, Users, Zap, Award, Globe } from 'lucide-react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          
          {/* Intro Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
               <h2 className="text-4xl lg:text-5xl font-display font-bold text-dimak-dark leading-tight mb-6">
                Global Standards, <br />
                <span className="text-dimak-red">Local Expertise.</span>
              </h2>
              <div className="w-20 h-1.5 bg-dimak-gold mb-6"></div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Incorporated in 2021, <strong>DIMAK</strong> is a premier integrated consulting firm. 
                We bridge the gap between complex global business challenges and actionable local solutions. 
                With offices in Lagos, Abuja, Ilorin, and Kano, and a network spanning continents, we are positioned to drive your success.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                       <div className="p-2 bg-dimak-red/10 rounded-lg text-dimak-red"><Eye size={24}/></div>
                       <h3 className="font-display font-bold text-lg">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 text-sm">To be a trusted global consulting partner, driving ethical and impactful growth.</p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <div className="flex items-center gap-3 mb-3">
                       <div className="p-2 bg-dimak-gold/20 rounded-lg text-yellow-700"><Flag size={24}/></div>
                       <h3 className="font-display font-bold text-lg">Our Mission</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Delivering services with integrity, precision, and global best practices.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-dimak-light relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <h3 className="text-3xl font-display font-bold text-dimak-dark">Our Core Values</h3>
              <p className="text-gray-500 max-w-md text-right hidden md:block">The principles that guide every decision, transaction, and strategy we implement.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div key={val.id} className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-display font-black text-8xl text-gray-400 group-hover:text-dimak-red transition-colors select-none">
                  {val.id}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 w-14 h-14 rounded-full bg-dimak-light flex items-center justify-center text-dimak-red group-hover:bg-dimak-red group-hover:text-white transition-colors">
                     {idx === 0 ? <Globe size={28} /> : idx === 1 ? <Award size={28} /> : <Zap size={28} />}
                  </div>
                  
                  <h4 className="text-xl font-bold text-dimak-dark mb-2 group-hover:text-dimak-red transition-colors">{val.title}</h4>
                  <p className="text-dimak-gold font-medium text-sm mb-4 uppercase tracking-wide">{val.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed text-sm mt-auto">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;