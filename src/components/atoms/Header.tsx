import React, {ReactNode} from 'react';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <header
            className="fixed top-0 left-0 w-full h-header-size min-h-header-min-size max-h-header-min-size sm:max-h-header-max-size bg-gray-800 text-white flex justify-center items-center z-50">
            {children}
        </header>
    );
};

export default Header;
