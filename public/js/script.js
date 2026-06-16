const bagBtn = document.querySelector('.bi-bag');
const bagOffScreen = document.querySelector('.shopping-section');
const productBtn = document.querySelectorAll('.item-btn');
const bagContainer = document.querySelector('.cart-content');

const products = [
  {
    name: 'Macbook',
    price: 899,
    image: './public/assets/images/pexels-dlxmedia-hu-maccbook.png',
    id: 1
  },
  // {
  //   name: 'Android',
  //   price: 399,
  //   image: './public/assets/imagesandrey-matveev-msartwatch-unsplash.png',
  //   id: 2
  // }
]

function addProduct(product, i) {


   product.id = 1

  let productCard = {
    [products.id]:products
  }

  console.log(products)
  
 


  const cardProduct = document.createElement('article');
  cardProduct.classList.add('product-card');

  const productName = document.createElement('h3');
  productName.classList.add('product-title')
  productName.innerText = products.name


  cardProduct.append(productName)
  bagContainer.appendChild(cardProduct)


 
}


function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
     bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable');
  }
} 

productBtn.forEach(function(btn, i){
  btn.addEventListener('click', function(){
    addProduct(products, i)
  })
})

bagBtn.addEventListener('click', function(){
  displayBag()
})