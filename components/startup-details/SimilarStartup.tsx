import React from 'react'
import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries'
import StartupCard, { StartupTypeCard } from '../startup-card/StartupCard';

interface SimilarStartupProps {
  category?: string;
  id: string;
}

const SimilarStartup = async ({ category, id }: SimilarStartupProps) => {
  const posts = await client.fetch(STARTUPS_BY_CATEGORY_QUERY, { category, id });

  return (
    <>
      <h5 className='text-30-bold'>Similar {posts > 1 ? "startups" : "startup"}</h5>
      
      <ul className='mt-7 card_grid'>
        {posts.length > 0 ? (
          posts.map((startup: StartupTypeCard) => (
            <StartupCard key={startup._id} post={startup} />
          ))
        ) : (
          <p className="no-result">No posts yet</p>
        )}
      </ul>
    </>
  )
}

export default SimilarStartup