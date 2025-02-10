import { auth } from '@/auth';
import Profile from '@/components/user/Profile';
import ProfileStartupCard from '@/components/user/ProfileStartupCard';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

    if (!user) return notFound();

    return (
        <section className='profile_container'>
            <Profile id={id} />

            <div className='flex-1 flex flex-col gap-5 lg:-mt-5'>
                <p className="text-30-bold">
                    {session?.id === id ? "Your" : "All"} Startups
                </p>

                <ul className='card_grid-sm'>
                    <ProfileStartupCard id={id} />
                </ul>
            </div>
        </section>
    )
}

export default page
