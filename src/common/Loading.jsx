import React from 'react';

const Loading = () => {
    return (
        <div>
            <p className='text-5xl text-red-500'>Loading...</p>
            <div className="w-40 mx-auto  h-40 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
        </div>
    );
};

export default Loading;