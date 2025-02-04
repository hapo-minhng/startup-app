interface HeaderProps {
    heading: React.ReactNode;
    subHeading: string;
}

export default function Header({ heading, subHeading }: HeaderProps) {
    return (
        <section className="pink_container">
            <h1 className="heading">{heading}</h1>

            <p className="sub-heading !max-w-3xl">{subHeading}</p>
        </section>
    )
}