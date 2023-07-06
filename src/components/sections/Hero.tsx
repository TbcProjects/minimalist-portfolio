export default function Hero({ data }: { [key: string]: unknown }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
