import * as model from './model.js';
import recipeView from './view/recipeView.js';

// import icons from '../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const constrolRecipes = async function () {
  try {
    ////Getting the ID///////

    const id = window.location.hash.slice(1);

    //console.log(id);

    //guard
    if (!id) return;
    recipeView.renderSpinner();

    // 1 Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const init = function () {
  recipeView.addHandlerRender(constrolRecipes);
};

init();
