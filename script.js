function showMenu() {
 document.getElementById('menuDown').classList.toggle("show");
}

window.onclick = function(e) {
 if (!e.target.matches('.dropdownbutton')) {
  var menuDown = document.getElementById('menuDown');
    if (menuDown.classList.contains('show')) {
     menuDown.classList.remove('show');
    }
 }
}
