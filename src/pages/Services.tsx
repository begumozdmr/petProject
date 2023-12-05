import React from 'react';
import Button from 'components/Button';
import Header from 'components/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface ReferencesType {
  id: number,
  path: string
};

const ReferencesData: ReferencesType[] = [
  {
    id: 1,
    path: "ref-1.png"
  },
  {
    id: 2,
    path: "ref-2.png"
  },
  {
    id: 3,
    path: "ref-3.png"
  },
  {
    id: 4,
    path: "ref-4.png"
  }
];

export default function Services() {

  React.useEffect(() => {
    gsap.fromTo(".home__title",
      {
        x: -20,
        opacity: 0
      },
      {
        delay: 0.8,
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut
      }
    )

    gsap.fromTo("#section-1",
      {
        y: 500,
        opacity: 0
      },
      {
        duration: 2,
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
      <Header name={"Services"} path={"services"} />

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>
              <h1>Premium Service</h1>
              <p>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra quisque.  </p>
            </div>
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
                <Button className={"pages__button--transparent"} name={"Read More"} />
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
                <Button className={"pages__button--transparent"} name={"Read More"} />
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
                <Button className={"pages__button--transparent"} name={"Read More"} />
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
                <Button className={"pages__button--transparent"} name={"Read More"} />
              </div>

              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-horse-toy" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" stroke="url(#myGradient)" />
                    <path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" stroke="url(#myGradient)" />
                    <path d="M5 18.5l2 -9.5" stroke="url(#myGradient)" />
                    <path d="M8 20l2 -5h4l2 5" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Pet Playground</h2>
                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                <Button className={"pages__button--transparent"} name={"Read More"} />
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
                <h2>Pet Boarding</h2>
                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                <Button className={"pages__button--transparent"} name={"Read More"} />
              </div>

              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="url(#myGradient)" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="url(#myGradient)" />
                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Pet Shuttle</h2>
                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                <Button className={"pages__button--transparent"} name={"Read More"} />
              </div>

              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Pet Breeding</h2>
                <p>Vivamus ornare elementum aliquam bumhen drerit aliquet enim cursus vestibulum.</p>
                <Button className={"pages__button--transparent"} name={"Read More"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>

            <div className='home__page__content'>
              <h1>We Love Pets & Care For Them</h1>
              <p>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra quisque.</p>
            </div>

            <div className='grid__3'>
              <div className='card'>
                <div className='card__image'>
                  <img src={require("../img/cat-6.jpg")} alt='cat-7'></img>
                  <div className='card__image__title'>
                    <h1>Persia Cat</h1>
                    <p>Lorem ipsum dolor sit amet conse tetur adipiscing elit utelit tellus luctus nec ullamcorper mattis.</p>
                    <Button className={"pages__button--transparent"} name={"Read More"} />
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card__image'>
                  <img src={require("../img/dog-3.jpg")} alt='dog-3'></img>
                  <div className='card__image__title'>
                    <h1>Cocker Spyr</h1>
                    <p>Lorem ipsum dolor sit amet conse tetur adipiscing elit utelit tellus luctus nec ullamcorper mattis.</p>
                    <Button className={"pages__button--transparent"} name={"Read More"} />
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card__image'>
                  <img src={require("../img/rabbit.jpg")} alt='rabbit'></img>
                  <div className='card__image__title'>
                    <h1>Rusia Pygmy</h1>
                    <p>Lorem ipsum dolor sit amet conse tetur adipiscing elit utelit tellus luctus nec ullamcorper mattis.</p>
                    <Button className={"pages__button--transparent"} name={"Read More"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>
              <h1>Our References</h1>
              <p>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa atdui.</p>
            </div>
            <Swiper
              className="mySwiper"
              slidesPerView={3}
              spaceBetween={50}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                575: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {
                ReferencesData.map((index: ReferencesType) => {
                  return (
                    <SwiperSlide key={index.id}>
                      <img src={require(`../img/${index.path}`)} alt='ref-1' className='reference__image'></img>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
