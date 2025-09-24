"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { getRecentBlogPosts } from '@/data/blogData';

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const blogPosts = getRecentBlogPosts(6);
  
  // Calculate number of posts per slide based on screen size
  const getPostsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 posts
      if (window.innerWidth >= 640) return 2;  // sm: 2 posts
      return 1; // mobile: 1 post
    }
    return 3; // default
  };
  
  const [postsPerSlide, setPostsPerSlide] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setPostsPerSlide(getPostsPerSlide());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalSlides = Math.ceil(blogPosts.length / postsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  // Get posts for current slide
  const getPostsForSlide = (slideIndex) => {
    const startIndex = slideIndex * postsPerSlide;
    const endIndex = startIndex + postsPerSlide;
    return blogPosts.slice(startIndex, endIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest insights, guides, and updates on business registration, compliance, and legal matters.
          </p>
          
          {/* View All Blogs Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
            aria-label="Previous blog post"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
            aria-label="Next blog post"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className={`grid gap-6 ${
                    postsPerSlide === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                    postsPerSlide === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                    'grid-cols-1'
                  }`}>
                    {getPostsForSlide(slideIndex).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-900 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isAutoPlaying
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-slide
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
