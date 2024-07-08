import './board.css';
import { NavigateTo } from '../../Router';
import { Product, Category, Rating } from '../../helpers/interfaces';
import { Card } from '../../components/ProductCard/card';
import { CategoryFilter } from '../../components/CategoryFilter/category-filter';
import { fetchProducts } from '../../helpers/fetch';
import { coin } from '../../helpers/coin';
import "/public/logo.png";

export async function Board() {
  let products: Product[] = await fetchProducts();
  let child: string = '';
  const renderProducts = () => {
    child = '';
    products.forEach((product) => {
      child += `${Card(
        product.image,
        product.id,
        product.title,
        product.price,
        product.rating.rate,
        product.rating.count
      )}`;
    });
  };
  const eventHandler = () => {
    document.querySelectorAll('.card').forEach((product) => {
      product.addEventListener('click', () => {
        NavigateTo(`/products/product-info?id=${product.id}`);
      });
    });
  };
  renderProducts();
  const $root = document.getElementById('root') as HTMLDivElement;
  $root!.innerHTML = `
        <div class="board-container">
            <img class="home-logo" src="/public/logo.png">
            <p class="board-title">Canjea tus Riwí${coin} por premios!</p>
            ${CategoryFilter()}
            <div class="board-products">
                ${child}
            </div>
        </div>
    `;
  eventHandler();
  const $categoryFilter = document.querySelector(
    '.category-filter'
  ) as HTMLSelectElement;
  $categoryFilter.addEventListener('change', async () => {
    const $boardProducts = document.querySelector(
      '.board-products'
    ) as HTMLDivElement;
    if ($categoryFilter.value === 'all') {
      products = await fetchProducts();
    } else {
      products = await fetchProducts(
        `https://fakestoreapi.com/products/category/${$categoryFilter.value}`
      );
    }
    renderProducts();
    $boardProducts.innerHTML = `
            ${child}
        `;
    eventHandler();
  });
}
