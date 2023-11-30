import React from 'react';

import { IconPawFilled } from '@tabler/icons-react';


export default function Home() {
    return (
        <>
            <section>
                <div className='home__header__container'>
                    <div className='page__container'>
                        <div className='page__row'>
                            <div className='home__title__content'>
                                <h1 className='home__title'>Love And Treat Your Pets Like Royalty</h1>
                                <p className='home__comment'>Lorem ipsum dolor sit amet consectetur adipiscing elitellus luctus necullam pulvinar dapibus maecenas maximus viverra malesuada.</p>
                                <div>
                                    <button className='pages__button'>
                                        <IconPawFilled />
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page__container'>
                <div className='page__row'>
                    <div className='social__media__button social__media__button--white social__media__button--width__175'></div>
                </div>
            </section>
        </>

    )
}
