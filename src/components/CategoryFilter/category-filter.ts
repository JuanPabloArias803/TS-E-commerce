import './category-filter.css';
import { Category } from '../../helpers/interfaces';

export function CategoryFilter() {
  return `
        <div class="filter-container">
            <form>
                <label>Filtrar por:</label>    
                <select class="category-filter">
                    <option value="all">Todos los productos</option>
                    <option value="${Category.Electronics}">Electrónica</option>
                    <option value="${Category.Jewelery}">Joyería</option>
                    <option value="${Category.MenSClothing}">Ropa masculina</option>
                    <option value="${Category.WomenSClothing}">Ropa femenina</option>
                </select>
            </form>
        </div>
    `;
}
