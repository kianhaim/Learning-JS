import * as model from './model.js';
import recipeView from './view/recipeView.js';

// import icons from '../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(err);
  }
};

constrolRecipes();
////////////// Event listener for the Hash /////////////
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, constrolRecipes)
);

// window.addEventListener('hashchange', constrolRecipes);
// window.addEventListener('load', constrolRecipes);
