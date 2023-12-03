import React from 'react';
import { Link } from 'react-router-dom';
import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram } from '@tabler/icons-react';
import Button from './Button';

export default function Footer() {

    const handleClickScroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer__container">
            <div className='page__container'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='grid__4'>

                            <div className='home__page__content'>
                                <h2 className='footer__title'>Subscribe</h2>
                                <div className='footer__search__container'>
                                    <input type='text' placeholder='Search...'></input>
                                    <Button className={"pages__button--pink"} name={" Subscribe"} />
                                </div>
                            </div>

                            <div className='home__page__content'>
                                <h2 className='footer__title'>Quick Links</h2>
                                <Link to="/" onClick={handleClickScroll}>Home</Link>
                                <Link to="/about" onClick={handleClickScroll}>About Us</Link>
                                <Link to="/services" onClick={handleClickScroll}>Services</Link>
                                <Link to="/contact" onClick={handleClickScroll}>Contact</Link>
                                <Link to="/faq" onClick={handleClickScroll}>FAQ</Link>
                            </div>

                            <div className='home__page__content'>
                                <h2 className='footer__title'>Information</h2>
                                <Link to="#">Privacy Policy</Link>
                                <Link to="#">Term Of Use</Link>
                                <Link to="#">Help Center</Link>
                                <Link to="#">Disclaimer</Link>
                                <Link to="#">KVKK</Link>
                            </div>

                            <div className='home__page__content'>
                                <h2 className='footer__title'>Social Media</h2>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
