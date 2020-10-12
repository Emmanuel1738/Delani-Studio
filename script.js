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
  $("#productImage").click(function() {
    $("#product").show("2000");
    $("#productImage").hide("slow")
  }); 
  $("#product").click(function() {
    $("#productImage").show("2000");
    $("#product").hide("slow")
  });
  $("#work1").hover(
    function() {
      $("#txt1").show("");
    },
    function() {
      $("#txt1").hide("");
    }
  );
  $("#work2").hover(
    function() {
      $("#txt2").show("");
    },
    function() {
      $("#txt2").hide("");
    }
  );
  $("#work3").hover(
    function() {
      $("#txt3").show("");
    },
    function() {
      $("#txt3").hide("");
    }
  );
  $("#work4").hover(
    function() {
      $("#txt4").show("");
    },
    function() {
      $("#txt4").hide("");
    }
  );
  $("#work5").hover(
    function() {
      $("#txt5").show("");
    },
    function() {
      $("#txt5").hide("");
    }
  );
  $("#work6").hover(
    function() {
      $("#txt6").show("");
    },
    function() {
      $("#txt6").hide("");
    }
  );
  $("#work7").hover(
    function() {
      $("#txt7").show("");
    },
    function() {
      $("#txt7").hide("");
    }
  );
  $("#work8").hover(
    function() {
      $("#txt8").show("");
    },
    function() {
      $("#txt8").hide("");
    }
  );
});
