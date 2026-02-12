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
