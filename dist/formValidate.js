function validateForm() {
    var x = document.forms["sayHello"]["fname"].value;
    var y = document.forms["sayHello"]["email"].value;
    var z = document.forms["sayHello"]["message"].value;
    if (x == "") {
      alert("Please i would love to know your name");
      return false;
    }
    if (y == "") {
    alert("Please input your Email");
    return false;
    }
    if (z == "") {
    alert("Please write a message");
    return false;
    }
  }