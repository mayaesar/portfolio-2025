import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsFill } from "react-icons/ri";
import { BiLogoFigma } from "react-icons/bi";

export default function TechStack() {
  return (
    <section>
      <div className="py-12">
        <div className="font-bold text-4xl text-gray-800 dark:text-gray-200 font-theme">
          {" "}
          My Tech Stack
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 justify-items-center gap-x-4 gap-y-8 py-12">
          <span title="React">
            <RiReactjsFill className="size-16 md:size-32 text-blue-400" />
          </span>
          <span title="Vue">
            <RiVuejsFill className="size-16 md:size-32 text-green-400" />
          </span>
          <span title="Tailwind">
            <RiTailwindCssFill className="size-16 md:size-32 text-cyan-400" />
          </span>
          <span title="JavaScript">
            <RiJavascriptFill className="size-16 md:size-32 text-yellow-300" />
          </span>
          <span title="Node">
            <RiNodejsFill className="size-16 md:size-32 text-green-600" />
          </span>
          <span title="PostgreSQL">
            <BiLogoPostgresql className="size-16 md:size-32 text-blue-700" />
          </span>
          <span title="Java">
            <RiJavaFill className="size-16 md:size-32 text-red-500" />
          </span>
          <span title="Figma">
            <BiLogoFigma className="size-16 md:size-32 text-pink-400" />
          </span>
        </div>
      </div>
    </section>
  );
}
