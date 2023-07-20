type SocialProps = {
    href: string;
    src: string;
    alt: string;
};

const Social = ({ href, src, alt }: SocialProps) => {
    return (
        <a target="about" href={href}>
            <img
                src={src}
                alt={alt}
                className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
            />
        </a>
    )
}

export default Social;