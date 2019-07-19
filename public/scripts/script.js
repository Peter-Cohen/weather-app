/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// Initialize dropdown menu
// From Materialize docs
// https://materializecss.com/dropdown.html#initialization
document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.dropdown-trigger');
  const instances = M.Dropdown.init(elems);
});


// Clear input field
const clearField = (e) => {
  console.log('Clear field');
  document.querySelector('#search').value = '';
};

// Submit form
const submit = (e) => {
  console.log('Submit');
};


// Load event listeners
document.querySelector('#delete-btn').addEventListener('click', clearField);
document.querySelector('#submit-btn').addEventListener('click', submit);
