import { Fragment } from "react";
import { navItems } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelectorAll('section');
            let current = 'home';

            section.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Fragment>
            <nav className="fixed bg-transparent top-0 w-full py-2 z-50 backdrop-blur-sm border-b border-white/20 px-3 transition-all">
                <div className="container mx-auto flex items-center justify-between px-6">
                    <div className="text-2xl text-outline font-bold">Coder</div>
                    <ul className="hidden md:flex space-x-8 text-white text-sm font-light uppercase">
                        {
                            navItems.map((item) => (
                                <li key={item.id} className={`hover:text-teal-500 cursor-pointer transition-colors ${activeSection === item.id ? 'text-teal-400' : ''}`}>
                                    {item.label}
                                </li>
                            ))
                        }
                    </ul>
                    <button className="ml-4 px-5 py-1 rounded-full bg-linear-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all">Hire me</button>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;