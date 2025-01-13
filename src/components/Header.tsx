"use client";
import { FaLinkedin, FaGithub, FaTiktok, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const downloadResume = () => {
    window.open(window.origin + "/mayaCv.pdf", "_blank");
  };

  return (
    <section
      className="fixed z-10 top-0 left-0 w-full flex items-center justify-between from-white dark:from-slate-900 to-white/0 dark:to-slate-900/0 pt-6 pb-12"
      style={{
        background:
          "linear-gradient(to bottom, var(--tw-gradient-from) 0%, var(--tw-gradient-via-position) 90%, var(--tw-gradient-to) 100%)",
      }}
    >
      <div className="w-full max-w-screen-lg flex items-center justify-between mx-auto px-4">
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/mayaesar/"
            target="_blank"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/mayaesar"
            target="_blank"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.tiktok.com/@mayaesar"
            target="_blank"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100"
          >
            <FaTiktok />
          </Link>
          <Link
            href="mailto:mayaesar@gmail.com"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100"
          >
            <FaEnvelope />
          </Link>
        </div>
        <div>
          <button
            onClick={() => downloadResume()}
            className="bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 font-medium rounded-md active:scale-95 transition-transform hover:outline outline-offset-2 outline-gray-900 dark:outline-gray-50 py-2 px-3"
          >
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
}
