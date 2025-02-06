interface HeaderProps {
    tag?: string;
    heading: React.ReactNode;
    subHeading?: string;
    children?: React.ReactNode;
}

export default function Header({ tag, heading, subHeading, children }: HeaderProps) {
    return (
        <section className="pink_container !min-h-[230px]">
            <h4 className="tag">{tag}</h4>

            <h1 className="heading">{heading}</h1>

            <p className="sub-heading !max-w-3xl">{subHeading}</p>

            {children}
        </section>
    )
}