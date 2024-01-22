async function phone (){
    const response = await fetch("https://dummyjson.com/product");
    const data =await response.json();
    const products= data.products
    
    const items=products.map( function(product){

    return `
  
    <div class="items">
  <span> ${product.id} </span>
  <h3 > ${product.title}</h3>
  <span  class="price">   ${product.price}</span>
   <img src=" ${product.thumbnail}" />
  <span> ${product.rating}</span>
  <span> ${product.stock}</span>
  <span> ${product.brand}</span>
  </div>
  `
    


    }).join('')
    document.querySelector(".data").innerHTML=items;
}
phone();