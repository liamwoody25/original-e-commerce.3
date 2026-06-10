const productBtn = document.querySelector('.item-btn');
const bagBtn = document.querySelector('.bi-bag');
const bagOffScreen = document.querySelector('.shopping-section');

function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable');
  }
}


productBtn.addEventListener('click', function(){
  
})

bagBtn.addEventListener('click', function(){
  displayBag()
})