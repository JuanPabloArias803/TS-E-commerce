import { NotFound } from '../pages/Not-found/not-found.js';
import { Home } from '../pages/Home/home.js';
import { Board } from '../pages/Board/board.js';
import { ProductInfo } from '../pages/Product-Info/product-info.js';

export const routes = {
  public: [
    { path: '/not-found', page: NotFound },
    { path: '/home', page: Home },
    { path: '/products', page: Board },
    { path: '/products/product-info', page: ProductInfo },
  ],
};
