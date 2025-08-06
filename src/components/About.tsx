import React from 'react';
import { CheckCircle, Download, Calendar, MapPin } from 'lucide-react';
import { aboutData } from '../data/about.js';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {aboutData.title}
          </h2>
          <p className="text-lg sm:text-xl text-blue-600 font-semibold">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] text-emerald-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                Download Resume
                <div className="group-hover:translate-x-1 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Experience</h3>
            <div className="space-y-8">
              {aboutData.experience.map((job, index) => (
                <div key={index} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                  <div className="absolute -left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center text-blue-600 font-semibold mb-2 sm:mb-0 text-sm sm:text-base">
                        <MapPin size={14} className="sm:w-4 sm:h-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="sm:w-4 sm:h-4 mr-1" />
                        {job.duration}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;