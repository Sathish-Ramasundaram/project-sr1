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
