/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const getQuery = (event) => setSearchQuery(event.target.value);
  const [searchBy, setSearchBy] = useState('name');
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="banner d-flex align-items-center text-end">
      <div className="container">
        <div className="search-box col-md-5 my-2 d-flex mx-auto">
          <div>
            <input
              type="text"
              id="query"
              onChange={getQuery}
              className="form-control"
              placeholder="Find recipe in here ..."
            />
            <div>
              <input
                type="radio"
                id="name"
                name="type"
                value="name"
                defaultChecked="name"
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
              <input
                type="radio"
                id="ingredient"
                name="type"
                value="ingredient"
                onChange={handleChange}
              />
              <label htmlFor="ingredient">Ingredient</label>
            </div>
          </div>
          <Link to={`/search?name=${searchQuery}`}>
            <button
              onClick={() => window.scrollBy(0, 525)}
              className="btn btn-warning search-btn rounded-pill"
            >
              <b>Search</b>
            </button>
          </Link>
        </div>

        <h1 className="slogan text-warning">Choose clean recipes </h1>
        <h1 className="slogan text-warning">
          to make your life more healthier
        </h1>
      </div>
    </section>
  );
};

export default Banner;
