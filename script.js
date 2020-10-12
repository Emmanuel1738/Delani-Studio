function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var key = "http://eepurl.com/gIAK4r";
    if (name == "") {
      alert("please fill in your name");
      return false;
    } else if (email == "") {
      alert("Please fill in your name and email");
      return false;
    } else {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
}
$(document).ready(function() {
  $("#designImage").click(function() {
    $("#design").show("2000");
    $("#designImage").hide("slow")
  });
  $("#design").click(function() {
    $("#designImage").show("2000");
    $("#design").hide("slow")
  });
  $("#developImage").click(function() {
    $("#development").show("2000");
    $("#developImage").hide("slow")
  });
  $("#development").click(function() {
    $("#developImage").show("2000");
    $("#development").hide("slow")
  });