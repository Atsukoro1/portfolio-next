import Technology from "../atoms/Technology";

type ProjectProps = {
    imagePath: string;
    title: string;
    href: string;
    description: string;
    technologies: string[];
};

const Project = (props: ProjectProps) => {
    return (
        <a target="blank" href={props.href}>
            <div className={`flex group hover:cursor-pointer flex-col lg:flex-row lg:gap-10 gap-4 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30`}>
                <section>
                    <img
                        src={`/projects/${props.imagePath}`}
                        alt="Project"
                        className="rounded-lg w-[500px] h-[150px] object-cover"
                    />
                </section>

                <section>
                    <div className="flex flex-row">
                        <h2 className="group-hover:text-sky-500 text-slate-300">
                            {props.title}
                        </h2>
                        <img className="h-4 ml-2 mt-1 w-4" src="icons/link.svg" />
                    </div>

                    <p className="text-slate-400 mt-3">{props.description}</p>

                    <div className="w-fit gap-2 mt-4 flex flex-wrap">
                        {props.technologies.map((technology) => (
                            <Technology content={technology} />
                        ))}
                    </div>
                </section>
            </div>
        </a>
    )
};

export default Project;