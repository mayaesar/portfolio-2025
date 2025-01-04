import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
      <main className="flex-1 flex flex-col w-full max-w-screen-lg mx-auto px-4">
          <Header/>
          <div className="min-h-dvh flex flex-col justify-center gap-24 py-32">
              <Hero/>
              <About/>
          </div>
          <div className="min-h-dvh flex flex-col justify-center">
              <Projects/>
          </div>
          <div className="min-h-dvh flex flex-col justify-center">
              <TechStack />
          </div>
      </main>
  );
}
