import React from 'react';
import style from './style.module.css';

const LoadingSpinner = () => {
  return (
    <div className={style.backdrop}>
      <div className={style.container}>
        <div className={style['lds-roller']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
