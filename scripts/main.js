var myImage = document.querySelector('img');

myImage.onclick = function ()　{
    "use strict";
    var mySrc = myImage.getAttribute('src');
    if　(mySrc　===　'images/%E3%83%AA%E3%82%AB.jpg') {
        myImage.setAttribute('src', 'images/gyunyuprin.jpg');
    } else {
        myImage.setAttribute('src', 'images/%E3%83%AA%E3%82%AB.jpg');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
    "use strict";
    setUserName();
    
};