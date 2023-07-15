type TechnologyProps = {
    content: string
}

const Technology = (props: TechnologyProps) => {
    return (
        <span className="text-sky-500 bg-sky-500 bg-opacity-20 font-semibold text-[12px] p-2 rounded-full">
            {props.content}
        </span>
    )
}

Technology.defaultProps = {
    content: "Technology"
}

export default Technology;