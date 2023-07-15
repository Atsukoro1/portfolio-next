type NavbarItemProps = {
    title: string;
    location: number;
};

const NavbarItem = (props: NavbarItemProps) => {
    return (
        <div
            onClick={() => {
                window.scrollTo({
                    top: props.location,
                    behavior: 'smooth'
                });
            }} 
            className="flex pb-1.5 hover:cursor-pointer flex-row group w-fit"
        >
            <div className="mt-3 duration-400  transition-all ease-in-out h-[1px] group-hover:w-15 w-8 group-hover:bg-slate-200 bg-slate-500 align-middle" />

            <h3 className="text-slate-400 ml-3 group-hover:text-slate-200">
                {props.title}
            </h3>
        </div>
    )
}

export default NavbarItem;