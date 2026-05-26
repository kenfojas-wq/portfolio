import Image from "next/image";
import { projects } from "@/data/projects";
import CoilLogo from "@/app/components/CoilLogo";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:gap-16">

          {/* ── About block ──────────────────────────────────────────── */}
          <aside
            id="about"
            className="
              w-full md:w-60 shrink-0
              md:order-last
              border-b border-[#D6D3CE] pb-10
              md:border-b-0 md:pb-0
            "
          >
            <div className="md:sticky md:top-20">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#9A9189] mb-2">
                Full-Stack Strategist
              </p>
              <h1 className="text-[12px] font-bold leading-snug">KENNETH FOJAS</h1>
              <CoilLogo className="my-3" style={{ width: 36, height: 38 }} />
              <p className="text-[11px] text-[#5C5650] leading-[1.65]">
                Equal parts systems thinker, investigative journalist, and
                meme enthusiast. Kenneth finds the tension a category
                refuses to name — then builds the work that actually moves brands.
              </p>
            </div>
          </aside>

          {/* ── Project list ─────────────────────────────────────────── */}
          <div id="work" className="flex-1 min-w-0">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={[
                  "grid grid-cols-1 md:grid-cols-[260px_1fr_150px]",
                  "gap-y-5 md:gap-y-0 md:gap-x-8",
                  "py-10",
                  index > 0 ? "border-t border-[#D6D3CE]" : "",
                ].join(" ")}
              >
                {/* Left — Thumbnail */}
                <div className="mb-8">
                  <div className="relative w-full aspect-[16/9] overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-75"
                      unoptimized
                    />
                  </div>
                  {project.credit && (
                    <p className="mt-6 text-[10px] text-[#9A9189]">
                      Produced at{" "}
                      {project.credit.href ? (
                        <a
                          href={project.credit.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#3E3A36] transition-colors duration-150"
                        >
                          {project.credit.label}
                        </a>
                      ) : (
                        <span className="underline">{project.credit.label}</span>
                      )}
                    </p>
                  )}
                </div>

                {/* Center — Title + Description */}
                <div>
                  <h2 className="text-[12px] font-bold uppercase tracking-wide mb-2.5 leading-snug">
                    <span className="text-[14px] font-bold text-[#002FA7]">
                      {project.id}
                    </span>
                    <span className="ml-2">{project.title}</span>
                  </h2>
                  <p className="text-[12px] text-[#3E3A36] leading-[1.65]">
                    {project.description}
                  </p>
                </div>

                {/* Right — Tags */}
                <div>
                  <ul className="space-y-[4px]">
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-[11px] text-[#7A746C]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
