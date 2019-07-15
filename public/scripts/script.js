document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
});

var dropdowns = document.querySelectorAll('.dropdown-trigger')
for (var i = 0; i < dropdowns.length; i++){
	M.Dropdown.init(dropdowns[i]);
}

// M.AutoInit();