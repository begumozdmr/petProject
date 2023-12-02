import React from 'react';

interface PropsType {
    name: string,
    path: string
}

export default function Header({ name, path }: PropsType) {
    return (
        <section className={`home__header__container home__header__container--${path}`}>
            <div className='page__container'>
                <div className='page__row'>
                    <div className='page__gap'>
                        <div className='home__title__content'>
                            <h1 className='home__title'>{name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
