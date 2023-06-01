// Function to handle button clicks
function handleButtonClick(personId) {
  var personInfo = "";

  // Check the personId and assign the respective information
  if (personId === 0) {
    personInfo = "loic.schillings@student.pxl.be";
  } else if (personId === 1) {
    personInfo = "Joos.Vanhees@student.pxl.be";
  } else if (personId === 2) {
    personInfo = "maurodebruyn@hotmail.com";
  }

  // Display the person's information next to the button
  var personInfoElement = document.getElementById("person-info" + (personId + 1));
  personInfoElement.innerHTML = personInfo;
  personInfoElement.style.display = "inline-block";
}

// Attach click event handlers to the buttons
document.getElementById("btn-person1").addEventListener("click", function() {
  handleButtonClick(0);
});

document.getElementById("btn-person2").addEventListener("click", function() {
  handleButtonClick(1);
});

document.getElementById("btn-person3").addEventListener("click", function() {
  handleButtonClick(2);
});
