import { UserButton } from '@clerk/nextjs'
import React from 'react'

const MyHomePage = () => {
    return (
        <>
            <div>MyHomePage</div>
            <UserButton afterSignOutUrl="/" />
        </>
    )
}

export default MyHomePage