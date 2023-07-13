import Technology from "../atoms/Technology";

type WorkProps = {
    fromDate: string;
    toDate: string;
    title: string;
    company: string;
    position: string;
    technologies: string[];
};

const Work = (props: WorkProps) => {
    return (
        <div className="flex group hover:cursor-pointer flex-row gap-10 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis cum voluptatem, 
                    sit eveniet in exercitationem, possimus blanditiis fugit maiores enim consequuntur corporis provident, 
                    vel officia. Praesentium qui alias laboriosam.
                </p>

                <div className="w-[200px] mt-4">
                    {props.technologies.map((technology) => (
                        <Technology content={technology}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Work;