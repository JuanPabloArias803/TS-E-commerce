import './not-found.css';

export function NotFound() {
  const root = document.getElementById('root');
  root!.innerHTML = `
        <h2 class="not-found-message">404 Page Not Found</h2>
    `;
}
