//   Chapter 46, 48 (Events) 


// QUESTION NO 1

// function alertbutton() {
//     var onclick = document.getElementById("onclick");
//     alert("Hello User")
// }


// QUESTION NO 2

// function hideElement() {
//     var elementToHide = document.getElementById("elementToHide");
//     elementToHide.style.display = "none";}



// QUESTION NO 3

// var link = document.getElementById('colorChangeLink');

// var originalColor = '#000'; 
// var hoverColor = '#f00';    

// link.addEventListener('mouseenter', () => {
//     link.style.color = hoverColor;
// });

// link.addEventListener('mouseleave', () => {
//     link.style.color = originalColor;
// });


// QUESTION NO 4
// var scrollToTopLink = document.getElementById('scrollToTopLink');

// scrollToTopLink.addEventListener('click', () => {
    
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' 
//     });
// });






// QUESTION NO 5

// var playSoundLink = document.getElementById('playSoundLink');

// var sound = document.getElementById('sound');

// playSoundLink.addEventListener('click', () => {sound.play();
// });


// QUESTION NO 6
// var openNewWindowLink = document.getElementById('openNewWindowLink');

// openNewWindowLink.addEventListener('click', () => {
//         window.open(" https://www.youtube.com");
// });



// QUESTION NO 7
// function greet(){
//     alert("Succesfully Click The Button ")
    
// }




// QUESTION NO 8
// function hover(){
// }




// QUESTION NO 9


// var playSoundbutton = document.getElementById('playSoundbutton');

// var sound = document.getElementById('sound');

// playSoundbutton.addEventListener('click', () => {sound.play();
// });

// QUESTION NO 10

// function mouseover(){
//     alert("Successfully Moved The Cursor")
// }





// QUESTION  NO 11

// function hideElement() {
//     var elementToHide = document.getElementById("elementToHide");
//     elementToHide.style.display = "none";}




// QUESTION NO 12


// Chapter 49, 50 (Reading and Setting field values)

//  QUESTION NO 1

//  function login() {
//         var name = document.getElementById("name");
//         var email = document.getElementById("email");
    
//             console.log(name.value)
//             console.log(email.value)
//         }
        

//   QUESTION NO 2


// var myCheckbox = document.getElementById("myCheckbox");

// var submitButton = document.getElementById("submitButton");

// submitButton  
// // .addEventListener("click", () => {
//     var checkboxValue = myCheckbox.checked;
   
// console.log("Checkbox value:", checkboxValue)
// // });





// QUESTION NO 3

// function readCheckboxValue() {
//     var checkbox = document.getElementById("checkbox");
//     var checkboxValue = checkbox.checked;

//     console.log("Checkbox value:", checkboxValue);
// }






// var maritalStatusCheckbox = document.getElementById('maritalStatus');

// var setStatusButton = document.getElementById('setStatusButton');

// var statusInput = document.getElementById('status');

// setStatusButton.addEventListener('click', () => {
//    var married = maritalStatusCheckbox.checked;

//     if (!married) {
//         statusInput.value = 'available';
//     } else {
//         statusInput.value = ''; 
//      }
// });



// QUESTION NO 5

// function setStatus() {
   
//     var maritalStatus = document.getElementById("maritalStatus").value;

//     var statusField = document.getElementById("status");

//     if (maritalStatus === "false") {
//         statusField.value = "Available";
//     } else {
//         statusField.value = "Status";
//     }
// }

// var submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", setStatus);




// QUESTION NO 6

// function fillInput() {
//     var myInput = document.getElementById('myInput');

//     var defaultString = "Please Fill This Field";

//     if (myInput.value === "") {
//         myInput.value = defaultString;
//     }


// if (myInput.value != "") {
//     alert("Please Input The Required Field") ;
// }
// }






// QUESTION NO 7




