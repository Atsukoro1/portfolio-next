import { JSX } from "preact/jsx-runtime";

interface BaseTypography {
    children: (string | JSX.Element)[] | string | JSX.Element;
}

type TextProps = BaseTypography & {
    highlighted?: boolean;
}

type TextBlockProps = BaseTypography & {
    top?: boolean;
    bottom?: boolean;
}

export const T = ({ highlighted, children }: TextProps) => {
    return (
        <p className={`${highlighted ? "text-slate-100" : "text-slate-400"} inline`}>
            {children}
        </p>
    )
}

export const TextBlock = ({ children, top, bottom }: TextBlockProps) => {
    return (
        <div className={`mb-3 text-slate-400 ${top ? "mt-0" : "mt-3"} ${bottom ? "mb-0" : "mb-3"}`}>
            {children}
        </div>
    )
}