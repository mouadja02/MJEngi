'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = React.useMemo(() => [
    'Cloud Computing',
    'Machine Learning',
    'Data Engineering',
    'MLOps',
    'Data Pipelines',
    'AI Solutions'
  ], [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mouad_Jaouhari_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      {/* Animated Data Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-32 left-32 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 right-32 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M100,100 Q200,50 300,100 T500,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M200,200 Q400,150 600,200 T800,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-80 items-center min-h-[80vh]">
          {/* Left Side - Tech Stack Orbital Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orbital Ring - Outer */}
              <div className="absolute -inset-20 border border-dashed border-gray-300 dark:border-gray-600 rounded-full opacity-30"></div>
              
              {/* Tech Stack Orbiting Icons */}
              <div className="absolute -inset-20">
                {/* GCP */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '0px',
                       left: '148px'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/gcp.png"
                      alt="Google Cloud Platform"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">GCP</div>';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* AWS */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '56px',
                       left: '260px',
                       animationDelay: '-3.33s'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/aws.png"
                      alt="Amazon Web Services"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">AWS</div>';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Snowflake */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '148px',
                       left: '308px',
                       animationDelay: '-6.66s'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/snowflake.png"
                      alt="Snowflake"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded flex items-center justify-center text-white text-xs font-bold">❄️</div>';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Python */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '260px',
                       left: '148px',
                       animationDelay: '-10s'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/python.png"
                      alt="Python"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-yellow-500 to-green-500 rounded flex items-center justify-center text-white text-xs font-bold">🐍</div>';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Apache Spark */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '260px',
                       left: '56px',
                       animationDelay: '-13.33s'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/apache-spark.png"
                      alt="Apache Spark"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded flex items-center justify-center text-white text-xs font-bold">⚡</div>';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* PostgreSQL */}
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform duration-300 animate-spin" 
                     style={{ 
                       animationDuration: '20s', 
                       transformOrigin: '160px 160px',
                       top: '148px',
                       left: '8px',
                       animationDelay: '-16.66s'
                     }}>
                  <div className="w-8 h-8 rounded flex items-center justify-center animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                    <Image
                      src="/images/postgresql.png"
                      alt="PostgreSQL"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          target.style.display = 'none';
                          parent.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">SQL</div>';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Central Tech Hub */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-600">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Tech Stack
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Data & ML Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile and Presentation */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Spotlight Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-spin" style={{ animationDuration: '8s' }}></div>
                
                {/* Professional Badge Ring */}
                <div className="absolute -inset-2 border-2 border-blue-200 dark:border-blue-700 rounded-full animate-pulse"></div>
                
                {/* Main Profile Container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 border-4 border-white dark:border-gray-700 bg-white dark:bg-gray-800 z-10">
                  <Image
                    src="/images/mypic.png"
                    alt="Profile Picture"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold">MJ</div>';
                      }
                    }}
                  />
                </div>
                
                {/* Achievement Indicators */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce z-20" style={{ animationDelay: '2s' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-20">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>


            {/* Name and Introduction */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Mouad Jaouhari
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
                Call me <span className="text-blue-600 dark:text-blue-400 font-semibold">MJ</span>
              </p>
            </div>

            {/* Animated Typing Text */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span>Specializing in </span>
              <span className="ml-2 text-blue-600 dark:text-blue-400 font-semibold min-w-[250px] text-left">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-10 animate-fade-in bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Building the Future of Intelligent Systems
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-slide-up">
              <button
                onClick={downloadResume}
                className="btn-primary flex items-center space-x-2 group"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={scrollToContact}
                className="btn-outline flex items-center space-x-2 group"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Let&apos;s Connect</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 