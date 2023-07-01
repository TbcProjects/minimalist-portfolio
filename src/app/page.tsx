import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <div>
        <Link href="/portfolio">Click to view portfolio</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </main>
  );
}
