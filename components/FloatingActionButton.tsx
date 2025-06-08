const FloatingActionButton = () => {
  // Helper function to get the correct path for production
  const getImagePath = (imagePath: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/MJEngi' : '';
    return `${basePath}${imagePath}`;
  };

  const downloadResume = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a')
    link.href = getImagePath('/resume.pdf')
    link.download = 'Mouad_Jaouhari_Resume.pdf'
    link.click()
  }

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        onClick={downloadResume}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Download Resume"
      >
        <svg 
          className="w-6 h-6 group-hover:animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Download Resume
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  )
}

export default FloatingActionButton 