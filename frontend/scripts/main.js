/*var myHeading=document.querySelector("h1");
myHeading.textContent="Hello world"
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };  
*/
var myImage=document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");


myImage.onclick=function() {
    var mySrc=myImage.getAttribute("src");
    if (mySrc==="frontend/images/stevejobs.png"){
        myImage.setAttribute("src","frontend/images/artworks-2yBgCOZyN8iw0x0P-yqtdOg-t1080x1080.png");
    } else{
        myImage.setAttribute("src", "frontend/images/stevejobs.png")
    }
}

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello dear, " + myName;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello dear, " + storedName;
  }

myButton.onclick = function () {
    setUserName();
  };
  