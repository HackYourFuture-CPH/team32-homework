import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function About() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="text-lg">This is the about page of our application.</p>
        <button>
            <Link href="/">Go to Home</Link>
        </button>

    
      </main>
      <footer>
        <p>© 2023 Your Company</p>
      </footer>
    </div>
  );
}

const QueryDisplay = () =>{
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || 'Guest';
    const age = searchParams.get('age') || 'unknown';
    const aamount = searchParams.get('amount') || '0';
    return (
        <div>
            <h2>Query Parameters</h2>
            <p>Product Name : {name}</p>
            <p>Product Age : {age}</p>
            <p>Product Amount : {aamount}</p>
        </div>
    );

}