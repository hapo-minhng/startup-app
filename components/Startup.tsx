import React from 'react'
import StartupCard, { StartupTypeCard } from './StartupCard'

interface StartupProps {
    query?: string,
    posts: []
}

const Startup = ({ query, posts }: StartupProps) => {
    return (
        <section className='section_container'>
            <p className='text-30-semibold'>
                {query ? `Search results for "${query}"` : "Recommended Startups"}
            </p>

            <ul className='mt-7 card_grid'>
                {posts?.length > 0 ? (
                    posts.map((post: StartupTypeCard) => (
                        <StartupCard key={post?._id} post={post} />
                    ))
                ) : (
                    <p className='no-results'>No startups found</p>
                )}
            </ul>
        </section>
    )
}

export default Startup