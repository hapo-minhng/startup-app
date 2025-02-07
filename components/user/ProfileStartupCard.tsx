import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_ID_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import StartupCard, { StartupTypeCard } from '../startup-card/StartupCard';

const ProfileStartupCard = async ({ id }: { id: string }) => {
    const posts = await client.fetch(STARTUPS_BY_AUTHOR_ID_QUERY, { id });

  return (
      <>
          {posts.length > 0 ? (
              posts.map((startup: StartupTypeCard) => (
                  <StartupCard key={startup._id} post={startup} />
              ))
          ) : (
              <p className="no-result">No posts yet</p>
          )}
      </>
  )
}

export default ProfileStartupCard