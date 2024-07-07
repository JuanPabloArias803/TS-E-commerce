import './product-info.css';
import { NavigateTo } from '../../Router';
import { fetchProducts } from '../../helpers/fetch';
import { Product } from '../../helpers/interfaces';

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
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}">
                <strong>${product.price}</strong>
                <p>${product.rating.rate} <b>(${product.rating.count} reseñas)</b></p>
            </div>
        `;
  } catch (error) {
    NavigateTo('/not-found');
  }
}
