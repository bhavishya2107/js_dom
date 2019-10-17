//Select the section with an id of container without using querySelector.
var sectionSelect = document.getElementById('container');


//Select the section with an id of container using querySelector.
var sectionSelectByQuerySelector = document.querySelector('#container');


//Select all of the list items with a class of "second".
var allListItems = document.querySelectorAll('.second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
var thirdListInOL = document.querySelector('ol > .third');


//Give the section with an id of container the text "Hello!".
sectionSelect.innerText = "Hello!";


//Add the class main to the div with a class of footer.
var divWithFooterClass = document.querySelector('.footer');
divWithFooterClass.classList.add('main');


//Remove the class main on the div with a class of footer.
divWithFooterClass.classList.remove('main');

//Create a new li element.
var newLi = document.createElement('li');


//Give the li the text "four".
newLi.innerText = "four";



//Append the li to the ul element.
var ul = document.querySelector('ul');
ul.append(newLi);



//Loop over all of the list inside the ol tag and give them a background color of "green".
var liInsideUl = document.querySelectorAll('ul > li');
liInsideUl.forEach((li)=> {
    li.style.backgroundColor = "green";

})


//Remove the div with a class of footer.
var removeDiv = document.querySelector('.footer');
removeDiv.parentNode.removeChild('.footer');
