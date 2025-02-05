import Startup from "@/components/Startup";
import Header from "../../components/Header";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const params = { search: query || null }; 

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });

  return (
    <>
      <Header tag="Pitch, Vote and Grow" heading={
        <>
          Pitch your startup, <br />connect with entrepreneurs
        </>
      } subHeading="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions" query={query} />

      <Startup query={query} posts={posts} />

      <SanityLive />
    </>
  );
}

