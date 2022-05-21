import { BsTelephone } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { useState, useEffect } from "react"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [y, setY] = useState(null);

    useEffect(() => {
        setY(window.scrollY);

        const handleNavigation = e => {
            const window = e.currentTarget;
            setY(window.scrollY);

        };

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, []);

    return (
        <div className={` ${y > 50 && 'mt-[5.1rem]'}`}>
            <div className="container-fluid hidden md:flex bg-[#e9ecef] p-2 py-3 text-sm space-x-5 text-muted tracking-widest">
                <div className=" flex items-center">
                    <BsTelephone className="me-2" />
                    020-800-456-747
                </div>
                <div className="border-l border-gray-500" />
                <div>
                    Start biding and live your life with your car
                </div>
            </div>
            <div className="container-xxl">
                <div className={`navbar navbar-expand-lg navbar-light container-fluid p-2 ${y > 50 && 'fixed-top bg-white shadow-[2px_1px_10px_4px_rgba(0,0,0,0.3)]'}`}>
                    <div className="navbar-brand cursor-pointer" >
                        <Link to={'/'}>
                            <img src={logo} className='w-12' />
                            {/* <p className="uppercase tracking-[0.8rem] text-2xl font-bold">Nilami.</p> */}
                        </Link>
                    </div>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse lg:flex lg:justify-end" id="navbarSupportedContent">
                        <div className="navbar-nav mb-2 mb-lg-0 flex items-center">
                            <li className="nav-item">
                                <Link to={'/search'}>
                                    <p className="nav-link tracking-widest cursor-pointer">Search</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/auctions'}>
                                    <p className="nav-link tracking-widest cursor-pointer">Auctions</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'}>
                                    <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer">Login</p>
                                </Link>
                            </li>
                            <li>
                                <div className="flex text-2xl space-x-7 my-3 lg:mx-6">
                                    <Link to={'/profile'}>
                                        <FaRegUserCircle className="cursor-pointer" />
                                    </Link>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar