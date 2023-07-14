import { useMemo } from "preact/hooks";
import Technology from "../atoms/Technology";

type WorkProps = {
    fromDate: string;
    toDate: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    hovered: boolean | null;
    onHoverStart: () => void;
    onHoverStop: () => void;
};

const Work = (props: WorkProps) => {
    const hov = useMemo(() => props.hovered, [props.hovered]);

    return (
        <div 
            className={`${hov === null ? "opacity-100" : (hov ? "opacity-100" : "opacity-40")} flex group hover:cursor-pointer flex-col lg:flex-row lg:gap-10 gap-4 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30`}
            onMouseEnter={props.onHoverStart}
            onMouseLeave={props.onHoverStop}
        >
            <section>
                <h4 className="w-[90px] text-slate-500 font-semibold text-sm">
                    {props.fromDate} - {props.toDate}
                </h4>
            </section>

            <section>
                <div className="flex flex-row group-hover:text-sky-500 text-slate-300">
                    <h2>{props.title}</h2>
                    <span className="text-sm ml-2 mr-2">•</span>
                    <h2>{props.company}</h2>
                </div>

                <p className="text-slate-400 mt-3">
                    {props.description}
                </p>

                <div className="w-fit gap-2 mt-4 flex flex-wrap">
                    {props.technologies.map((technology) => (
                        <Technology content={technology}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Work;