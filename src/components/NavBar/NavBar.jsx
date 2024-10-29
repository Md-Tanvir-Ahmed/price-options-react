import React, { useState } from 'react';
import Link from '../link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";


const NavBar = () => {

    const [open,setOpen ] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/profile/:userId", name: "User Profile" },
    ];





    return (
        <nav className="text-black bg-blue-200 p-4">
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open=== true? <RxCross1 className="text-2xl"></RxCross1> 
                    :            <RiMenu2Line className="text-2xl"></RiMenu2Line>

                }
            </div>
            <ul className={`md:flex absolute duration-3000
                ${open? 'top-14': '-top-60'} bg-blue-200 px-6 shadow-lg md:shadow-none md:static`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>

        </nav>
    );
};

export default NavBar;