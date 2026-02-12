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
