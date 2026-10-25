
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { products as initialProducts } from "../data/product";
import type { Product } from "../types/Product";

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const savedProducts = localStorage.getItem("jshop-products");

      if (savedProducts) {
        const parsedProducts: unknown = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          return parsedProducts as Product[];
        }
      }
    } catch (error) {
      console.error("Could not load saved Jshop products:", error);
    }

    return initialProducts;
  });

  useEffect(() => {
    try {
      localStorage.setItem("jshop-products", JSON.stringify(products));
    } catch (error) {
      console.error("Could not save Jshop products:", error);
    }
  }, [products]);

  function addProduct(product: Product) {
    setProducts((currentProducts) => [product, ...currentProducts]);
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider.");
  }

  return context;
}