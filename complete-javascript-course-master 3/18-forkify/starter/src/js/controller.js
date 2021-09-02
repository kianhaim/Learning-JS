import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import paginationView from './view/paginationView.js';
import bookmarksView from './view/bookmarksView.js';
import addRecipeView from './view/addRecipeView.js';

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

    //0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultPage());

    //1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //2) Loading Recipe
    await model.loadRecipe(id);

    //3) Rendering Recipe

    recipeView.render(model.state.recipe);
    // test run
    //controlServings();
  } catch (err) {
    recipeView.renderError();
    console.error(err);
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
const controlServings = function (newServings) {
  // Update the recipe servings(in the state)

  model.updateServings(newServings);

  // Update the recipeView
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //Update Recipe view
  recipeView.update(model.state.recipe);
  console.log(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
  //console.log(newRecipe);
  // Upload the new recipe data
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
