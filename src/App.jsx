import { Header } from './components/Header.jsx';
import { ProductCatalog } from './components/ProductCatalog.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductCatalog />
    </CartProvider>
  )
}

export default App
