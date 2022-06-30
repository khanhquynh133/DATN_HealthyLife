/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
	const [searchQuery, setSearchQuery] = useState(null);
	const getQuery = (event) => setSearchQuery(event.target.value);

	// const { user } = useSelector((state) => state.auth);
	// console.log({ user });

	return (
		<section className='banner d-flex align-items-center text-center'>
			<div className='container'>
				<div className='search-box col-md-6 my-2 mx-auto'>
					<input
						type='text'
						id='query'
						onChange={getQuery}
						className='form-control'
						placeholder='Find recipe in here ...'
					/>
					<Link to={`/search?name=${searchQuery}`}>
						<button
							onClick={() => window.scrollBy(0, 525)}
							className='btn btn-info search-btn rounded-pill'>
							Search
						</button>
					</Link>
				</div>

				<h1 className='slogan text-info'>Choose clean recipes </h1>
				<h1 className='slogan text-info'>to make your life more healthier</h1>
			</div>
		</section>
	);
};

export default Banner;
