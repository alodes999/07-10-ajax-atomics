var finishLinks = document.getElementsByClassName("done_link");

var mark_task_done = function(event) {
  var link_to_use = this;
  
  var req = new XMLHttpRequest();
  
  req.open("get", link_to_use.getAttribute("href"));
  
  req.addEventListener("load", function(){    
    link_to_use.parentElement.classList.add("finished");
    var child_to_remove = link_to_use.parentNode.childNodes[1];
    link_to_use.parentNode.removeChild(child_to_remove);
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  finishLinks[i].addEventListener("click", mark_task_done)
}