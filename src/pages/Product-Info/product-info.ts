import './product-info.css';
import { NavigateTo } from '../../Router';
import { fetchProducts } from '../../helpers/fetch';
import { Product } from '../../helpers/interfaces';
import { coin } from '../../helpers/coin';

export async function ProductInfo() {
  const params = new URLSearchParams(window.location.search);
  const productID = params.get('id');
  try {
    const product: Product = await fetchProducts(
      `https://fakestoreapi.com/products/${productID}`
    );
    const $root = document.getElementById('root') as HTMLDivElement;
    $root!.innerHTML = `
      <div class="product-container">
        <div class="product-img">
          <img src="${product.image}">
        </div>
        <div class="product-info">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <strong>${product.price} Riwí${coin}</strong>
          <p>${product.rating.rate}⭐ <b>(${product.rating.count} reseñas)</b></p>
          <button class="home-btn">Comprar</button>
        </div>
      </div>
    `;
    const $buyBtn=document.querySelector(".home-btn") as HTMLButtonElement;
    $buyBtn.addEventListener("click",()=>{
      alert("Gracias por tu compra!");
      NavigateTo("/products");
    });
  } catch (error) {
    NavigateTo('/not-found');
  }
}
