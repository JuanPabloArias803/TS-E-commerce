import { coin } from '../../helpers/coin';
import './card.css';

export function Card(
  src: string,
  id: number,
  title: string,
  price: number,
  rate: number,
  count: number
) {
  return `
        <article class="card" id="${id}">
            <header>
                <div class="card-img">
                    <img src="${src}" class="card-img">
                </div>
            </header>
            <div class="card-description">
                <h3>${title.substring(0, 22)}...</h3>
                <strong>${price} Riwí${coin}</strong>
                <p>Calificación: ${rate}⭐ (${count} reseñas)</p>
            </div>
        </article>
    `;
}
