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
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
