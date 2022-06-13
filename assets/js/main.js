const number = document.querySelectorAll('.number');
for (var i = number.length; i--;) number[i].addEventListener('click', choose);
function choose() {
  switch (this.value) {
    case "1":
      num = 'You selected 1 out of 5';
      break;
    case "2":
      num = 'You selected 2 out of 5';
      break;
    case "3":
      num = 'You selected 3 out of 5';
      break;
    case "4":
      num = 'You selected 4 out of 5';
      break;
    case "5":
      num = 'You selected 5 out of 5';
      break;

    default:
      num = 'You not selected';
  }
  document.getElementById("output-text").innerHTML = num;
}

function get(){
 let first_card = document.getElementById("next-card");
 first_card.classList.toggle("hide");
}