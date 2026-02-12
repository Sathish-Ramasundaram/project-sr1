create 
src/features/products/
  StorePage.tsx
  ProductForm.tsx
  ProductList.tsx
  ProductItem.tsx
  types.ts

type nul > src\features\products\StorePage.tsx
type nul > src\features\products\ProductForm.tsx
type nul > src\features\products\ProductList.tsx & type nul > src\features\products\ProductItem.tsx
type nul > src\features\products\types.ts

types.ts

```
export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number;
};

```

ProductItem.tsx

import { Product } from "./types";

type Props = {
  product: Product;
  onDelete: (id: string) => void;
};

export function ProductItem({ product, onDelete }: Props) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow">
      <div>
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">
          {product.unit} — ₹{product.price}
        </p>
      </div>

      <button
        onClick={() => onDelete(product.id)}
        className="text-red-600 font-medium"
      >
        Delete
      </button>
    </div>
  );
}

ProductList.tsx
```
import { Product } from "./types";
import { ProductItem } from "./ProductItem";

type Props = {
  products: Product[];
  onDelete: (id: string) => void;
};

export function ProductList({ products, onDelete }: Props) {
  return (
    <div className="space-y-3">
      {products.map(p => (
        <ProductItem key={p.id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}

```

ProductForm.tsx:

```

import { useState } from "react";

type Props = {
  onAdd: (name: string, unit: string, price: number) => void;
};

export function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevent page reload

    if (!name || !unit || !price) {
      alert("All fields required");
      return;
    }

    onAdd(name, unit, Number(price));

    setName("");
    setUnit("");
    setPrice("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Item name"
        className="border p-2 w-full"
      />

      <input
        value={unit}
        onChange={e => setUnit(e.target.value)}
        placeholder="Unit (1kg / 1pc)"
        className="border p-2 w-full"
      />

      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="border p-2 w-full"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}

```
StorePage.tsx

```
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

```

Add Route: 
import { StorePage } from "@/features/products/StorePage";

<Route path="/store" element={<StorePage />} />
