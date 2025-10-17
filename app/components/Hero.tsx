import Image from "next/image";
export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-white/50"></div>
      <div className="flex items-center justify-between w-2/3 mt-70 z-20">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" alt="Hero Image" width={150} height={150} />
          <div>
            <h2 className="text-2xl font-semibold">
              BATANGAS STATE UNIVERSITY
            </h2>
            <h3 className="text-md font-semibold text-red-600">
              The National Engineering University
            </h3>
            <h4 className="font-light text-gray-800">CICS - Mabini Campus</h4>
          </div>
        </div>
        <div className="text-red-600 text-xl font-bold">
          <h3>Leading Innovation</h3>
          <h3>Transforming Lives</h3>
          <h3>Building The Nation</h3>
        </div>
      </div>
    </section>
  );
}
