import { CartProvider } from "../contexts/CartContext";
import { useCart } from "../contexts/CartContext";

export const Header = () => {
  const { cart } = useCart();
  return (
    <header className="w-full flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white shadow-lg">
      <div className="flex items-center gap-3">
        <span className="text-3xl font-extrabold tracking-tight drop-shadow-lg">
          Catálogo de Compras
        </span>
      </div>
      <div className="ml-auto">
        <div className="bg-white text-blue-600 px-5 py-2 rounded-full shadow-lg cursor-pointer transition hover:bg-blue-50 hover:scale-105 font-semibold">
            {cart.length}
        </div>
      </div>
    </header>
  );
};