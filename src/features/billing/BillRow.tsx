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
