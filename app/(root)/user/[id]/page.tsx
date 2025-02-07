import { auth } from '@/auth';
import Profile from '@/components/user/Profile';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

    if (!user) return notFound();

    return (
        <>
            <Profile id={id} />
        </>
    )
}

export default page
