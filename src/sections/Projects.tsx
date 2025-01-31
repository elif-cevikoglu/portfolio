import wildOasisClient from "@/assets/images/wild-oasis-client-mock.png";
import darkOasisDashboard from "@/assets/images/wild-oasis-dash-mock.png";
import bookGardenMock from "@/assets/images/book-garden-mock.png";
import maptyMock from "@/assets/images/mapty-mock.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "'Wild Oasis'",
    year: "2025",
    title: "Wild Oasis Client Website",
    results: [
      { title: "A full stack cabin booking platform." },
      { title: "Next.js, Supabase, Auth.js, Tailwind" },
    ],
    link: "https://the-wild-oasis-client-elif.vercel.app",
    image: wildOasisClient,
  },
  {
    company: "'Wild Oasis'",
    year: "2025",
    title: "Wild Oasis Dashboard",
    results: [
      { title: "A full stack dashboard app." },
      { title: "React, Supabase, Styled Components" },
      { title: "React Query, ReCharts" },
    ],
    link: "https://the-wild-oasis-elif.netlify.app",
    image: darkOasisDashboard,
  },
  {
    company: "'Book Garden'",
    year: "2023",
    title: "Book Garden Salesforce App",
    results: [
      { title: "A Salesforce app for managing your library." },
      { title: "Apex, LWC, SOQL, Experience Cloud, Custom App" },
      { title: "Link will open a limited read-only demo." },
    ],
    link: "https://book-garden-dev-ed.trailblaze.my.site.com/BookGarden/s/",
    image: bookGardenMock,
  },
  {
    company: "'Mapty'",
    year: "2023",
    title: "Mapty",
    results: [
      { title: "An app for saving workouts on a map." },
      { title: "HTML, CSS, JavaScript, OOP, REST APIs, Web APIs" },
      { title: "Map functionality is provided by Leaflet and OpenStreetMap." },
    ],
    link: "https://mapty-elif.netlify.app/",
    image: maptyMock,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 select-none">
      <div className="container">
        <SectionHeader
          eyebrow="'Real-world' Results"
          title="Featured Projects"
          // description="See how I transformed concepts into engaging digital experiences."
          description="A selection of things I've been creating, tweaking, and perfecting."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, i) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${i * 40}px);`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
