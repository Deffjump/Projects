(function() {
  var keys = document.getElementsByClassName("keys");
  //var operators = ['+','-','/','*','%'];
  var result = document.getElementById("resultcreen");

  for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(e) {
      addToScreen(e.target.value);
    });
  }

  var equalsTo = document.getElementById("equal");

  equalsTo.addEventListener("click", function() 
  {
    var temp = eval(result.value);
    result.value = temp;
  });

  function addToScreen(ats) {
    var str = result.value;
    var lastChar = str[str.length - 1];

    if (isNaN(lastChar) && isNaN(ats)) 
    {
    
    } 
    else 
    {
      str += ats;
    }

    if (ats === "AC") 
    {
      result.value = "";
    }
     else if (ats === "CE") 
    {
      var temp = result.value;
      var len = temp.length - 1;
      var newtemp = temp.substring(0, len);
      result.value = newtemp;
    } 
    else 
    {
      result.value = str;
    }
  }
})();
