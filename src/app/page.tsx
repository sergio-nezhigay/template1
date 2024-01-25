import Test from "@/components/Hero";
import Hero from "@/sections/Hero";
import { TSections } from "@/src/types";

export default function Home() {
  let abc: TSections;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Hero />
        <h1 className="text-black">Template1</h1>
        <Test />
        <p className="font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          totam a voluptatem autem minus deleniti, suscipit amet, incidunt illum
          ab reprehenderit in perspiciatis numquam eligendi? Vitae ut numquam
          autem. A?
        </p>
      </div>
    </main>
  );
}
