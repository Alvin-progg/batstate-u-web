import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Area from "@/app/components/Area";
import Footer from "@/app/components/Footer"; 

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
