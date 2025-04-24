import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
      <div className="bg-blue-800  text-center space-y-6 rounded-lg p-12">
        <h1 className="text-4xl font-bold">Counter</h1>
        <Counter />
      </div>
    </main>
  );
}
