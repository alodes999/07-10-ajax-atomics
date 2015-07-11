var req = new XMLHttpRequest();

req.open("get", "/info1");

req.addEventListener("loadstart", function(){
  console.log("loadstart");
});

req.addEventListener("load", function(){
  if (this.response === "yes") {
    alert("Yay!")
  } else {
    alert("Aw, shucks!")
  }
});

req.send();
