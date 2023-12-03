import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram, IconMenu2 } from '@tabler/icons-react';

interface NavbarLinksType {
    id: number,
    name: string,
    path: string
};

const NavbarLinksData: NavbarLinksType[] = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About Us",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 5,
        name: "FAQ",
        path: "/faq"
    },
];

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [responsiveMenuControl, setResponsiveMenuControl] = useState<boolean>(false);

    const handleClickResponsiveMenu = () => {
        setResponsiveMenuControl(!responsiveMenuControl);
    };

    const handleLinkClick = (index: number) => {
        setActiveIndex(index === activeIndex ? 0 : index);
        localStorage.setItem("path", String(index));
        setResponsiveMenuControl(false)
    };

    React.useEffect(() => {
        const storagePath = Number(localStorage.getItem("path"));
        const linkItem = document.querySelectorAll(".navbar__item");

        if (!isNaN(storagePath) && storagePath && storagePath < linkItem.length) {
            linkItem.forEach((index) => {
                index.classList.remove("active");
            });
            linkItem[storagePath - 1].classList.add("active");
        }
    }, [activeIndex])

    return (
        <header>
            <nav>
                <section className='navbar__container'>
                    <div className='navbar__row'>
                        <div className='navbar__content'>
                            <Link to='/' className='navbar__logo' onClick={() => handleLinkClick(1)}>
                                <img src={require("../img/pet__logo.png")} alt='logo' className='logo'></img>
                                <h1>SANUM</h1>
                            </Link>

                            <ul className='navbar__items'>
                                {
                                    NavbarLinksData.map((index: NavbarLinksType) => {
                                        return (
                                            <li key={index.id} className={`navbar__item ${index.id === activeIndex ? "active" : ""}`}>
                                                <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='navbar__logo'>
                                <div className='social__media__button social__media__button--grey '>
                                    <Link to="/#">
                                        <IconBrandFacebookFilled width={"18px"} height={"18px"} />
                                    </Link>
                                </div>
                                <div className='social__media__button social__media__button--pink'>
                                    <Link to="/#">
                                        <IconBrandTwitterFilled width={"18px"} height={"18px"} />
                                    </Link>
                                </div>
                                <div className='social__media__button social__media__button--grey'>
                                    <Link to="/#">
                                        <IconBrandInstagram />
                                    </Link>
                                </div>

                                <div className='social__media__button social__media__button--pink social__media__button--responsive__menu' onClick={handleClickResponsiveMenu}>
                                    <IconMenu2 width={"18px"} height={"18px"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`responsive__navbar__menu ${responsiveMenuControl ? "active" : ""}`}>
                        <div className='page__container'>
                            <div className='page__row'>
                                <ul className='navbar__items navbar__items--responsive'>
                                    {
                                        NavbarLinksData.map((index: NavbarLinksType) => {
                                            return (
                                                <li key={index.id} className={`navbar__item ${index.id === activeIndex ? "active" : ""}`}>
                                                    <Link to={index.path} onClick={() => handleLinkClick(index.id)}>{index.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
    )
}
