import React from 'react';
import { IconPawFilled, IconBuildingCommunity, IconPhone } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface DaysType {
    id: number,
    name: string,
    clock: string
};

const DaysData: DaysType[] = [
    {
        id: 1,
        name: "Monday",
        clock: "8am - 9pm"
    },
    {
        id: 2,
        name: "Tuesday",
        clock: "8am - 9pm"
    },
    {
        id: 3,
        name: "Wednesday",
        clock: "8am - 9pm"
    },
    {
        id: 4,
        name: "Thursday",
        clock: "8am - 9pm"
    },
    {
        id: 5,
        name: "Friday",
        clock: "8am - 9pm"
    },
    {
        id: 6,
        name: "Saturday",
        clock: "8am - 9pm"
    },
    {
        id: 7,
        name: "Sunday",
        clock: "Closed"
    }
];

interface ChooseType {
    id: number,
    name: string,
    percent: string,
    color: string,
};

const ChooseData: ChooseType[] = [
    {
        id: 1,
        name: "Happy Pets",
        percent: "92%",
        color: "",
    },
    {
        id: 2,
        name: "Positive Reviews",
        percent: "84%",
        color: "--grey",
    },
    {
        id: 3,
        name: "Quality & Safetys",
        percent: "96%",
        color: "--green",
    }
];

