console.log('Add validation!');

// Each field is required. If there is no user input in that field, mark it as invalid.
// invalid fields will turn red
function emptyFields() {
  //this function will review the whole document for empty fields
  //required fields: name, year, make, model, date, number of days, credit card, CVV and expiration date
  let form = document.querySelector('#parking-form');
  form.addEventListener("submit",funtion(event.preventDefault)})
  let name = document.querySelector("#name");
  let cyear = document.querySelector('#car-year');
  let cmake = document.querySelector('#car-make');
  let cmodel = document.querySelector('#car-model');
  let pdate = document.querySelector('#start-date');
  let amtdays = document.querySelector('#days');
  let cc = document.querySelector('#credit-card-field');
  let cCVV = document.querySelector('#cvv');
  let ccDate = document.querySelector('#expiration-date');


  if (customer.length === 0) {
    document.getElementById("name").style.backgroundColor = "red";
  }
  // red(customer);

}

emptyFields();


// DIRECTIONS: div element with class "input-field" that surrounds each form label and input is the element to change. You will add the "input-valid" or "input-invalid" class to this div.

//Change from WHITE to RED
function redTest(name) {
  let customername = document.getElementById("name");
  if (customername.length == 0) {
    //this makes the box red by itself but isnt working inside the function
    names.classList.remove("input-field input-valid");
  } else {
    //alert("Incomplete Form");
    names.classList.remove("input-field input-invalid");
  }

  return;
}

redTest();

// function red (field){
//   //field.classList.remove();
//   field.classList.add("input-invalid");
//   console.log(field.classList);

// }

// function change (){
//   let customerName = document.querySelectorAll(".input-field input-valid");
//   for (let names of customerName) {
//   names.addEventListener('click', function(){  
//   //names.classList.remove(".input-field input-valid")
//   names.classList.add("input-field input-invalid")
//   }
//   );
//   };
// }

// change();

//Goal is to select valid or invalid and possible make a function to do that
