import React from 'react';

const Navbar: React.FC = ({children}) => {
    return (
        <nav
            className="fixed bottom-0 left-0 w-full h-footer-size max-h-footer-min-size sm:max-h-footer-max-size bg-gray-800 text-white flex justify-center items-center z-50">
            {children}
        </nav>
    );
};

export default Navbar;
