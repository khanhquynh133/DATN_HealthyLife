/** @format */

import React, { useEffect, useState } from 'react';
import drink from '../../images/foodicon/juice4.jpg';
import nutmilk from '../../images/foodicon/nutmilk.png';
import airfryer from '../../images/foodicon/airfryer.png';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByTypeId } from '../../stores/recipe/recipesSlice';
import { TYPE } from '../../core/constants';

const Types = () => {
  const [type, setType] = useState(TYPE.AIRFRYER);
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  console.log(recipes);
  const renderHeading = () => {
    switch (type) {
      case TYPE.AIRFRYER:
        return 'Air Fryer';
      case TYPE.JUICE:
        return 'Juice';
      case TYPE.NUTMILK:
        return 'Nut Milk';
      default:
    }
  };

  useEffect(() => {
    dispatch(getRecipesByTypeId(type));
  }, [dispatch, type]);

  return (
    <section className="food-area my-4">
      <div className="container">
        <div>
          <h1 className="type-name text-center">{renderHeading()}</h1>
        </div>
        <nav>
          <ul className="nav justify-content-center mt-4">
            <li
              className="nav-item name-style"
              onClick={() => setType(TYPE.AIRFRYER)}
            >
              <span
                to="Air Fryer"
                className={
                  type === TYPE.AIRFRYER ? 'active nav-link' : 'nav-link'
                }
              >
                <img
                  src={airfryer}
                  alt="foodIcon"
                  width="55px"
                  className="mr-2"
                />
                Air Fryer
              </span>
            </li>
            <li
              className="nav-item name-style"
              onClick={() => setType(TYPE.JUICE)}
            >
              <span
                to="Juice"
                className={type === TYPE.JUICE ? 'active nav-link' : 'nav-link'}
              >
                <img src={drink} alt="foodIcon" width="35px" className="mr-2" />
                Juice
              </span>
            </li>
            <li
              className="nav-item name-style"
              onClick={() => setType(TYPE.NUTMILK)}
            >
              <span
                to="Nut Milk"
                className={
                  type === TYPE.NUTMILK ? 'active nav-link' : 'nav-link'
                }
              >
                <img
                  src={nutmilk}
                  alt="foodIcon"
                  width="35px"
                  className="mr-2"
                />
                Nut Milk
              </span>
            </li>
          </ul>
        </nav>

        <div className="row my-5">
          {recipes.map((food, index) => (
            <FoodItem food={food} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Types;
