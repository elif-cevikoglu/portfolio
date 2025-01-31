import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 select-none">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's build great things together!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                I'm excited to learn, grow, and contribute! Let's connect and
                explore how my skills can support your success.
              </p>
            </div>
            <div>
              <a href="mailto:elif-cevikoglu@outlook.com">
                <button className="text-white bg-gray-900 inline-flex gap-2 mt-8 items-center px-6 h-12 rounded-xl w-max border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
