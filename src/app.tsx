import { useState } from 'preact/hooks';
import { T, TextBlock } from './atoms/Typography'
import Work from './molecules/Work'
import NavbarItem from './molecules/NavbarItem';
import Project from './molecules/Project';

const data = {
  work: [
    {
      fromDate: '2021',
      toDate: 'Nyní',
      title: 'Medior Web developer',
      company: 'Blindspot AI',
      position: 'Frontend developer',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript']
    },
    {
      fromDate: '2022',
      toDate: '2023',
      title: 'Software engineer',
      company: 'Viceverse',
      position: 'Frontend developer',
      technologies: ['React', 'Next.js', 'TailwindCSS']
    },
    {
      fromDate: '2021',
      toDate: '2022',
      title: 'Webmaster',
      company: 'Ovečkárna',
      position: 'Webmaster',
      technologies: ['Silius web panel']
    }
  ],
  projects: [
    {
      imagePath: '/doucinfo.png',
      title: 'Douč.info',
      href: 'https://douc.info',
      description: 'Douč.info je platforma pro doučování, která spojuje doučující a doučované. Douč.info je platforma pro doučování, která spojuje doučující a doučované.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Stripe']
    },
    {
      imagePath: '/contalk.png',
      title: 'Meetu',
      href: 'https://douc.info',
      description: 'Douč.info je platforma pro doučování, která spojuje doučující a doučované. Douč.info je platforma pro doučování, která spojuje doučující a doučované.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Stripe']
    }
  ]
};

export function App() {
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

              <p className="table w-[300px] font-normal mt-2.5 text-slate-400">
                Budu inovativní, moderní a uživatelsky přívětivé
                webové stránky a aplikace.
              </p>

              <nav className="hidden lg:block mt-10">
                <NavbarItem title='O mě' onPress={() => { }} />
                <NavbarItem title='Pracovní zkušenost' onPress={() => { }} />
                <NavbarItem title='Projekty' onPress={() => { }} />
              </nav>
            </div>

            <ul className="flex flex-row mt-5 lg:fixed lg:bottom-10 relative">
              <li className="mr-5">
                <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                  <img
                    src="/icons/github.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="mr-5">
                <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="mr-5">
                <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                  <img
                    src="/icons/htb.svg"
                    alt="LinkedIn"
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

              <div className="flex flex-col gap-8 lg:mt-15">
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
                    fromDate={work.fromDate}
                    toDate={work.toDate}
                    title={work.title}
                    company={work.company}
                    position={work.position}
                    technologies={work.technologies}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-slate-200 font-bold mt-8 text-lg lg:hidden">
                Projekty
              </h4>

              <div className="flex flex-col gap-8 lg:mt-15">
                {data.projects.map((project) => (
                  <Project {...project} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
