import { auth, signIn, signOut } from '@/auth'
import { LogOut, BadgePlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                                <BadgePlus className="size-6 sm:hidden" />
                            </Link>

                            <form action={async () => {
                                "use server";

                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type='submit'>
                                    <span className="text-red-500 max-sm:hidden">Logout</span>
                                    <LogOut className="size-6 text-red-500 sm:hidden" />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Avatar className="size-10">
                                    <AvatarImage
                                        src={session?.user?.image || "unknown-user.png"}
                                        alt={session?.user?.name || "unknown"}
                                    />
                                    
                                    <AvatarFallback>
                                        <img src='unknown-user.png' alt='Loading avatar' />
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn('github')
                        }}>
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar