import React from 'react';
import Link from "next/link";

const Linklist = () => {
    return (
        <div>
            <div className="sample-page my-8 flex gap-5 justify-center">
                <Link href={'/'} className="px-5 py-2 bg-gray-600 rounded">Home</Link>
                <Link href={''} className="px-5 py-2 bg-gray-600 rounded">About</Link>
                <Link href={''} className="px-5 py-2 bg-gray-600 rounded">Doc</Link>
            </div>
        </div>
    );
};

export default Linklist;