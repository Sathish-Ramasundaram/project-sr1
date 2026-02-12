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
