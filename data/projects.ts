export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  credit?: { label: string; href?: string };
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "FACEBOOK",
    description:
      "Facebook had earned new associations with discovery and utility, but young adults still had reservations opening the app. I led the vision-setting work that mapped young adult behavior across monoculture, seasonal, and trending moments, then translated those patterns into a 2025 comms framework that gave the brand specific reasons to show up. The output reframed Facebook from a passive platform into an active social discovery tool for the moments that matter most to young people.",
    tags: ["Brand Strategy", "Campaign Planning", "Creative Strategy"],
    image: "/images/project-01.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
  {
    id: "02",
    title: "ROBINHOOD",
    description:
      "Robinhood built its reputation on getting rich quick, so retirement was a tough sell to an audience raised on instant returns. In 2022, I helped reposition the IRA product around a sharper truth, that slow, predictable wealth is still wealth, then translated that into a creative platform built around the 3% match and the idea of more retirement for your retirement. The strategy reframed a category most young adults ignore into one worth paying attention to.",
    tags: ["Brand Positioning", "Campaign Strategy", "Comms Planning"],
    image: "/images/project-02.png",
    credit: { label: "AKQA", href: "https://www.akqa.com" },
    accentColor: "#1A3FFF",
  },
  {
    id: "03",
    title: "EX PROGRAM",
    description:
      "Truth Initiative needed to shift its mission from preventing youth vaping to becoming the go-to guide for young adults trying to quit nicotine. I led the strategic reframe that flipped the cultural narrative from \"you're failing at quitting\" to \"quitting itself is broken.\" That single insight unlocked an entire brand architecture for EX Program, positioning it as the only resource that meets Gen Z across every phase of the quit journey instead of treating one symptom at a time.",
    tags: ["Brand Positioning", "Design Strategy", "Campaign Planning"],
    image: "/images/project-03.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
  {
    id: "04",
    title: "RIVIAN",
    description:
      "Rivian isn't your typical car brand, so the work needed to break the rules of typical car advertising. I shaped the strategic foundation for the 2025 campaign, anchoring every touchpoint in a real story from a Rivian owner. The platform put humans at the center and let the vehicle play a supporting role, turning product specs like safety, range, and performance into emotional, cinematic narratives in the spirit of an A24 production.",
    tags: ["Brand Strategy"],
    image: "/images/project-04.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
  {
    id: "05",
    title: "CHASE TRAVEL",
    description:
      "Chase Travel evolved from a points redemption portal into a full service trip planning platform, but cardmembers still only thought of it as a place to save a few bucks by cashing in points. I led the strategy that reframed the brand around a sharper truth, that travel is exciting but planning is exhausting, and positioned Chase Travel as a team of well-traveled editors and experts who take the work out of booking a trip. The platform moved the brand from a transactional tool to a problem-solving service, giving the Premium Explorer a reason to come to Chase Travel at the start of the planning journey instead of the destination.",
    tags: ["Creative Strategy", "Focus Groups"],
    image: "/images/project-05.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
  {
    id: "06",
    title: "CHIME",
    description:
      "Chime had built a reputation as the bank for people #fintok was already paying attention to, but the brand was still showing up as a functional toolkit when its audience wanted something more. In 2025, I led the strategy for Financial Progress Month that unpacked the mindset behind the 400% rise in #fintok and reframed the brief around a sharper truth, that the traditional American Dream feels broken and young people are building their own pathways to success through side hustles, content, and non-linear careers. The platform repositioned Chime from a set of tools that answer financial questions into emotional validation that you're making it in America, redefining what \"making it\" looks like in 2025.",
    tags: ["Campaign Strategy", "Content Strategy"],
    image: "/images/project-06.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
  {
    id: "07",
    title: "OUTERSPACE",
    description:
      "Outerspace was quietly reinventing third-party logistics, but the category it lived in was a sea of sameness, full of legacy 3PLs that treated operations as a behind-the-scenes cost center. I led the brand architecture work that reframed operations as a competitive advantage and positioned Outerspace as a badge of success for the most iconic, innovative brands in the world. The strategy productized the unmatched holistic offering, from UV printing and embroidery to lending and payment capabilities, and turned a functional service into something founders are proud to work with.",
    tags: ["Brand Architecture", "Copywriting"],
    image: "/images/project-07.png",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#1A3FFF",
  },
  {
    id: "08",
    title: "FAYE",
    description:
      "Travel insurance had earned its reputation as the most yawn-worthy purchase of any trip (if even), a category built on fine print and worst-case scenarios that nobody wants to read. I led the brand and naming work that repositioned the company, formerly Zenner, around a sharper truth, that travel insurance should cover the whole trip, not just the emergencies. The platform reframed the category from a safety net you hope you never use into a travel companion that shows up at every stage of the journey, and the name Faye gave the brand a human, trustworthy front door to match.",
    tags: ["Brand Strategy", "Naming", "Copywriting"],
    image: "/images/project-08.png",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#1A3FFF",
  },
  {
    id: "09",
    title: "COOKUNITY",
    description:
      "CookUnity exists in an awkward spot in the meal delivery category — it isn't quite a kit, isn't quite a restaurant, and the standard category shortcuts of time savings and fresh ingredients don't capture what makes it different. I led the fall 2025 BTS strategy that reframed the brief around a sharper truth, that summer is when people feed themselves and fall is when food becomes functional, then positioned CookUnity Chefs as the difference between being fed and feeling fulfilled. The platform, Chefs to the People, gave the brand a way to compete on nourishment instead of convenience, with segment-specific messaging that traded category generalities for the real, lived moments of the fall reset.",
    tags: ["Campaign Strategy", "Comms"],
    image: "/images/project-09.jpg",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#1A3FFF",
  },
];
