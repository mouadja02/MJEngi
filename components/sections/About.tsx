'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
  })

  const finalCounts = React.useMemo(() => ({
    experience: 3,
    projects: 15,
    technologies: 25,
  }), [])

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounters((prev: any) => ({
        experience: Math.min(prev.experience + finalCounts.experience / steps, finalCounts.experience),
        projects: Math.min(prev.projects + finalCounts.projects / steps, finalCounts.projects),
        technologies: Math.min(prev.technologies + finalCounts.technologies / steps, finalCounts.technologies),
      }))
    }, stepDuration)

    setTimeout(() => {
      clearInterval(timer)
      setCounters(finalCounts)
    }, duration)

    return () => clearInterval(timer)
  }, [finalCounts])

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Passionate about transforming data<br />
            into actionable insights and building intelligent systems
          </h2>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Quote</h3>
          <blockquote className="max-w-3xl mx-auto border-l-4 border-indigo-500 pl-6 italic text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-r-lg text-lg shadow-md border border-white/20 dark:border-gray-700/50">
            &ldquo;Continuous learning is not just my strategy — it&apos;s my competitive advantage.&rdquo;
          </blockquote>
          
          {/* Signature */}
          <div className="flex justify-center mt-4">
            <div className="relative w-48 h-24 bg-transparent">
              <Image
                                      src="/images/signature.png"
                alt="Signature"
                fill
                className="object-contain bg-transparent"
                style={{ backgroundColor: 'transparent' }}
                onError={(e) => {
                  // Fallback to text signature if image fails to load
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    target.style.display = 'none';
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl italic font-semibold">- Mouad</div>';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats & Visual Elements */}
        <div className="mt-16 space-y-8">
          {/* Animated Counters */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {Math.round(counters.experience)}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Years Experience
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                {Math.round(counters.projects)}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Projects Completed
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                {Math.round(counters.technologies)}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Technologies
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Journey Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Started with signal processing & electronics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Specialized in ML & computer vision</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Focused on cloud & data engineering</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300">Building production ML systems</span>
              </div>
            </div>
          </div>

          {/* Location & Availability */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Based in France</h3>
                <p className="text-primary-100">Pessac, Nouvelle-Aquitaine</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
                <p className="text-primary-100 text-sm">Open to remote & hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 