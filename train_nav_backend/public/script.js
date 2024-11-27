function responsiveMenu() {
    var element = document.getElementById("navigation");
    if (element.className === "main_nav") {
        element.className += " responsive";
    } else {
        element.className = "main_nav";
    }
  }