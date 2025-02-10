import React, { Suspense } from 'react'
import { Author, Startup } from '@/sanity/type'
import Link from 'next/link';
import Image from 'next/image';
import markdownit from "markdown-it"
import View from './View';
import SimilarStartup from './SimilarStartup';
import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries';

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author }

const Container = async ({ post }: { post: StartupTypeCard }) => {
    const { author, _id, image, category } = post;

    const md = markdownit();

    const parsedContent = md.render(post?.pitch || "");

    return (
        <section className='section_container'>
            <img src={image || "/default-featured-image.png"} alt="thumbnail" className='w-full h-auto rounded-xl' />

            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                <div className='flex-between gap-5'>
                    <Link href={`/user/${author?._id}`} className='flex gap-2 items-center mb-3'>
                        <Image src={author?.image || "/unknown-user.png"} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg' />

                        <div>
                            <p className='text-20-medium'>{author?.name}</p>
                            <p className='text-16-medium !text-black-300'>@{author?.username}</p>
                        </div>
                    </Link>

                    <p className='category-tag'>{post.category}</p>
                </div>

                <h5 className='text-30-bold'>Pitch Details</h5>
                {parsedContent ? (
                    <article className='prose max-w-4xl font-work-sans break-all' dangerouslySetInnerHTML={{ __html: parsedContent }} />
                ) : (
                    <p className='no-result'>No details provided</p>
                )}
            </div>

            <hr className='divider' />

            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                <SimilarStartup category={category} id={_id} />

                <View id={_id} />
            </div>
        </section>
    )
}

export default Container