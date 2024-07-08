import { coin } from '../../helpers/coin';
import { NavigateTo } from '../../Router';
import './home.css';

export function Home() {
  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
        <div class="home-container">
            <img class="home-logo">
            <div class="home-title">
              <h1>Tienda Riwí</h1>
              ${coin}
            </div>
            <button class="home-btn">Bienvenido</button>
        </div>
    `;
  const $homeBtn = document.querySelector('.home-btn') as HTMLButtonElement;
  $homeBtn.addEventListener('click', () => {
    NavigateTo('/products');
  });
}
