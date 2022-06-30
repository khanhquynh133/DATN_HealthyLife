import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FORM_TYPE } from '../../core/constants';

const RecipeForm = (props) => {
  const { formType, recipe } = props;
  const defaultValues = recipe ? { ...recipe.recipe } : null;
  const { register, control, handleSubmit } = useForm({
    defaultValues,
  });
  console.log(recipe);

  const {
    fields: ingFileds,
    append: ingAppend,
    remove: ingRemove,
  } = useFieldArray({
    control,
    name: 'ingredients',
  });
  const {
    fields: dirFields,
    append: dirAppend,
    remove: dirRemove,
  } = useFieldArray({
    control,
    name: 'directions',
  });

  const onSubmit = (data) => {
    const {
      name,
      description,
      time,
      servings,
      image,
      ingredients,
      directions,
      typeName,
    } = data;
    const type = {
      typeName,
    };
    const recipe = {
      name,
      description,
      time,
      servings,
      image,
    };
    console.log({ type, recipe, ingredients, directions });
    switch (formType) {
      case FORM_TYPE.CREATE:
        // dispatch create
        break;
      case FORM_TYPE.UPDATE:
        // dispatch update
        break;
      default:
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input className="form-input" {...register('name')} />
        </div>
        <div className="form-label">
          <select {...register('typeName')}>
            <option value="AirFryer">AirFryer</option>
            <option value="Juice">Juice</option>
            <option value="NutMilk">NutMilk</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input {...register('description')} />
        </div>
        <div className="form-control">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input {...register('time')} />
        </div>
        <div className="form-control">
          <label htmlFor="servings" className="form-label">
            Servings
          </label>
          <input {...register('servings')} />
        </div>
        <div className="form-control">
          <label htmlFor="image" className="form-label">
            Images
          </label>
          <input {...register('image')} />
        </div>

        <div className="form-control">
          <p>Ingredients</p>
          <ul>
            {ingFileds.map((item, index) => {
              return (
                <li key={item.id}>
                  <input {...register(`ingredients.${index}.ingredient`)} />
                  <input {...register(`ingredients.${index}.amount`)} />
                  <input {...register(`ingredients.${index}.unit`)} />
                  <button type="button" onClick={() => ingRemove(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <section>
            <button
              type="button"
              onClick={() => {
                ingAppend();
              }}
            >
              append ingredient
            </button>
          </section>
        </div>

        <div className="form-control">
          <p>Directions</p>
          <ul>
            {dirFields.map((item, index) => {
              return (
                <li key={item.id}>
                  <input {...register(`directions.${index}.direction`)} />
                  <button type="button" onClick={() => dirRemove(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <section>
            <button
              type="button"
              onClick={() => {
                dirAppend();
              }}
            >
              append direction
            </button>
          </section>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default RecipeForm;
