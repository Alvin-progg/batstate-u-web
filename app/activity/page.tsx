import Image from "next/image";
export default function Activity() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-red w-full h-30 items-center justify-center flex py-10">
        <h1 className="text-white font-bold text-3xl">Program of Activities</h1>
      </div>

      <div>
        <div>
            <div className="flex justify-center w-fit mx-auto">
                <Image
                src="/act22.png"
                alt="Activity Image"
                width={197}
                height={219}
                ></Image>
                <Image 
                src="/zoom.png"
                alt="Activity Image"
                width={96}
                height={50}
                ></Image>
            </div>
        </div>
      </div>
      <section className=" text-white  flex justify-center items-center "></section>
    </main>
  );
}
