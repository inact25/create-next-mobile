import React, {ReactNode} from 'react';
import MainHeader from "@/components/molecules/MainHeader";
import MainNav from "@/components/molecules/MainNav";

interface BaseLayoutProps {
    children: ReactNode;
    mode?: "header-only" | "nav-only" | "full" | "screen-only";
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, mode = "full"}) => {
    const mainClass = mode === "full"
        ? "pt-header-size sm:pt-header-max-size pb-footer-size sm:pb-footer-max-size"
        : mode === "header-only"
            ? "pt-header-size sm:pt-header-max-size"
            : mode === "nav-only" ? "pb-footer-size sm:pb-footer-max-size" : "";

    return (
        <div className="flex flex-col h-[100dvh] overflow-y-hidden">
            {(mode === "full" || mode === "header-only") && <MainHeader/>}
            <main className={mainClass}>{children}</main>
            {(mode === "full" || mode === "nav-only") && <MainNav/>}
        </div>
    );
};

export default BaseLayout;
