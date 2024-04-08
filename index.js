
function fun(btn) {
    var innerTexter = btn.innerText;
    console.log(innerTexter)


   if (innerTexter.toLowerCase() === "c") {
    document.getElementById("Inputbox").value = " ";}

    else if (innerTexter === "<=") {
        var element = document.getElementById("Inputbox").value;
        document.getElementById("Inputbox").value = element.slice(0, -1);}
        else if (innerTexter === "=") {
            var result = eval(document.getElementById("Inputbox").value);
            document.getElementById("Inputbox").value = result;}
            else {
                document.getElementById("Inputbox").value += innerTexter;
              }

 }

 function stopalfa(event){
    var x=event.keyCode
    if(x<48||x>57){
      event.preventDefault();
     alert('Only numbers are allowed.')
    }
  }
