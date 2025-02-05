import React from 'react'
import StartupCard, { StartupTypeCard } from './StartupCard'

interface StartupProps {
    query?: string,
    posts: []
}

const Startup = ({ query, posts }: StartupProps) => {
    // const posts = [{
    //     _createdAt: new Date(),
    //     views: 55,
    //     author: { _id: 1, name: "Adrian" },
    //     _id: 1,
    //     description: "This is a description.",
    //     image: "https://media.vneconomy.vn/images/upload/2025/01/08/boston-dynamics-atlas.jpg",
    //     category: "Robots",
    //     title: "We Robots",
    // }]

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