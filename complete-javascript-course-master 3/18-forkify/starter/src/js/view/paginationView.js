import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    // Compute how many pages in a search result
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(numPages);
    // Page 1, and the are other pagers

    if (currentPage === 1 && numPages > 1)
      return `<button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;

    // Last page
    if (currentPage === numPages && numPages > 1)
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;

    // other pagers

    if (currentPage < numPages) {
      return `<button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
         <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
         </svg>
        </button>
        
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
             <svg class="search__icon">
                 <use href="${icons}#icon-arrow-left"></use>
            </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`;
    }
    // Page 1, and the are NO other pagers
    return '';
  }
}

export default new PaginationView();
