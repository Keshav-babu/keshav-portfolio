import Image from "next/image";
import Clock from "./component/clock";
import linkedinLogo from "./linkedin.png";
import githubLogo from "./github-mark.png";
import phonelogo from "./phone-call.png";
import Toggle from "./component/toggle_theme";

export default function Home() {
  const project_Desc = [
    "Built an AI-driven mock interview web application that simulates real interview scenarios with dynamic follow-up questions.",
    "Implemented role-based interview flows (technical,behavioral, HR) with adaptive questioning based on candidate responses.",
    "Integrated AI to evaluate answers and provide structured feedback on clarity, correctness, confidence, and communication.",
  ];

  return (
    <div className="space-y-20">
      {/* HERO SECTION */}

      <section id="hero" className="text-center py-10">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Hi, I'm <span className="text-zinc-500">Keshav Mandal</span>
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
          Frontend Developer • ReactJS • NextJS • TypeScript • UI Engineering
        </p>

        <div className="mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white dark:bg-zinc-800 rounded-lg hover:bg-zinc-800"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I'm a frontend developer with expertise in React, Next.js, TypeScript,
          and building scalable UI systems. I love crafting beautiful interfaces
          and solving complex UI challenges. Currently working at Wakefit.co and
          building high-performance apps.
        </p>
      </section>

      <section id="exp">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          <div className="md:p-5 p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">
                Frontend Engineer (SDE-2) —{" "}
                <a
                  href="https://www.wakefit.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
                >
                  Wakefit
                </a>
              </h3>
              <p>July 2022</p>
            </div>

            <p className="font-[17px] text-base">
              A company focused on providing quality sleep products.
            </p>
            <p>
              <b>Tech Stack:</b>
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Redux",
                "Node.js",
              ].map((skill) => (
                <span key={skill} className=" text-sm">
                  {skill},
                </span>
              ))}
            </p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              At Wakefit, I worked on building and scaling high-traffic
              e-commerce and CRM platforms, contributing to both customer-facing
              experiences and internal tools. I collaborated closely with
              cross-functional teams to deliver performant, scalable, and
              maintainable frontend solutions in a fast-paced product
              environment.
            </p>
          </div>

          {/* <div className="p-5 rounded-lg bg-white dark:bg-zinc-900 shadow">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Another project explanation with clean UI and useful features.
            </p>
          </div> */}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-6 space-y-6">
          <div className="p-5 rounded-lg bg-white dark:bg-zinc-900 shadow">
            <h3 className="text-xl font-bold">
              <a
                href="https://interview-plateform-amber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
              >
                AI-Powered Mock Interview Platform
              </a>
            </h3>
            <p className="font-[17px] text-base">
              Designed and developed an AI mock interview system to replicate
              real interview experiences. Helps users analyze responses and
              improve communication, accuracy, and confidence.
            </p>
            <ul className="list-disc list-inside">
              {project_Desc.map((item, i) => (
                <li key={i} className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "Node.js",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Feel free to reach out via email at:
        </p>
        <div className="grid md:flex gap-3 items-center">
          <div className="flex  gap-3  justify-between items-center">
            <a
              href="mailto:keshavmandal964636@gmail.com"
              className=" inline-block text-black dark:text-white font-semibold underline"
            >
              keshavmandal39@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/keshav-mandal-403a61145/">
              <Image src={linkedinLogo} alt="Linkedin" width="15" height="15" />
            </a>
            <a href="https://github.com/Keshav-babu">
              <Image src={githubLogo} alt="Linkedin" width="15" height="15" />
            </a>
          </div>

          <div className="flex gap-1 items-center">
            <Image src={phonelogo} alt="phone" width="15" height="15" />
            <p>+91 84090 39379</p>
          </div>
        </div>
      </section>
    </div>
  );
}
