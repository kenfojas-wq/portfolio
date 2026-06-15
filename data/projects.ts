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
      "Young adults didn't leave Facebook, they just stopped opening it. Marketplace and Groups had quietly rebuilt the case for utility, but utility alone doesn't earn a spot on their home screen. As Facebook's AOR, our 2025 brand work mapped where young adults actually invest their attention and staked out the moments only Facebook could own: apartment hunts, local groups, side hustles, trip planning.",
    tags: ["Brand Stewardship", "Brand Strategy", "Campaign Planning", "Creative Strategy"],
    image: "/images/project-01.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "02",
    title: "RIVIAN",
    description:
      "Rivian isn't a typical car brand, so the work couldn't look like any other car ad. The 2025 creative platform built every touchpoint around a real owner's story, putting humans at the center and the vehicle in the supporting role. Safety, range, and performance became cinematic narratives. ▲27% ad recall. ▲74.3% aided awareness. ▲23.4% unaided.",
    tags: ["Brand Strategy", "Campaign Strategy"],
    image: "/images/project-04.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "03",
    title: "ROBINHOOD",
    description:
      "Robinhood built its reputation on getting rich quick, so retirement was a tough sell to an audience raised on instant returns. As their AOR, the 2023 IRA launch work reframed the category around a sharper truth: slow, predictable wealth is still wealth. The campaign, anchored in the 3% match, turned an insight young adults find boring into one they couldn't ignore.",
    tags: ["Brand Stewardship", "Brand Positioning", "Campaign Strategy", "Comms Planning"],
    image: "/images/project-02.png",
    video: "/videos/project-robinhood.mp4",
    credit: { label: "AKQA", href: "https://www.akqa.com" },
    accentColor: "#002FA7",
  },
  {
    id: "04",
    title: "BEYOND MEAT",
    description:
      "Beyond Meat's \"fake\" reputation wasn't organic. It was manufactured by a well-funded meat industry smear campaign, and when 8 in 10 Americans already felt lost about what to believe about food, that doubt was easy to plant. The real problem wasn't the product — people didn't realize their opinion had been bought, not formed. So instead of defending itself, the 2026 Cropaganda campaign took a page from the opposition's playbook: a mock smear so committed to the bit that the misinformation buckled under its own ridiculousness. The job was never to win the argument, it was to show people who had been making it.",
    tags: ["Brand Strategy", "Campaign Strategy", "Creative Strategy"],
    image: "/images/project-beyond.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "05",
    title: "ALVIERE",
    description:
      "Embedded finance had the architecture to transform how brands serve their people. But the category had reduced itself to fintech shorthand, sterile and self-referential, built for insiders who already knew what they were buying. The brand strategy repositioned Alviere around a sharper truth: the businesses most passionate about their customers weren't missing ambition. They were missing the financial infrastructure that gave them the safety and freedom to imagine how.",
    tags: ["Brand Strategy", "Brand Positioning"],
    image: "/images/project-alviere.png",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#002FA7",
  },
  {
    id: "06",
    title: "EX PROGRAM",
    description:
      "The quit-nicotine category had a lie baked in: that people who couldn't quit were relapsing at an alarming rate when quitting cold turkey. The strategic reframe flipped it from \"you're failing at quitting\" to \"quitting itself is broken.\" That single insight repositioned EX Program from a cessation tool into the only guide that meets Gen Z at every stage, not just the moment of crisis.",
    tags: ["Brand Positioning", "Design Strategy", "Campaign Planning"],
    image: "/images/project-ex-program.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "07",
    title: "CHIME",
    description:
      "#fintok gave Chime cultural credibility, but the brand was still showing up as a toolkit when its audience expected something bigger. Our 2025 Financial Progress Month platform landed on real tension: young people aren't chasing the American Dream, they're rewriting it. The strategy repositioned Chime from a set of features into proof that the new path counts.",
    tags: ["Brand Stewardship", "Campaign Strategy", "Content Strategy"],
    image: "/images/project-06.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "08",
    title: "OUTERSPACE",
    description:
      "Outerspace was quietly reinventing third-party logistics, but the category was a sea of bland pack-and-ship sameness. Yet the brand architecture reframed operations not as a cost center but as a competitive advantage, turning a behind-the-scenes service into a badge the most iconic brands in the world are proud to carry.",
    tags: ["Brand Identity", "Copywriting"],
    image: "/images/project-07.png",
    video: "/videos/project-outerspace.mp4",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#002FA7",
  },
  {
    id: "09",
    title: "SEEDLIP",
    description:
      "Seedlip invented the non-alcoholic spirit category in 2014, but the space it created drifted. In proving it wasn't alcohol, the category lost touch with drinking culture entirely. The 2025 brand strategy landed on the real shift: people aren't stepping away from drinking, they're toggling in and out of it, and what's in your hand still signals who you are in the room. Boundless Connection moved Seedlip from the drink you choose instead of alcohol into the drink that proves connection lives in people, not pours.",
    tags: ["Brand Strategy", "Brand Positioning", "Campaign Strategy"],
    image: "/images/project-seedlip.png",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "10",
    title: "CHASE TRAVEL",
    description:
      "Chase Travel had evolved from a points portal into a full-service trip planning platform, but cardmembers still saw it as a place to shave a few bucks off at checkout. The core tension: travel is exciting, planning is exhausting. The platform reframed Chase Travel's team of well-traveled editors as the people who take the work out of the trip, giving cardmembers a reason to start there instead of just end there.",
    tags: ["Creative Strategy", "Focus Groups"],
    image: "/images/project-chase-travel.gif",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
  {
    id: "11",
    title: "FAYE",
    description:
      "Travel insurance had earned its reputation as the most yawn-inducing purchase of any trip: fine print, worst-case scenarios, a product built to be forgotten. Yet the brand and naming work repositioned Zenner around a sharper truth: insurance should cover the whole trip, not just the emergencies. The category became a companion people reached for before the airport, not just after the emergency. The name Faye gave the brand a human front door to match.",
    tags: ["Brand Strategy & Identity", "Naming", "Copywriting"],
    image: "/images/project-faye.jpg",
    credit: { label: "Red Antler", href: "https://redantler.com" },
    accentColor: "#002FA7",
  },
  {
    id: "12",
    title: "COOKUNITY",
    description:
      "CookUnity sits in an awkward spot in the meal delivery world: not quite a kit, not quite a restaurant, and the category shortcuts of time savings and fresh ingredients don't capture what makes it different. The Fall 2025 BTS strategy landed on a behavioral truth: if summer is indulgence, fall is when food becomes functional. The platform, Chefs to the People, positioned CookUnity Chefs as the difference between being fed and feeling fulfilled, competing on nourishment instead of convenience.",
    tags: ["Brand Stewardship", "Campaign Strategy", "Comms"],
    image: "/images/project-09.jpg",
    credit: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
    accentColor: "#002FA7",
  },
];
