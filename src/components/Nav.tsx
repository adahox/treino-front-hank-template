import React from "react";
import Logo from '../components/Logo'

export function Nav() {
    const links: string[] = [
        'Home',
        'About',
        'Shop',
        'Blog',
        'Contact Us'
    ];

    function showResponsiveMenu(isChecked: Boolean) {
        if (isChecked) {
            document.getElementById('list-menu')?.classList.remove('hidden');
            document.getElementById('list-menu')?.classList.add('absolute', 'left-0', 'bg-primary-200', 'pr-5', 'w-full', 'py-2');
        } else {
            document.getElementById('list-menu')?.classList.add('hidden');
            document.getElementById('list-menu')?.classList.remove('absolute', 'left-0', 'bg-primary-200', 'w-full', 'py-2' );
        }
    }
    
    return (
        <nav  id="navbar" className="flex flex-row justify-between items-center px-4">
            <Logo />
            <div>

                <div id="menu-responsive" className="w-9 h-9 relative justify-center items-center flex flex-row sm:hidden">
                    <input type="checkbox" id="toogle-menu" className="z-10 absolute hidden bg-primary-800 text-primary-800 h-9 w-9" onChange={(ev) => showResponsiveMenu(ev.target.checked) }/>
                    <label htmlFor="toogle-menu" id="menu-buttom" className="bg-primary-700 rounded-lg block w-full h-2 before:justify-end after:rounded-lg before:self-end before:h-2 before:w-full after:w-full after:h-2 after:bg-primary-700 before:rounded-lg before:bg-primary-800 before:flex after:content-[' '] after:text-red-700 after:top-0 before:bottom-0 before:content-[' '] before:text-red-700 after:absolute before:absolute"></label>
                </div>
                <ul id="list-menu" className="hidden sm:flex flex-row">
                {
                    links.map((link:string, index: number) => (<li key={index} className="px-3 font-medium">{link}</li>))
                }
                </ul>
            </div>
        </nav>
    );
}