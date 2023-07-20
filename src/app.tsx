import { useState } from 'preact/hooks';
import { T, TextBlock } from './atoms/Typography'
import Work from './molecules/Work'
import NavbarItem from './molecules/NavbarItem';
import Project from './molecules/Project';
import data from './data.json';

export function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <div className="font-main bg-slate-900 h-full">
      <div className="w-full max-w-[1300px] h-full mx-auto">
        <div className="lg:p-20 p-7 grid grid-cols-1 lg:grid-cols-2">
          <section>
            <div className="lg:sticky lg:top-15">
              <h1 className="text-5xl font-bold text-slate-200 tracking-tighter">Jakub Dorničák</h1>
              <h2 className="text-slate-200 text-xl mt-2 font-normal tracking-tight">
                Medior Web developer v Blindspot AI
              </h2>

              <p className="table w-[310px] font-normal mt-2.5 text-slate-400">
                Buduju inovativní, moderní a uživatelsky přívětivé
                webové stránky a aplikace.
              </p>

              <nav className="hidden lg:block mt-10">
                <NavbarItem title='O mě' location={0}/>
                <NavbarItem title='Pracovní zkušenost' location={300}/>
                <NavbarItem title='Projekty' location={1000} />
              </nav>
            </div>

            <ul className="flex flex-row mt-5 lg:fixed lg:bottom-10 relative">
              <li className="mr-5">
                <a href="https://github.com/Atsukoro1">
                  <img
                    src="/icons/github.svg"
                    alt="Github"
                    className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="mr-5">
                <a href="https://www.linkedin.com/in/jakub-dorni%C4%8D%C3%A1k-b6953423b/">
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="mr-5">
                <a href="https://app.hackthebox.com/users/692313">
                  <img
                    src="/icons/htb.svg"
                    alt="HackTheBox"
                    className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  />
                </a>
              </li>
            </ul>
          </section>

          <section>
            <div className="md:mt-0 mt-10">
              <h4 className="text-slate-200 font-bold mt-8 text-lg lg:hidden">
                O mně
              </h4>

              <TextBlock top>
                Jsem 18letý student a nadšenec do technologií. Své znalosti a dovednosti jsem vybudoval primárně
                v oblasti <T highlighted>Web developmentu</T> kde již několik let
                vyvíjím <T highlighted>webové stránky a aplikace</T> pro všemožné Eshopy a živnostníky.
              </TextBlock>

              <TextBlock>
                Mimo web development se věnuji UNIXovým systémům a jejich správě a grafickému
                vyobrazení (ricing), <T highlighted>Kyberbezpečnosti</T> (HackTheBox, TryHackMe challenge) a taky nějaké té síťařině.
              </TextBlock>

              <TextBlock>
                Mezi mé zájmy mimo IT patří hlavně můj pes 🐕, strategické počítačové hry a rodina.
              </TextBlock>
            </div>

            <div>
              <h4 className="text-slate-200 font-bold mt-8 text-lg lg:hidden">
                Pracovní zkušenosti
              </h4>

              <div className="flex flex-col gap-2 lg:mt-15">
                {data.work.map((work, index) => (
                  <Work
                    hovered={hoveredWork === null ? null : hoveredWork === index}
                    key={work.title}
                    onHoverStart={() => {
                      setHoveredWork(index);
                    }}
                    onHoverStop={() => {
                      setHoveredWork(null);
                    }}
                    {...work}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-slate-200 font-bold mt-8 text-lg lg:hidden">
                Projekty
              </h4>

              <div className="flex flex-col gap-2 lg:mt-15">
                {data.projects.map((project, index) => (
                  <Project 
                    {...project}
                    key={project.title}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverStop={() => setHoveredProject(null)}
                    hovered={hoveredProject === null ? null : hoveredProject === index} 
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
