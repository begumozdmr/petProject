import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <section className='home__header__container home__header__container--404'>
                <div className='page__container'>
                    <div className='page__row'>
                        <div className='page__gap'>
                            <div className='home__title__content home__title__content--not__found'>
                                <h1 className='not__found__title'>404</h1>
                                <h2 className='not__found__comment'>Oops! That Page Can’t Be Found.</h2>
                                <p className='not__found__paragraph'>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi massa congue porttitor eget urabitur.</p>
                                <div>
                                    <Button name={"Back To Home"} className={""} onClick={() => navigate("/")} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
