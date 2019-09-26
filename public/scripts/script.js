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
  const query = document.querySelector('#search').value;
  console.log('in script.js, query = ', query);                         ///////
  console.log('in script.js, typeof query = ', typeof query);           ///////
  // function postRequest(url, data) {
  //   return fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //   })
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));
  // }

  // postRequest('/', { search: query })
  //   .then(data => console.log('POST successful')) // Result from the `response.json()` call
  //   .catch(error => console.error(error));

  fetch('/', {
    method: 'POST',
    body: JSON.stringify({ search: query }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log('POST successful', res);
    })
    .catch(error => console.error(error));
  console.log('after fetch');
};

// Load event listeners
document.querySelector('#delete-btn').addEventListener('click', clearField);
document.querySelector('#submit-btn').addEventListener('click', submit);
