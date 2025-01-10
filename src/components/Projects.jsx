'use client'
import ProjectCard from "@/components/ProjectCard";
import {useRef, useState} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const projects = [
    {
        title: "Pinterest Clone",
        description: "A Pinterest clone built with Next.js and Tailwind CSS",
        stack: "Next.js, Tailwind",
        image: "/PinterestCloneImg.png",
        url: "https://pinterest-clone-gilt-theta.vercel.app/",
        github: "https://github.com/mayaesar/pinterest_clone"
    },
    {
        title: "Instagram Dashboard",
        description: "A dashboard for Instagram that takes in JSON files and displays the data, built with Next.js, Tailwind CSS, Apexcharts, and Jotai",
        stack: "Next.js, Tailwind, Apexcharts, Jotai",
        image: "/InstagramDashboard.png",
        video: "https://www.youtube.com/embed/FCsY7eqGxH4?autoplay=1&controls=0&mute=1&loop=1&playlist=FCsY7eqGxH4",
        url: "https://instagram-dashboard-seven.vercel.app/",
        github: "https://github.com/mayaesar/instagram-dashboard"
    },
    {
        title: "Jira Clone",
        description: "A Team Project cloning Jira management tool built with PostgreSQL and Java",
        stack: "PLpgSQL, Java",
        image: "/JiraERD.png",
        github: "https://gitlab.com/testing4434305/finalprojectdatabase2"
    }
]

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const scrollContainer = useRef(null);

    const scrollBy = (index) => {
        scrollContainer.current.scrollBy({
            left: index * scrollContainer.current.offsetWidth,
            behavior: 'smooth'
        });
    };

    return (
        <section className="relative">
            <div className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-gray-200 mb-6">My Projects</div>
            <div ref={scrollContainer} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
            <button
                className="hidden md:block absolute top-1/2 -left-20 transform -translate-y-1/2 "
                onClick={() => scrollBy(-1)}>
                <FaAngleLeft className="size-10"/>
            </button>
            <button
                className="hidden md:block absolute top-1/2 -right-20 transform -translate-y-1/2 "
                onClick={() => scrollBy(1)}
            >
                <FaAngleRight className="size-10"/>
            </button>
        </section>
    )
}