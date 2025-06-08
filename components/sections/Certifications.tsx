'use client'

import React from 'react'
import Image from 'next/image'

// Helper function to get the correct image path for production
const getImagePath = (imagePath: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/MJEngi' : '';
  return `${basePath}${imagePath}`;
};

const Certifications = () => {
  const certifications = [
    {
      organization: 'IBM',
      name: 'Data Engineering Professional Certificate',
      status: 'In progress',
      id: '',
      icon: '/my-images/ibm.png',
      color: 'from-blue-500 to-blue-600'
    },
    {
      organization: 'GCP',
      name: 'Machine Learning for Trading',
      status: 'Issued in May 2025',
      id: 'NC1D4D6YB39E',
      icon: '/my-images/gcp.png',
      color: 'from-green-500 to-blue-500'
    },
    {
      organization: 'Snowflake',
      name: 'Modern Data Engineering with Snowflake',
      status: 'Issued in October 2024',
      id: 'Z1LFG4VV1KY1',
      icon: '/my-images/snowflake.png',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      organization: 'Google',
      name: 'Specialization in IT Support',
      status: 'Issued in August 2024',
      id: '4NKNVNGX01MA',
      icon: '/my-images/google.png',
      color: 'from-red-500 to-yellow-500'
    },
    {
      organization: 'Microsoft',
      name: 'Artificial Intelligence on Microsoft Azure',
      status: 'Issued in October 2024',
      id: 'Z1LFG4VV1KY1',
      icon: '/my-images/microsoft.png',
      color: 'from-red-400 to-yellow-500'
    },
    {
      organization: 'IBM',
      name: 'MAchine Learning with Python',
      status: 'Issued in July 2025',
      id: '',
      icon: '/my-images/ibm.png',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data engineering, machine learning, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Icon and Organization */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shadow-md mr-4 bg-white dark:bg-gray-700 flex items-center justify-center">
                    <Image
                      src={getImagePath(cert.icon)}
                      alt={`${cert.organization} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">' + cert.organization.charAt(0) + '</div>';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {cert.organization}
                    </h3>
                  </div>
                </div>

                {/* Certificate Name */}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.name}
                </h4>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {cert.status}
                  </span>
                  {cert.id && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      ID: {cert.id}
                    </span>
                  )}
                </div>

                {/* Verification Badge */}
                <div className="absolute top-4 right-4">
                  {cert.status === 'In progress' ? (
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All certifications are verified and can be validated through Coursera platform
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications 