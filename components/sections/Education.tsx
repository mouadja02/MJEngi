'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    degree: "Master's in Signal and Image Processing",
    school: "ENSEIRB-MATMECA",
    period: "2023 - 2025",
    location: "Bordeaux, France",
    description: "Specialized in advanced signal processing, machine learning, and computer vision with focus on real-time systems and algorithm optimization.",
    highlights: [
      "Research publication in IEEE on satellite IoT connectivity",
      "Advanced coursework in ML and deep learning",
      "Signal processing and algorithm optimization"
    ],
    status: "current"
  },
  {
    degree: "Bachelor's in Electrical, Electronic and Communications",
    school: "ENSEIRB-MATMECA",
    period: "2022 - 2023",
    location: "Bordeaux, France",
    description: "Foundation in electrical engineering, electronics, and communication systems with emphasis on digital signal processing.",
    highlights: [
      "Strong foundation in electronics and communications",
      "Digital signal processing fundamentals",
      "Mathematics and physics for engineering"
    ],
    status: "completed"
  },
  {
    degree: "Classes Préparatoires MPSI/MP",
    school: "Preparatory Classes",
    period: "2020 - 2022",
    location: "France",
    description: "Intensive two-year program in mathematics, physics, and engineering sciences preparing for competitive entrance exams to engineering schools.",
    highlights: [
      "Advanced mathematics and physics",
      "Problem-solving and analytical thinking",
      "Competitive exam preparation"
    ],
    status: "completed"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading gradient-text mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic foundation in signal processing, electronics, and advanced mathematics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'} lg:w-1/2`}
            >
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-8 w-px h-full bg-gray-300 dark:bg-gray-600 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Timeline dot */}
              <div className={`hidden lg:block absolute top-8 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 left-1/2 transform -translate-x-1/2 ${
                edu.status === 'current' ? 'bg-primary-600' : 'bg-secondary-600'
              }`}></div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'current' 
                        ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400'
                        : 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-400'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Academic Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">📚</div>
                <div className="text-lg font-semibold mb-1">Research Publication</div>
                <div className="text-primary-100 text-sm">IEEE Conference 2024</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🎓</div>
                <div className="text-lg font-semibold mb-1">Engineering Degree</div>
                <div className="text-primary-100 text-sm">Signal & Image Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">⚡</div>
                <div className="text-lg font-semibold mb-1">Competitive Prep</div>
                <div className="text-primary-100 text-sm">MPSI/MP Mathematics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 