export default function Home() {

    const navigate = useNavigate();

    React.useEffect(() => {
        gsap.fromTo(".home__title",
            {
                x: -100,
                opacity: 0
            },
            {
                delay: 0.8,
                x: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }
        )

        gsap.fromTo(".home__comment",
            {
                y: 100,
                opacity: 0
            },
            {
                delay: 0.8,
                y: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }
        )

        gsap.fromTo(".button",
            {
                y: 80,
                opacity: 0
            },
            {
                delay: 1.6,
                y: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }
        )

        gsap.fromTo("#section-1",
            {
                y: 500,
                opacity: 0,
            },
            {
                duration: 1.5,
                scrollTrigger: {
                    trigger: document.querySelector("body"),
                    start: "top",
                    toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }
        )

    }, []);

    return (
        <>
            <section>
                <div className='home__header__container'>
                    <div className='page__container'>
                        <div className='page__row'>
                            <div className='home__title__content'>
                                <h1 className='home__title'>Love And Treat Your Pets Like Royalty</h1>
                                <p className='home__comment'>Lorem ipsum dolor sit amet consectetur adipiscing elitellus luctus necullam pulvinar dapibus maecenas maximus viverra malesuada.</p>
                                <div className='button'>
                                    <Button className={""} name={"Get Started"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page__container' id='section-1'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='grid__4'>

                            <div className='home__page__content'>
                                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cat" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <defs>
                                            <linearGradient id="myGradient" gradientTransform="rotate(90)">
                                                <stop offset="0%" stopColor="rgb(105, 136, 145)" />
                                                <stop offset="100%" stopColor="rgb(187, 162, 156)" />
                                            </linearGradient>
                                        </defs>
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" stroke="url(#myGradient)" />
                                        <path d="M2 16h5l-4 4" stroke="url(#myGradient)" />
                                        <path d="M22 16h-5l4 4" stroke="url(#myGradient)" />
                                        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" stroke="url(#myGradient)" />
                                        <path d="M9 11v.01" stroke="rgb(105, 136, 145)" />
                                        <path d="M15 11v.01" stroke="rgb(105, 136, 145)" />
                                    </svg>
                                </div>
                                <h2>Pet Training</h2>
                                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                            </div>

                            <div className='home__page__content'>
                                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-heart" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" stroke="url(#myGradient)" />
                                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" stroke="url(#myGradient)" />
                                        <path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 0 -2.632a1.775 1.775 0 0 0 -2.56 0l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 0a1.899 1.899 0 0 0 0 2.632l2.738 2.825z" stroke="url(#myGradient)" />
                                    </svg>
                                </div>
                                <h2>Pet Grooming</h2>
                                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                            </div>

                            <div className='home__page__content'>
                                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scissors" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="url(#myGradient)" />
                                        <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="url(#myGradient)" />
                                        <path d="M8.6 8.6l10.4 10.4" stroke="url(#myGradient)" />
                                        <path d="M8.6 15.4l10.4 -10.4" stroke="url(#myGradient)" />
                                    </svg>
                                </div>
                                <h2>Care Service</h2>
                                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                            </div>

                            <div className='home__page__content'>
                                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-heart" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6" stroke="url(#myGradient)" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304" stroke="url(#myGradient)" />
                                        <path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z" stroke="url(#myGradient)" />
                                    </svg>
                                </div>
                                <h2>Pet Adoption</h2>
                                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page__container' id='section-1'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='grid__2'>
                            <div className='home__page__content'>
                                <h1>Our Company</h1>
                                <p className='paragraph__explanation'>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra. Quisque malesuada enim sed aliquam feugiat. Curabitur id sem eu velit eleifend tincidunt.</p>
                                <p className='paragraph__explanation'>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa at dui congue porttitor eget nec magna.</p>

                                <div className='grid__2 grid__2--gap'>
                                    <div className='home__page__content'>
                                        <IconBuildingCommunity width={"60px"} height={"60px"} stroke={"1px"} />
                                        <h2>Our Office</h2>
                                        <p>Dewi Sri St. 2891,</p>
                                        <p>Denpasar, Bali</p>
                                    </div>

                                    <div className='home__page__content'>
                                        <IconPhone width={"60px"} height={"60px"} stroke={"1px"} />
                                        <h2>Our Contact</h2>
                                        <p>(+62) 8896-2220</p>
                                        <p>petzy@domain.com</p>
                                    </div>
                                </div>

                                <div className='grid__2 grid__2--gap'>
                                    <Button className={""} name={"Get In Touch"} />
                                    <Button className={"pages__button--transparent"} name={"Contact Us"} onClick={() => navigate('/contact')} />
                                </div>
                            </div>

                            <div className='images__container'>
                                <img src={require("../img/cat-1.jpg")} alt='cat-1'></img>
                                <img src={require("../img/cat-2.jpg")} alt='cat-2'></img>
                                <img src={require("../img/cat-3.jpg")} alt='cat-3'></img>
                                <img src={require("../img/cat-4.jpg")} alt='cat-4'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page__container' id='section-1'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='grid__4 grid__4--contiguous'>
                            <div className="card">
                                <div className='card__image'>
                                    <img src={require("../img/sans.jpg")} alt='sans'></img>
                                    <div className='card__image__title'>
                                        <h1>Donate and support us</h1>
                                        <Button className={"pages__button--white"} name={"Donate Now"} />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className='card__header'>
                                    <img src={require("../img/cat-5.jpg")} alt='cat-5'></img>
                                    <h2>Adot a Cat</h2>
                                    <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus.</p>
                                </div>
                                <div className='card__footer card__footer--pink'>
                                    <IconPawFilled />
                                    <p>See The Cat</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className='card__header'>
                                    <img src={require("../img/dog-1.jpg")} alt='dog-1'></img>
                                    <h2>Adopt a Dog</h2>
                                    <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus.</p>
                                </div>
                                <div className='card__footer card__footer--green'>
                                    <IconPawFilled />
                                    <p>See The Dog</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className='card__header'>
                                    <img src={require("../img/other__pet.jpg")} alt='other__pet'></img>
                                    <h2>Other Pets</h2>
                                    <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus.</p>
                                </div>
                                <div className='card__footer card__footer--grey'>
                                    <IconPawFilled />
                                    <p>See The Pets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page__container' id='section-1'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='grid__2'>
                            <div className='home__page__content'>
                                <h1>Why Choose Us</h1>
                                <p className='paragraph__explanation'>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra. Quisque malesuada enim sed aliquam feugiat. Curabitur id sem eu velit eleifend tincidunt.</p>
                                <p className='paragraph__explanation'>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa at dui congue porttitor eget.</p>
                                {
                                    ChooseData.map((index: ChooseType) => {
                                        return (
                                            <div className='progress__bar__container' key={index.id}>
                                                <div className='progress__bar__title'>
                                                    <h3>{index.name}</h3>
                                                    <h3>{index.percent}</h3>
                                                </div>
                                                <div className={`progress__bar progress__bar${index.color}`} style={{ width: `${index.percent}` }}></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='home__page__content'>
                                <h1>Opening Hours</h1>
                                {
                                    DaysData.map((index: DaysType) => {
                                        return (
                                            <div className='progress__bar__container' key={index.id}>
                                                <div className='progress__bar__title'>
                                                    <h3>{index.name}</h3>
                                                    <h4 className={index.id === 7 ? "error" : ""}>{index.clock}</h4>
                                                </div>
                                                <hr />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home__header__container home__header__container--image'>
                <div className='page__container'>
                    <div className='page__row'>
                        <div className='page__gap'>
                            <div className='home__page__content'>
                                <h1 className='page__title'>Professional Veterinary Care, Reasonable Price And Guaranteed Quality</h1>
                                <p className='paragraph__explanation paragraph__explanation--white'>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa at dui congue porttitor eget.</p>
                                <Button className={"pages__button--pink"} name={"View More"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
