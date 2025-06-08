'use client'

import { useState } from 'react'

interface ExperienceItem {
  id: number
  company: string
  role: string
  period: string
  location: string
  type: string
  description: string[]
  technologies: string[]
  achievements: string[]
}

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Stellantis',
      role: 'Data Engineer (Apprenticeship)',
      period: 'May 2025 - Present',
      location: 'Pessac, France',
      type: 'Full-time',
      description: [
        'Architected EL data pipelines migrating from Hadoop to AWS/Snowflake',
        'Designed scalable data processing workflows using AWS services',
        'Optimized data flow efficiency across legacy and modern systems'
      ],
      technologies: ['AWS', 'Snowflake', 'Hadoop', 'Python', 'SQL', 'Apache Airflow'],
      achievements: [
        'Reduced data processing time by 40%',
        'Successfully migrated 10TB+ of legacy data',
        'Implemented automated data quality checks'
      ]
    },
    {
      id: 2,
      company: 'Eviden',
      role: 'Data Science Intern',
      period: 'Feb 2025 - Present',
      location: 'Pessac, France',
      type: 'Internship',
      description: [
        'Developed Bitcoin market analysis solution with Snowflake and ML algorithms',
        'Engineered blockchain data pipeline with real-time on-chain indicators',
        'Integrated NASDAQ, VIX, Fear & Greed Index data for multi-factor analysis',
        'Implemented Apache Airflow and n8n for automated workflows',
        'Built DQN model for algorithmic trading strategies',
        'Created comprehensive analytical dashboard for market insights'
      ],
      technologies: ['Snowflake', 'Python', 'TensorFlow', 'Apache Airflow', 'n8n', 'Streamlit', 'DQN'],
      achievements: [
        'Built real-time blockchain data pipeline',
        'Developed reinforcement learning trading model',
        'Created interactive market analysis dashboard'
      ]
    },
    {
      id: 3,
      company: 'École de technologie supérieure',
      role: 'Research Intern',
      period: 'May 2024 - Sep 2024',
      location: 'Montreal, Canada',
      type: 'Research',
      description: [
        'Optimized satellite communication routing algorithms',
        'Developed multi-hop routing strategies for satellite environments',
        'Implemented data reduction techniques and fast shortest-path algorithms'
      ],
      technologies: ['MATLAB', 'C++', 'Algorithm Design', 'Network Optimization', 'IoT'],
      achievements: [
        'Published IEEE research paper',
        'Improved routing efficiency by 35%',
        'Developed novel time-of-visibility estimation algorithm'
      ]
    },
    {
      id: 4,
      company: 'ENSEIRB-MATMECA',
      role: 'ML & Data Engineering Projects',
      period: 'Sep 2022 - Jun 2024',
      location: 'France',
      type: 'Academic',
      description: [
        'Implemented adversarial ML techniques against neural networks',
        'Applied feature engineering (HOG, LBP, PCA, SVM) for image recognition',
        'Developed real-time ADS-B software receiver with signal processing',
        'Created embedded systems and game development projects'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'C++', 'FPGA', 'Signal Processing'],
      achievements: [
        'Achieved 95% accuracy in adversarial attack detection',
        'Built real-time signal processing system',
        'Completed 10+ ML/data engineering projects'
      ]
    }
  ]

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on experience in data engineering, ML, and research
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                {/* Experience Card */}
                <div className="ml-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleCard(exp.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold">
                          <span>{exp.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {exp.period}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Brief Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description[0]}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-sm">
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                      <span>{expandedCard === exp.id ? 'Show Less' : 'View Details'}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${expandedCard === exp.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedCard === exp.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                      {/* Full Description */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                              <span className="text-secondary-600 dark:text-secondary-400 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* All Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Publication Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Research Publication</h3>
            <p className="text-lg mb-2">
              &ldquo;Fast Time-of-Visibility Estimation for Real-Time Direct-to-Satellite IoT Connectivity&rdquo;
            </p>
            <p className="text-primary-100 mb-4">IEEE • September 2024</p>
            <button 
              className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              onClick={() => window.open('https://ieeexplore.ieee.org/document/10667193/', '_blank')}
            >
              View Publication
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 