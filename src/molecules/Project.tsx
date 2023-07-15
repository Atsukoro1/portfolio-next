import { useMemo } from "preact/hooks";
import Technology from "../atoms/Technology";

type ProjectProps = {
    imagePath: string;
    title: string;
    href: string | null;
    description: string;
    technologies: string[];
    hovered: boolean | null;
    onHoverStart: () => void;
    onHoverStop: () => void;
};

const Project = (props: ProjectProps) => {
    const hov = useMemo(() => props.hovered, [props.hovered]);

    return (
        <a target="blank" {...props.href && { href: props.href }}>
            <div 
                className={`${hov === null ? "opacity-100" : (hov ? "opacity-100" : "opacity-40")} flex group ${props.href && "hover:cursor-pointer"} flex-col lg:flex-row lg:gap-10 gap-4 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30`}
                onMouseEnter={props.onHoverStart}
                onMouseLeave={props.onHoverStop}
            >
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
                        {props.href && (
                            <img className="h-4 ml-2 mt-1 w-4" src="icons/link.svg" />
                        )}
                    </div>

                    <p className="text-slate-400 text-sm mt-3">{props.description}</p>

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