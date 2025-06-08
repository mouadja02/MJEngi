'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: 'completed' | 'in-progress' | 'planned'
  features: string[]
  challenges: string[]
  outcomes: string[]
  githubUrl?: string
  liveUrl?: string
  downloadUrl?: string
  architectureUrl?: string
  imageUrl?: string
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showArchitecture, setShowArchitecture] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bitcoin Trading Platform',
      description: 'Blockchain + ML + Real-time Analytics platform for cryptocurrency market analysis',
      longDescription: 'A comprehensive Bitcoin market analysis platform that combines blockchain data analysis with reinforcement learning for trading strategy optimization. The platform integrates multiple data sources and provides real-time insights.',
      technologies: ['Snowflake', 'Python', 'TensorFlow', 'Apache Airflow', 'n8n', 'Streamlit', 'DQN', 'Blockchain APIs'],
      category: 'ml',
      status: 'in-progress',
      features: [
        'Real-time blockchain data pipeline',
        'Multi-factor market analysis (NASDAQ, VIX, Fear & Greed Index)',
        'DQN-based algorithmic trading model',
        'Interactive analytical dashboard',
        'Automated workflow orchestration'
      ],
      challenges: [
        'Handling high-frequency blockchain data',
        'Integrating multiple heterogeneous data sources',
        'Optimizing reinforcement learning model performance',
        'Ensuring real-time data processing reliability'
      ],
      outcomes: [
        'Built scalable data pipeline processing 1M+ transactions/day',
        'Achieved 15% improvement in trading strategy performance',
        'Created comprehensive market analysis dashboard'
      ],
      architectureUrl: '/images/bitcoin-architecture.png',
      liveUrl: '#',
      imageUrl: '/images/bitcoin-trading.png'
    },
    {
      id: 2,
      title: 'Data Migration Pipeline',
      description: 'AWS + Snowflake + Enterprise Scale data migration from legacy Hadoop systems',
      longDescription: 'Enterprise-scale data migration project transitioning from legacy Hadoop infrastructure to modern cloud-based AWS and Snowflake architecture. Designed for scalability and efficiency.',
      technologies: ['AWS Glue', 'dbt', 'Snowflake', 'TeamCity', 'SQL', 'Apache Airflow'],
      category: 'data',
      status: 'in-progress',
      features: [
        'Automated ELT pipeline architecture',
        'Data quality validation framework',
        'Scalable processing workflows',
        'Legacy system integration',
        'Performance monitoring and alerting'
      ],
      challenges: [
        'Migrating high volume of legacy data',
        'Ensuring zero data loss during migration',
        'Maintaining system performance during transition',
      ],
      outcomes: [
        'Implemented automated data migration pipelines'
      ],
      imageUrl: '/images/data-migration.png'
    },
    {
      id: 3,
      title: 'Satellite IoT Routing',
      description: 'Algorithm Optimization + Research Publication for satellite communication systems',
      longDescription: 'Research project focused on optimizing satellite communication routing algorithms for IoT devices. Developed novel time-of-visibility estimation algorithms for real-time direct-to-satellite connectivity.',
      technologies: ['MATLAB', 'Algorithm Design', 'Network Optimization', 'IoT', 'Simulation'],
      category: 'research',
      status: 'completed',
      features: [
        'Multi-hop routing optimization',
        'Time-of-visibility estimation algorithm',
        'Data reduction techniques',
        'Fast shortest-path algorithms',
        'Satellite network simulation'
      ],
      challenges: [
        'Optimizing for dynamic satellite positions',
        'Minimizing data transmission delays',
        'Handling network topology changes',
        'Balancing accuracy with computational efficiency'
      ],
      outcomes: [
        'Published IEEE research paper',
        'Improved routing efficiency by 35%',
        'Developed novel estimation algorithm',
        'Contributed to satellite IoT research field'
      ],
      downloadUrl: 'https://ieeexplore.ieee.org/document/10667193/',
      imageUrl: '/images/satellite-iot.png'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'data', name: 'Data Engineering', count: projects.filter(p => p.category === 'data').length },
    { id: 'research', name: 'Research', count: projects.filter(p => p.category === 'research').length },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      case 'planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'planned': return 'Planned'
      default: return 'Unknown'
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing end-to-end solutions in data engineering, machine learning, and research
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        parent.innerHTML = '<div class="text-white text-6xl font-bold opacity-20">' + project.title.split(' ').map((word: string) => word[0]).join('').slice(0, 2) + '</div>';
                      }
                    }}
                  />
                ) : (
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.split(' ').map((word: string) => word[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </button>
                  
                  {/* Architecture Button for Bitcoin Trading */}
                  {project.architectureUrl && (
                    <button 
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowArchitecture(true);
                      }}
                      title="View Architecture"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </button>
                  )}
                  
                  {/* GitHub Button */}
                  {project.githubUrl && (
                    <button 
                      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      title="View on GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  )}
                  
                  {/* Publication/Download Button */}
                  {project.downloadUrl && (
                    <button 
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.downloadUrl, '_blank');
                      }}
                      title="View Publication"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Popup */}
        {showArchitecture && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4">
                {/* Architecture Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bitcoin Trading Platform - Architecture Overview
                  </h3>
                  <button
                    onClick={() => setShowArchitecture(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Architecture Image */}
                <div className="w-full h-[70vh] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/images/bitcoin-architecture.png"
                    alt="Bitcoin Trading Platform Architecture"
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400"><div class="text-center"><svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><p>Architecture diagram will be displayed here</p></div></div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {selectedProject.longDescription}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technical Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                          <span className="text-accent-600 dark:text-accent-400 mt-1">⚡</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Outcomes & Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                          <span className="text-secondary-600 dark:text-secondary-400 mt-1">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
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
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects 