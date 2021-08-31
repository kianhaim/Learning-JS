import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import paginationView from './view/paginationView.js';

// import icons from '../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
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
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // console.log(resultsView);
    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3) Render Results
    //console.log(model.state.search.results);
    //resultsView.render(model.state.search.results);

    resultsView.render(model.getSearchResultPage());

    // 4) Render init pagination buttons
    paginationView.render(model.state.search);
    //  console.log(model.getSearchResultPage(1));
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // console.log(goToPage);
  // Render  New Results
  resultsView.render(model.getSearchResultPage(goToPage));
  //  Render new pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
