'use client'
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di"
import { GrView } from "react-icons/gr";
import Link from "next/link";


export default function ProjectCard({ project }) {
    return (
        <div className="min-w-full snap-center snap-always">
            <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-0.5">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
            <div className="relative w-2xl aspect-video bg-gray-50 rounded-2xl overflow-hidden">
                <Image src={project.image} alt={project.title} fill={true} objectFit="cover"/>
            </div>

            <div className="min-w-full py-4">
                <div className="flex justify-center gap-8">
                    {project.url && (
                        <Link href={project.url} target="_blank" className="flex gap-2 items-center p-2 rounded-md hover:outline hover:outline-gray-700">
                            <GrView className="size-5"/>
                            Live Preview
                        </Link>
                    )}
                    {project.github && (
                        <Link href={project.github} target="_blank" className="flex gap-2 items-center p-2 rounded-md hover:outline hover:outline-gray-700">
                            <DiGithubBadge className="size-6"/>
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )

}