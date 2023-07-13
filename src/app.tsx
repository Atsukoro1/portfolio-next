import { T, TextBlock } from './atoms/Typography'

export function App() {
  return (
    <div className="font-main bg-slate-900 w-full h-full">
      <div className="p-20 grid grid-cols-1 md:grid-cols-2">
        <section>
          <div className="sticky top-8">
            <h1 className="text-5xl font-bold text-slate-200">Jakub Dorničák</h1>
            <h2 className="text-slate-200 text-xl mt-2 font-normal">
              Medior Web developer at Blindspot AI
            </h2>

            <p className="table w-[300px] font-normal mt-2.5 text-slate-400">
              I build accessible, inclusive products and
              digital experiences for the web
            </p>
          </div>

          <ul className="flex flex-row mt-5 fixed bottom-10">
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img
                  src="/assets/github.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img
                  src="/assets/htb.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </section>

        <section>
          <div className="md:mt-0 mt-10">
            <h4 className="text-slate-200 font-bold text-lg md:hidden">
              About
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
        </section>
      </div>
    </div>
  )
}
