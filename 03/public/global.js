//  ---------------------------------------------------------------------------

var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var link_to_use = this;
  
  var req = new XMLHttpRequest();

  req.open("get", link_to_use.getAttribute("href"));

  req.addEventListener("load", function(){
    link_to_use.innerHTML = req.response;
  });

  req.send();
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);