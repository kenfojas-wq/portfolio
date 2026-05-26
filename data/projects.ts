export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  video?: string;
  credit?: { label: string; href?: string };
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "FACEBOOK",
    description:
      "Young adults didn't leave Facebook, they just stopped opening it. Marketplace and Groups had quietly rebuilt the case for utility, but utility alone doesn't earn a spot on the home screen. The 2025 framework mapped where young adults actually invest their social energy and claimed the moments only Facebook could own: apartment hunts, local groups, side hustles, trip planning — the stuff a feed can't do.",
    tags: ["Brand Strategy", "Campaign Planning", "Creative Strategy"],
    image: "/images/project-01.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "02",
    title: "RIVIAN",
    description:
      "Rivian isn't a typical car brand, so the work couldn't look like any other car ad. The 2025 creative platform anchored every touchpoint in a real Rivian owner's story: humans at the center, vehicle in the supporting role. Specs like safety, range, and performance became cinematic narratives inspired by real user stories. ▲27% ad recall. ▲74.3% aided awareness. ▲23.4% unaided.",
    tags: ["Brand Strategy", "Campaign Strategy"],
    image: "/images/project-04.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "03",
    title: "ROBINHOOD",
    description:
      "Robinhood built its reputation on getting rich quick, so retirement was a tough sell to an audience raised on instant returns. The 2023 IRA launch work started deep repositioning of the brand towards a sharper truth: slow, predictable wealth is still wealth. The platform, built around the 3% match and getting the most retirement for your retirement, reframed an insight young adults find boring into one worth paying attention to.",
    tags: ["Brand Stewardship", "Brand Positioning", "Campaign Strategy", "Comms Planning"],
    image: "/images/project-02.png",
    video: "/videos/project-robinhood.mp4",
    credit: { label: "AKQA", href: "https://www.akqa.com" },
    accentColor: "#002FA7",
  },
  {
    id: "04",
    title: "EX PROGRAM",
    description:
      "Truth Initiative needed to evolve from preventing youth vaping into the go-to guide for young adults trying to quit nicotine. The strategic reframe flipped the cultural narrative from \"you're failing at quitting\" to \"quitting itself is broken.\" That single insight unlocked a brand architecture for EX Program as the only resource that meets Gen Z across every phase of the quit journey, instead of treating individual symptoms.",
    tags: ["Brand Positioning", "Design Strategy", "Campaign Planning"],
    image: "/images/project-ex-program.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "05",
    title: "CHIME",
    description:
      "Chime had a reputation as #fintok was trending on social, but the brand was still showing up as a functional toolkit. The 2025 Financial Progress Month strategy unpacked the mindset behind #fintok's 400% rise and landed on a real consumer tension: young people are rewriting their own pathways to the American Dream. The platform repositioned Chime from a set of tools into emotional validation that you're making it — and redefining what \"making it\" looks like in 2025.",
    tags: ["Brand Stewardship", "Campaign Strategy", "Content Strategy"],
    image: "/images/project-06.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "06",
    title: "OUTERSPACE",
    description:
      "Outerspace was quietly reinventing third-party logistics, but the category was a sea of bland pack-and-ship sameness. The brand architecture reframed operations as a competitive advantage and positioned Outerspace as a badge of success for the most iconic brands in the world, productizing the holistic offering and turning a functional service into something founders are proud to work with.",
    tags: ["Brand Identity", "Copywriting"],
    image: "/images/project-07.png",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#002FA7",
  },
  {
    id: "07",
    title: "SEEDLIP",
    description:
      "Seedlip invented the non-alcoholic spirit category in 2014, but the space it created drifted. In proving it wasn't alcohol, the category lost touch with drinking culture itself. The 2025 brand strategy landed on a cultural shift: people aren't stepping away from drinking, they're toggling in and out of it, and what's in your hand still signals who you are in the room. Our platform, Boundless Connection, repositioned Seedlip from a non-alcoholic alternative into the drink that proves connection lives in people, not just pours — moving the brand from category-driven to culture-driven.",
    tags: ["Brand Strategy", "Brand Positioning", "Campaign Strategy"],
    image: "/images/project-seedlip.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "08",
    title: "CHASE TRAVEL",
    description:
      "Chase Travel had evolved from a points portal into a full-service trip planning platform, but cardmembers still saw it as a place to cash in points to shave a few bucks off. The insight: travel is exciting, planning is exhausting. The platform centered Chase Travel's team of well-traveled editors who take the work out of booking — moving the brand from transactional tool to a premium problem-solving service, and giving the audience a reason to start with Chase Travel instead of end there.",
    tags: ["Creative Strategy", "Focus Groups"],
    image: "/images/project-chase-travel.gif",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "09",
    title: "FAYE",
    description:
      "Travel insurance had earned its reputation as the most yawn-worthy purchase of any trip — a category built on fine print and worst-case scenarios nobody has time for. The brand and naming work repositioned Zenner around a real idea: travel insurance should cover the whole trip, not just the emergencies. The platform reframed the category from a safety net you hope you never use into a travel companion for every stage of the journey, and the name Faye gave the brand a human front door to match.",
    tags: ["Brand Strategy & Identity", "Naming", "Copywriting"],
    image: "/images/project-faye.jpg",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#002FA7",
  },
  {
    id: "10",
    title: "COOKUNITY",
    description:
      "CookUnity sits in an awkward spot in meal delivery: not quite a kit, not quite a restaurant, and the category shortcuts of time savings and fresh ingredients don't capture what makes it different. The Fall 2025 BTS strategy landed on a behavioral shift: if summer is indulgence, fall is when food becomes functional. The platform, Chefs to the People, positioned CookUnity Chefs as the difference between being fed and feeling fulfilled, competing on nourishment instead of convenience.",
    tags: ["Brand Stewardship", "Campaign Strategy", "Comms"],
    image: "/images/project-09.jpg",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
];
