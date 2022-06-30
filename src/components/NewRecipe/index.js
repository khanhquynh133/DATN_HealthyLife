import React from 'react';
import { FORM_TYPE } from '../../core/constants';
import RecipeForm from '../RecipeForm';

const NewRecipt = () => {
  return (
    <div>
      <h2>New recipe</h2>
      <RecipeForm formType={FORM_TYPE.CREATE} />
    </div>
  );
};

export default NewRecipt;
