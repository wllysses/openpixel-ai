import Form from "@/components/Form";
import Result from "@/components/Result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className='text-6xl text-zinc-200 font-bold animate-fade-left'>OpenPixel AI</h1>
      <Form />
      <Result />
    </main>
  );
}
