export const handleUpdateRecipeData = (curRecipe, updateRecipe) => {
  const data = { ...updateRecipe };
  for (let i = 0; i < curRecipe.ingredients.length; i++) {
    let flag = 0;
    const item = curRecipe.ingredients[i];
    for (let j = 0; j < updateRecipe.ingredients.length; j++) {
      const updateItem = updateRecipe.ingredients[j];
      if (
        updateItem?.id_ingredient &&
        item.id_ingredient === updateItem?.id_ingredient
      ) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      data.ingredients.push({ id_ingredient: item.id_ingredient });
    }
  }

  for (let m = 0; m < curRecipe.directions.length; m++) {
    let flag = 0;
    const item = curRecipe.directions[m];
    for (let n = 0; n < updateRecipe.directions.length; n++) {
      const updateItem = updateRecipe.directions[n];
      if (
        updateItem?.id_direction &&
        item.id_direction === updateItem?.id_direction
      ) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      data.directions.push({ id_direction: item.id_direction });
    }
  }

  return data;
};
