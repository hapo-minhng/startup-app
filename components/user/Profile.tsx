import { client } from '@/sanity/lib/client'
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import React from 'react'

const Profile = async ({ id }: { id: string }) => {
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })

    return (
        <div className='profile_card'>
            <div className='profile_title'>
                <h3 className='uppercase text-center text-24-black line-clamp-1'>
                    {user.name}
                </h3>
            </div>

            <Image
                src={user.image}
                alt={user.name}
                width={220}
                height={220}
                className="profile_image"
            />

            <p className='text-30-extrabold mt-7 text-center'>@{user.username}</p>

            <p className='mt-1 text-center text-14-normal'>{user?.bio ? user.bio : "Nothing to show here"}</p>
        </div>
    )
}

export default Profile