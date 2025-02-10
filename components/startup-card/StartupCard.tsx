"use client"

import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Author, Startup } from '@/sanity/type'
import Spinner from '../common/Spinner'
import LoadingHelper from '../common/LoadingHelper'

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author }

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { _createdAt, views, author, title, category, _id, image, description } = post;

    const [isLoadingButton, setIsLoadingButton] = React.useState(false);
    const [isLoadingCard, setIsLoadingCard] = React.useState(false);

    const handleDetailsClick = () => {
        setIsLoadingButton(true);
    }

    const handleCardClick = () => {
        setIsLoadingCard(true);
    }

    return (
        <li className={`startup-card group relative ${isLoadingCard ? "pointer-events-none" : ""}`}>
            <LoadingHelper isLoading={isLoadingCard} />

            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(_createdAt)}
                </p>

                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${author?._id}`} onClick={handleCardClick}>
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>

                    <Link href={`/startup/${_id}`} onClick={handleCardClick}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>

                <Link href={`/user/${author?._id}`} onClick={handleCardClick}>
                    <Image src={author?.image || "/unknown-user.png"} alt='placeholder' width={48} height={48} className='rounded-full' />
                </Link>
            </div>

            <Link href={`/startup/${_id}`} onClick={handleCardClick}>
                <p className='startup-card_desc'>{description}</p>

                <img src={image || "/default-featured-image.png"} alt='placeholder' className='startup-card_img' />
            </Link>

            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>

                <Button className={`startup-card_btn ${isLoadingButton ? "pointer-events-none" : ""}`} asChild onClick={handleDetailsClick}>
                    <Link href={`/startup/${_id}`}>
                        {isLoadingButton ? <Spinner /> : 'Details'}
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard