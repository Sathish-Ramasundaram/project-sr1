import { useState } from "react";
import { Product } from "./types";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

export function StorePage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "20L Water Can",
      unit: "1 pc",
      price: 30,
    },
    {
      id: "2",
      name: "Clinic Plus Shampoo",
      unit: "1 pc",
      price: 1,
    },
  ]);

  function addProduct(name: string, unit: string, price: number) {
    const newItem: Product = {
      id: crypto.randomUUID(),
      name,
      unit,
      price,
    };

    setProducts(prev => [newItem, ...prev]);
  }

  function deleteProduct(id: string) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      <h1 className="text-3xl font-bold">Store Items</h1>

      <ProductForm onAdd={addProduct} />

      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}
