/** @format */

import React, { useState, useEffect } from "react";
import "./Blog.css";
import allFoods from "../../fakeData/blog";
import BlogItem from "../BlogItem/BlogItem";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		setBlogs(allFoods);
	}, []);

	// const [blogs, setBlogs] = useState([]);
	// useEffect(() => {
	//   const getData = () => {
	//     fetch("blog.json", {
	//       headers: {
	//         "Content-Type": "application/json",
	//         Accept: "application/json",
	//       },
	//     })
	//       .then(function (response) {
	//         //   console.log(response);
	//         return response.json();
	//       })
	//       .then(function (myJson) {
	//         setBlogs(myJson);
	//         //   console.log(myJson);
	//       });
	//   };
	//   getData();
	// }, []);

	return (
		<section className='features my-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h3 className='text-center mt-2 header-text'>
							<b>Healthy Life</b>
						</h3>
						<p className='mt-3 mb-5 text-center '>
							Bring healthy recipe to you!
						</p>
					</div>
				</div>

				<div className='row'>
					{blogs.map((blog) => (
						<BlogItem key={blog.id} blog={blog}></BlogItem>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
