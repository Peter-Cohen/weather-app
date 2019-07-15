// document.addEventListener('DOMContentLoaded', () => {
//   let elems = document.querySelectorAll('.dropdown-trigger');
//   let instances = M.Sidenav.init(elems);
// });

// var dropdowns = document.querySelectorAll('.dropdown-trigger')
// for (var i = 0; i < dropdowns.length; i++){
// 	M.Dropdown.init(dropdowns[i]);
// }

// From Materialize docs
// https://materializecss.com/dropdown.html#initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});










// M.AutoInit();