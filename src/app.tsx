import Typography from './atoms/Typography';

export function App() {
  return (
    <div className="font-main bg-slate-900 w-screen h-screen">
      <div className="p-20 grid grid-cols-1 md:grid-cols-2">
        <section>
          <Typography.Title content='Jakub Dorničák'/>
          <h2 className="text-slate-200 text-xl mt-2 font-normal">
            Medior Web developer at Blindspot AI
          </h2>

          <p className="table w-[300px] font-normal mt-2.5 text-slate-400">
            I build accessible, inclusive products and 
            digital experiences for the web
          </p>

          <ul className="flex flex-row mt-5">
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img 
                  src="/assets/github.svg" 
                  alt="LinkedIn"
                  className="w-10 h-10 hover:opacity-70 transition-opacity duration-300 ease-in-out"  
                />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img 
                  src="/assets/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-10 h-10 hover:opacity-70 transition-opacity duration-300 ease-in-out" 
                />
              </a>
            </li>
            <li className="mr-5">
              <a href="https://www.linkedin.com/in/jakub-dorničák-4b5a3a1b9/">
                <img 
                  src="/assets/htb.svg" 
                  alt="LinkedIn" 
                  className="w-10 h-10 hover:opacity-70 transition-opacity duration-300 ease-in-out" 
                />
              </a>
            </li>
          </ul>
        </section>
        
        <section>
          <div className="md:mt-0 mt-10">
            <h4 className="text-slate-200 font-bold text-lg">About</h4>
            <p className="text-slate-400">
              Jsem 18letý student a nadšenec do technologií. Své znalosti a dovednosti jsem vybudoval 
              v oblasti <label className="text-slate-200">Web developmentu</label>, konkrétně umím pracovat v TypeScriptu, JavaScriptu, Node.js, 
              Reactu, Next.js, Nest.js a s NoSQL databázema jako MongoDB a MySQL. Když jde o databáze, 
              nebojím se také použít jakýkoli ORM. Mám bohaté zkušenosti s verzovacím systémem GIT. 
              Mým cílem je neustále se posouvat vpřed a přinášet inovativní řešení v oblasti vývoje software. 
              S touhou učit se nové věci a neustále se zdokonalovat jsem připraven přijmout nové výzvy a 
              aktivně přispět k úspěchu projektu.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
