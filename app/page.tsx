import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Area from "@/components/Area";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Area />
      </main>
      <footer className="flex items-center justify-center bg-red-500 h-50">
        <Footer />
      </footer>
    </>
  );
}
