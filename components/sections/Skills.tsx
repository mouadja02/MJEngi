'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Helper function to get the correct image path for production
const getImagePath = (imagePath: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/MJEngi' : '';
  return `${basePath}${imagePath}`;
};

const skills = [
  {
    name: 'Google Cloud Platform',
    icon: '/images/gcp.png',
    description: 'Used for building scalable ML pipelines and data processing workflows at Stellantis and personal projects'
  },
  {
    name: 'Amazon Web Services',
    icon: '/images/aws.png',
    description: 'Implemented data migration pipelines and cloud infrastructure for enterprise-scale applications'
  },
  {
    name: 'Python',
    icon: '/images/python.png',
    description: 'Primary language for ML development, data analysis, and backend services across all projects'
  },
  {
    name: 'TensorFlow',
    icon: '/images/tf.png',
    description: 'Deep learning framework used for computer vision and NLP projects, including satellite IoT research'
  },
  {
    name: 'Apache Airflow',
    icon: '/images/aiflow.png',
    description: 'Used for building scalable ML pipelines and data processing workflows and personal projects'
  },
  {
    name: 'Apache Spark',
    icon: '/images/spark.png',
    description: 'Big data processing for large-scale analytics and ETL pipelines in enterprise environments'
  },
  {
    name: 'Snowflake',
    icon: '/images/snowflake.png',
    description: 'Data warehousing solution for analytics and business intelligence projects'
  },
  {
    name: 'PostgreSQL',
    icon: '/images/postgresql.png',
    description: 'Primary database for transactional systems and data storage in various applications'
  },
  {
    name: 'Docker',
    icon: '/images/docker.png',
    description: 'Containerization for ML model deployment and microservices architecture'
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Core technologies and platforms I use to build scalable data solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-white/20 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-700"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 mb-4 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={getImagePath(skill.icon)}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to a generic icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        parent.innerHTML = '<div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-2xl">🔧</div>';
                      }
                    }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Machine Learning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">PyTorch, Scikit-learn, Computer Vision</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Data Engineering</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Apache Airflow, Kafka, ETL Pipelines</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Signal Processing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">MATLAB, Algorithm Optimization</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Blockchain</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Smart Contracts, DeFi Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 