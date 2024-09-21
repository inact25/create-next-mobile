import React from 'react';
import MainHeader from "@/components/molecules/MainHeader";
import MainNav from "@/components/molecules/MainNav";

const BaseLayout: React.FC = ({children}) => {
    return (
        <div className="flex flex-col h-[100dvh] overflow-y-hidden">
            <MainHeader/>
              <main className="pt-header-size sm:pt-header-max-size pb-footer-size sm:pb-footer-max-size">{children}</main>
            <MainNav/>
        </div>
    );
};

export default BaseLayout;
