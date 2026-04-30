export interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: Readonly<InfoRowProps>) {
  return (
    <div className="flex flex-row justify-between py-0.5">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
