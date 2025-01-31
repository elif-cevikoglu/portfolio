import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Innovative Thinker",
  "adaptable collaborator",
  "effective communicator",
  "eager to learn",
  "self-motivated ",
  "problem solver",
  "can-do attitude",
  "Team-oriented",
  "Customer-focused",
  "Detail-oriented",
  "Resourceful",
];
// const words = [
//   "Performant",
//   "Accessible",
//   "Secure",
//   "Interactive",
//   "Scalable",
//   "User Friendly",
//   "Responsive",
//   "Maintainable",
//   "Search Optimized",
//   "Usable",
//   "Reliable",
// ];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip select-none">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex gradient_10_90_mask">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
