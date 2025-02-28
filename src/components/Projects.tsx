"use client";
import ProjectCard from "@/components/ProjectCard";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { cn } from "@/utils/cn";

const projects = [
  {
    title: "Mivory - Landing page",
    description:
      "A Start-up landing page for a Bookmark manager app built with Nuxt.js and Tailwind CSS, implemented Resend for email mailing list",
    stack: "Nuxt.js, Tailwind",
    video:
      "https://www.youtube.com/embed/LdhN0w-D0SU?si=veEs8dcN4-uG-FSN&autoplay=1&controls=0&mute=1&loop=1&playlist=LdhN0w-D0SU",
    url: "https://mivory.app/",
    github: "https://github.com/mayaesar/mivory-landing",
  },
  {
    title: "Pinterest Clone",
    description: "A Pinterest clone built with Next.js and Tailwind CSS",
    stack: "Next.js, Tailwind",
    image: "/PinterestCloneImg.png",
    video:
      "https://www.youtube.com/embed/1Jan7qrdVoM?autoplay=1&controls=0&mute=1&loop=1&playlist=1Jan7qrdVoM&vq=hd1080",
    url: "https://pinterest-clone-gilt-theta.vercel.app/",
    github: "https://github.com/mayaesar/pinterest_clone",
  },
  {
    title: "Instagram Dashboard (Desktop)",
    description:
      "A dashboard for Instagram that takes in JSON files and displays the data, built with Next.js, Tailwind CSS, Apexcharts, and Jotai",
    stack: "Next.js, Tailwind, Apexcharts, Jotai",
    image: "/InstagramDashboard.png",
    video:
      "https://www.youtube.com/embed/FCsY7eqGxH4?autoplay=1&controls=0&mute=1&loop=1&playlist=FCsY7eqGxH4&vq=hd1080",
    url: "https://instagram-dashboard-seven.vercel.app/",
    github: "https://github.com/mayaesar/instagram-dashboard",
  },
  {
    title: "Jira Clone",
    description:
      "A Team Project cloning Jira management tool built with PostgreSQL and Java",
    stack: "PLpgSQL, Java",
    image: "/JiraERD.png",
    github: "https://gitlab.com/testing4434305/finalprojectdatabase2",
  },
];

export default function Projects() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollBy = (index: number) => {
    scrollContainer.current?.scrollBy({
      left: index * scrollContainer.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollTo = (index: number) => {
    scrollContainer.current?.scrollTo({
      left: index * scrollContainer.current.offsetWidth,
      behavior: "smooth",
    });
    setScrollIndex(index);
  };

  return (
    <section className="relative">
      <div className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-gray-200 mb-6 font-theme">
        My Projects
      </div>
      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden"
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <button
        className="hidden md:block absolute top-1/2 -left-20 transform -translate-y-1/2 "
        onClick={() => scrollBy(-1)}
      >
        <FaAngleLeft className="size-10" />
      </button>
      <button
        className="hidden md:block absolute top-1/2 -right-20 transform -translate-y-1/2 "
        onClick={() => scrollBy(1)}
      >
        <FaAngleRight className="size-10" />
      </button>
      <div className={`md:hidden flex gap-4 justify-center`}>
        {projects.map((project, index) => {
          return (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn("w-4 h-4 bg-gray-400 rounded-full", {
                "bg-pink-400": index === scrollIndex,
              })}
            />
          );
        })}
      </div>
    </section>
  );
}
