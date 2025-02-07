import Startup from "@/components/startup-card/Startup";
import Header from "../../components/common/Header";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import SearchForm from "@/components/search/SearchForm";

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
      } subHeading="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions">
        <SearchForm query={query} />
      </Header>

      <Startup query={query} posts={posts} />

      <SanityLive />
    </>
  );
}

