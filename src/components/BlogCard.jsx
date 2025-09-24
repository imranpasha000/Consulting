"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-medium transition-colors group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
