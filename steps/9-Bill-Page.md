src/features/billing/
  BillPage.tsx
  BillRow.tsx
  PaymentSelect.tsx

mkdir src\features\billing

type nul > src\features\billing\BillPage.tsx & type nul > src\features\billing\BillRow.tsx & type nul > src\features\billing\PaymentSelect.tsx

BillRow.tsx

```
import { Product } from "@/features/products/types";

type Props = {
  products: Product[];
  onChange: (total: number) => void;
};

export function BillRow({ products, onChange }: Props) {
  function handleProductSelect(name: string) {
    const p = products.find(x => x.name === name);
    if (p) onChange(p.price);
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <input
        list="products"
        placeholder="Type item"
        onChange={e => handleProductSelect(e.target.value)}
        className="border p-2"
      />

      <datalist id="products">
        {products.map(p => (
          <option key={p.id} value={p.name} />
        ))}
      </datalist>

      <input
        type="number"
        placeholder="Qty"
        className="border p-2"
      />

      <input
        placeholder="Price"
        className="border p-2 bg-gray-100"
        readOnly
      />
    </div>
  );
}

```

PaymentSelect.tsx:

```
type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function PaymentSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border p-2"
    >
      <option>Cash</option>
      <option>UPI</option>
      <option>Card</option>
    </select>
  );
}

```

BillPage.tsx

```

import { useState, useMemo } from "react";
import { PaymentSelect } from "./PaymentSelect";
import { Product } from "@/features/products/types";

const mockProducts: Product[] = [
  { id: "1", name: "Rice", unit: "1kg", price: 40 },
  { id: "2", name: "Water Can", unit: "20L", price: 30 },
  { id: "3", name: "Potato", unit: "1kg", price: 30 },
];

type Line = {
  id: string;
  product?: Product;
  qty: number;
};

export function BillPage() {
  const [lines, setLines] = useState<Line[]>([
    { id: crypto.randomUUID(), qty: 1 },
  ]);

  const [payment, setPayment] = useState("Cash");

  function updateLine(id: string, patch: Partial<Line>) {
    setLines(prev =>
      prev.map(l => (l.id === id ? { ...l, ...patch } : l))
    );
  }

  function addRow() {
    setLines(prev => [...prev, { id: crypto.randomUUID(), qty: 1 }]);
  }

  const total = useMemo(() => {
    return lines.reduce((sum, l) => {
      if (!l.product) return sum;
      return sum + l.product.price * l.qty;
    }, 0);
  }, [lines]);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Billing</h1>

      {lines.map(line => (
        <div key={line.id} className="grid grid-cols-3 gap-3">

          <input
            list="products"
            placeholder="Item"
            className="border p-2"
            onChange={e => {
              const p = mockProducts.find(
                x => x.name.toLowerCase() === e.target.value.toLowerCase()
              );
              updateLine(line.id, { product: p });
            }}
          />

          <input
            type="number"
            value={line.qty}
            onChange={e =>
              updateLine(line.id, { qty: Number(e.target.value) })
            }
            className="border p-2"
          />

          <input
            readOnly
            value={line.product ? line.product.price : ""}
            className="border p-2 bg-gray-100"
          />

        </div>
      ))}

      <datalist id="products">
        {mockProducts.map(p => (
          <option key={p.id} value={p.name} />
        ))}
      </datalist>

      <button
        onClick={addRow}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Row
      </button>

      <div className="text-xl font-bold">
        Total: ₹{total}
      </div>

      <PaymentSelect value={payment} onChange={setPayment} />

    </div>
  );
}

```

Add Route: 

<Route path="/bill" element={<BillPage />} />
