/** @format */

import React, { useState, useEffect } from 'react';
import './Blog.css';
import allFoods from '../../fakeData/blog';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(allFoods);
  }, []);

  return (
    <section className="features my-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-2 header-text">
              <b>Healthy Life</b>
            </h3>
            <p className="mt-3 mb-5 text-center ">
              Bring healthy recipe to you!
            </p>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog}></BlogItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
