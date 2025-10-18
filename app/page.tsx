import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Area from "@/components/Area";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Info />
        <div className="h-20 bg-[#BE3A37]"></div>
        <Area />
      </main>
      <Footer />
    </>
  );
}
