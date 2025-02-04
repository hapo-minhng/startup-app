import Header from "../../components/Header";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  return (
    <>
      <Header heading={
        <>
          Pitch your startup, <br />connect with entrepreneurs
        </>
      } subHeading="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions" query={query} />
    </>
  );
}

