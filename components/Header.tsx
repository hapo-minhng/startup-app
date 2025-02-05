import SearchForm from "./SearchForm";

interface HeaderProps {
    tag?: string;
    heading: React.ReactNode;
    subHeading?: string;
    query?: string;
}

export default function Header({ tag, heading, subHeading, query }: HeaderProps) {
    return (
        <section className="pink_container">
            <h4 className="tag">{tag}</h4>

            <h1 className="heading">{heading}</h1>

            <p className="sub-heading !max-w-3xl">{subHeading}</p>

            <SearchForm query={query} />
        </section>
    )
}