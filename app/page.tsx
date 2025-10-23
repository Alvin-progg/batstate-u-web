import Hero from "@/components/Hero";
import Area from "@/components/Area";
import Info from "@/components/Info";
export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <div className="h-15 bg-red"></div>
      <Area />
    </>
  );
}
