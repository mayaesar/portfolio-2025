export default function About() {
  return (
    <section>
      <div className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-gray-200 mb-6 font-theme">
        About Me
      </div>
      <p className="text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m a full-stack web developer with a background in web design,
        combining technical expertise with a keen eye for aesthetics and user
        experience. As I begin my career in this field, I’m excited to bring
        both my creative and problem-solving skills to the table. With a strong
        foundation in front-end and back-end technologies, I thrive in
        developing and maintaining web applications that are not only functional
        but also visually compelling.
      </p>
      <p className="text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        I’m also the co-founder of{" "}
        <a
          href="https://mivory.app"
          target="_blank"
          className="underline hover:text-blue-500"
        >
          Mivory
        </a>
        , a bookmark manager app designed to help users organize and access
        their saved content effortlessly. With launch day just around the
        corner, I’m eager to see how it will enhance the way people manage their
        digital resources.
      </p>
    </section>
  );
}
