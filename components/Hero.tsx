import Image from "next/image";
export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4">
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
      <div className="flex items-center justify-between w-full max-w-5xl z-20 flex-col md:flex-row gap-8 md:gap-12 md:mt-70">
        <div className="flex items-center gap-4 md:gap-6 justify-center flex-col sm:flex-row">
          <Image 
            src="/logo.png" 
            alt="Hero Image" 
            width={150} 
            height={150} 
            priority={true}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              BATANGAS STATE UNIVERSITY
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-red-600">
              The National Engineering University
            </h3>
            <h4 className="text-sm md:text-base font-light text-gray-800">CICS - Mabini Campus</h4>
          </div>
        </div>
        <div className="text-red-600 text-base sm:text-lg md:text-xl font-bold text-center md:text-left">
          <h3>Leading Innovation</h3>
          <h3>Transforming Lives</h3>
          <h3>Building The Nation</h3>
        </div>
      </div>
    </section>
  );
}