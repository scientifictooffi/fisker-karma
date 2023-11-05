function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }




  
document.getElementById("removeBtn").addEventListener("click", function(){
    var removeCard = document.getElementById("removeCard");
    if (removeCard){
      removeCard.parentNode.removeChild(removeCard);
    }
  });


  document.getElementById("removeBtn1").addEventListener("click", function(){
    var removeCard1 = document.getElementById("removeCard1");
    if (removeCard1){
      removeCard1.parentNode.removeChild(removeCard1);
    }
  });