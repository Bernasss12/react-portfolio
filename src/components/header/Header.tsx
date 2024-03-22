import React from "react";

const Header = () => {
    return (
        <header
            className="z-0 sticky top-0 flex flex-row items-center justify-between px-4 py-2 uppercase shadow-xl bg-primary min-vh-100">
            <Brand/>
            <Toggler/>
            <MainNavigation/>
        </header>
    );
};

function Brand() {
    return (
        <span
            className="rounded px-1 text-xl font-bold uppercase tracking-wide bg-secondary text-primary font-source-sans-3">
                Bernardo Antunes
        </span>
    )
}

const Toggler = () => {
    const toggleMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (event) => {
        const button = event.currentTarget;
        const menu = document.getElementById("menu");
        menu?.classList.toggle("hidden");
        menu?.classList.toggle("flex");
        button?.classList.toggle("toggle-btn");
        return;
    }

    return (
        <button
            id="open-menu-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMenu}
        >
            <div
                className="
                absolute top-4 -mt-0.5 h-[3px] w-[24px] rounded bg-secondary transition-all duration-500

                before:absolute before:h-[3px] before:w-[24px] before:-translate-x-[12px] before:-translate-y-[8px]
                before:rounded before:bg-secondary before:transition-all before:duration-500 before:content-['']

                after:absolute after:h-[3px] after:w-[24px] after:-translate-x-[12px] after:translate-y-[8px]
                after:rounded after:bg-secondary after:transition-all after:duration-500 after:content-['']
                ">
            </div>
        </button>
    );
}

function MainNavigation() {
    const menuItems: { text: string; href: string }[] = [
        {text: 'Portfolio', href: '#portfolio'},
        {text: 'About', href: '#about'},
        {text: 'Testimonials', href: '#testimonials'},
        {text: 'Contact', href: '#contact'},
        {text: 'Badge', href: 'https://badge.bernasss12.dev'},
    ];

    return (
        <nav className="
            fixed top-0 left-0 right-0 h-full -z-50 font-bold
            bg-black bg-opacity-30 backdrop-blur
            hidden flex-col pt-12 items-center justify-start gap-0.5

            transition-all duration-500 ease-linear

            sm:left-1/2 sm:shadow-2xl sm:items-end sm:pr-4

            md:flex-row md:relative md:bg-transparent
            md:shadow-none md:backdrop-blur-none md:pt-0
            md:flex md:left-0 md:h-auto

            md:space-x-4
        " aria-label="main-navigation" id="menu">
            {
                menuItems.map((item, index) => (
                    <a key={index} href={item.href} className="
                        transition duration-300 group active:stroke-secondary px-2 active:stroke-1 rounded-full
                    ">
                        {item.text}
                        <span
                            className="block max-w-0 rounded transition-all duration-500 bg-secondary h-0.5 group-hover:max-w-full group-active:max-w-full"></span>
                    </a>
                ))
            }
        </nav>
    )
}

export default Header;