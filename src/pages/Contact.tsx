import Header from 'components/Header'
import Questions from 'components/Questions'
import React from 'react';
import gsap, { Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

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
      <Header name={"CONTACT"} path={"contact"} />

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='grid__3'>
              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pin" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="myGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="rgb(105, 136, 145)" />
                        <stop offset="100%" stopColor="rgb(187, 162, 156)" />
                      </linearGradient>
                    </defs>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" stroke="url(#myGradient)" />
                    <path d="M9 15l-4.5 4.5" stroke="url(#myGradient)" />
                    <path d="M14.5 4l5.5 5.5" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Our Office</h2>
                <p>Dewi Sri St. 2891, Denpasar, Bali</p>
              </div>

              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Call Us</h2>
                <p>(+62) 213 4231</p>
              </div>

              <div className='home__page__content'>
                <div className='social__media__button social__media__button--white social__media__button--width__160'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" stroke="url(#myGradient)" />
                    <path d="M3 7l9 6l9 -6" stroke="url(#myGradient)" />
                  </svg>
                </div>
                <h2>Email Us</h2>
                <p>petzy@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id='section-1'>
        <Questions name={"Get Closer Now"} />
      </div>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.215111659807!2d32.744804962667956!3d39.869419245516056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347acc4350fa9%3A0x22720cefb175c933!2sBilkent%20CYBERPARK!5e0!3m2!1str!2str!4v1701518752709!5m2!1str!2str" width="99.5%" height="300" loading="lazy"></iframe>
      </section>
    </>
  )
}
