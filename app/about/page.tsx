import Image from "next/image";

const statusLines = [
  {
    icon: "⦿",
    text: "9-5 Strategy Lead at",
    link: { label: "Mojo Supermarket", href: "https://mojosuper.market/" },
  },
  {
    icon: "↩",
    text: "5-9 Amateur surfer, even more of an amateur recipe developer",
    link: null,
  },
];

const clients = [
  "Meta",
  "Robinhood",
  "Chime",
  "Google",
  "YouTube",
  "Rivian",
  "Apple EDU",
  "JPMorgan Chase",
  "Chase Travel",
  "DoorDash",
  "CookUnity",
  "Diageo",
  "The North Face",
  "Faye",
  "Branch Energy",
  "Quest Nutrition",
];

const capabilities = [
  "Brand Strategy",
  "Business Strategy",
  "Campaign Architecture",
  "Consumer Insights",
  "Cultural Consulting",
  "Brand Repositioning",
  "Platform Strategy",
  "Creative Concept Development",
  "Focus Group Moderation",
  "Copywriting",
  "Content Planning",
];

const awards = [
  "Clios ×2",
  "Effies ×2 (Silver, TBD)",
  "Shorty Awards",
  "Webbys",
  "The One Show Finalist",
];

export default function About() {
  return (
    <main className="min-h-screen pt-20 pb-24">

      {/* ── Two-column layout: photo left / content right ──────────── */}
      <div className="flex flex-col md:flex-row">

        {/* Left — Photo */}
        <div className="px-10 md:pl-36 md:pr-10 md:w-[26%] shrink-0">
          <Image
            src="/images/about-photo.png"
            alt="Kenneth Fojas"
            width={274}
            height={307}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        {/* Right — Bio + grid */}
        <div className="flex-1 px-10 md:pl-6 md:pr-14 mt-10 md:mt-0">

          {/* Status lines */}
          <div className="mb-16 space-y-6">
            {statusLines.map((line, i) => (
              <p key={i} className="text-[13px] text-[#3E3A36] leading-[1.6]">
                <span className="mr-3 text-[#9A9189]">{line.icon}</span>
                {line.text}
                {line.link && (
                  <>
                    {" "}
                    <a
                      href={line.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#9A9189] transition-colors duration-150"
                    >
                      {line.link.label}
                    </a>
                  </>
                )}
              </p>
            ))}
          </div>

          {/* Columns: Clients / Capabilities / Awards — flex so each is content-width */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">

            <div className="shrink-0">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A9189] mb-5">
                Clients
              </p>
              <ul className="space-y-1.5">
                {clients.map((name) => (
                  <li key={name} className="text-[13px] text-[#3E3A36]">
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A9189] mb-5">
                Capabilities
              </p>
              <ul className="space-y-1.5">
                {capabilities.map((cap) => (
                  <li key={cap} className="text-[13px] text-[#3E3A36]">
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A9189] mb-5">
                Awards
              </p>
              <ul className="space-y-1.5">
                {awards.map((award) => (
                  <li key={award} className="text-[13px] text-[#3E3A36]">
                    {award}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
