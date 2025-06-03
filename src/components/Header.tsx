import {DotsNineIcon} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {Menu} from "./Menu";
import logo from "/assets/logo.png";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu on ESC key or outside click
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        const handleClick = (event: MouseEvent) => {
            if (
                !(event.target instanceof Element) ||
                (!event.target.closest(".menu") && !event.target.closest(".menu-icon"))
            ) {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <header
                className="bg-transparent fixed top-0 w-full flex justify-between items-center px-6 md:px-24 py-8 z-40">
                <a onClick={() => navigate("/")} className="navbar-brand cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        width="137"
                        height="39"
                        className="inline-block align-top"
                    />
                </a>
                <div
                    className="menu-icon cursor-pointer text-white text-4xl animate-pulse hover:text-[#972620] transition-colors"
                    onClick={toggleMenu}
                >
                    <DotsNineIcon size={32}/>
                </div>
            </header>
            <Menu isOpen={isMenuOpen} onClose={closeMenu}/>
        </>
    );
};
