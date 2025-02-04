import SearchForm from "./SearchForm";

interface HeaderProps {
    heading: React.ReactNode;
    subHeading?: string;
    query?: string;
}

export default function Header({ heading, subHeading, query }: HeaderProps) {
    return (
        <section className="pink_container">
            <h1 className="heading">{heading}</h1>

            <p className="sub-heading !max-w-3xl">{subHeading}</p>

            <SearchForm query={query} />
        </section>
    )
}