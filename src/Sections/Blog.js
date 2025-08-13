import React from 'react'
import Card from '../Components/Cardblog'

function Blog() {
 

  return (
    <div id="blog" className="text-center mt-[50px] sm:mt-[80px] lg:mt-[100px] mb-[100px] sm:mb-[150px] lg:mb-[250px] px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-red-500 font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-[50px]">
        Latest News
      </h1>
      <p className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-[50px]">
        Checkout My Recent Blogs
      </p>
      <p className="text-gray-400 font-bold text-sm sm:text-base lg:text-xl mb-8 sm:mb-12 lg:mb-[50px] max-w-2xl mx-auto px-4">
        Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-8 md:px-16 lg:px-[300px]">
        
          <Card
          img="/assets/blog-1.jpg"
            title="Web Development "
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum."
          />
        
          <Card
          img="/assets/blog-2.jpg"
            title="Ui/Ux Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum."
          />
        
          <Card
            title="mobile Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum."
          img="/assets/blog-3.jpg"
          />
        
      </div>
    </div>
  )
}

export default Blog
