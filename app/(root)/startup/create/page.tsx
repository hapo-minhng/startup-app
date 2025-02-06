import { auth } from '@/auth'
import Header from '@/components/common/Header'
import StartupForm from '@/components/form/StartupForm'
import { redirect } from 'next/navigation'

import React from 'react'

const page = async () => {
    const session = await auth();

    if (!session) redirect("/");

    return (
        <>
            <Header heading="Submit your startup pitch" />

            <StartupForm />
        </>
    )
}

export default page