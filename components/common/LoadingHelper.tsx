import React from 'react'
import Spinner from './Spinner'

const LoadingHelper = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-500/40">
                    <Spinner />
                </div>
            )}
        </>

    )
}

export default LoadingHelper