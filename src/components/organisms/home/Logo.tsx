import React from 'react';

const Logo = () => {
    return (
        <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width={75} height={75} className='m-auto mb-3 animate-spin'
                 src="https://blog.javapixa.com/wp-content/uploads/2024/06/logo_symbol.png" alt=""/>

        </div>
    );
};

export default Logo;