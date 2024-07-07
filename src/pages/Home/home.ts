import { NavigateTo } from '../../Router';
import './home.css';

export function Home() {
  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
        <div class="home-container">
            <img class="home-logo" src="/public/logo.webp">
            <h1>Tienda Riwí🪙</h1>
            <button class="home-btn">Bienvenido</button>
        </div>
    `;
  const $homeBtn = document.querySelector('.home-btn') as HTMLButtonElement;
  $homeBtn.addEventListener('click', () => {
    NavigateTo('/products');
  });
}
