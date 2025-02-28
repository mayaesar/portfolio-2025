import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-12 justify-between items-center font-theme font-bold">
      <div className="hidden md:block w-full font-bold text-5xl text-gray-800 dark:text-gray-100 md:leading-[3.5rem]">
        <p>Hi,</p>
        <p>My name is</p>
        <p className="bg-gradient-to-r from-pink-500 to-cyan-400 inline-block text-transparent bg-clip-text">
          Maya Esar
        </p>
        <p>I'm a Developer</p>
      </div>
      <div className="block md:hidden text-3xl font-semibold">
        <span>Hi, My name is </span>
        <span className="bg-gradient-to-r from-pink-500 to-cyan-400 inline-block text-transparent bg-clip-text">
          Maya Esar
        </span>
        <span> I'm a Web Developer</span>
      </div>
      <div className="bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full p-1 md:p-2">
        <div className="rounded-full w-40 md:w-[250px] aspect-square relative">
          <Image
            src="/me.jpeg"
            fill={true}
            alt="Picture of me"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
