import React from 'react';
import { IconBrandInstagram, IconBrandTwitterFilled, IconCookie, IconLeaf, IconMessage, IconQuote, IconThumbUp } from '@tabler/icons-react'
import { IconBellRinging2, IconPill } from '@tabler/icons-react'
import Header from 'components/Header'
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import Button from 'components/Button';
import gsap, { Power2 } from 'gsap';

interface CommuniticatonType {
  id: number,
  name: string,
  commnet: string,
  work: string,
  path: string
};

const CommuniticatonData: CommuniticatonType[] = [
  {
    id: 1,
    name: "Sarah Fazure",
    commnet: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti dolore laudantium, totam aperiam, eaque ipsa quae ab illo. Sed ut unde perspiciatis omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam.",
    work: "Cynophilia",
    path: "woman-1.jpg"
  },
  {
    id: 2,
    name: "Diggie Razure",
    commnet: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti dolore laudantium, totam aperiam, eaque ipsa quae ab illo. Sed ut unde perspiciatis omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam.",
    work: "Ailurophiles",
    path: "man-1.jpg"
  },
  {
    id: 3,
    name: "Christien Jennifer",
    commnet: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti dolore laudantium, totam aperiam, eaque ipsa quae ab illo. Sed ut unde perspiciatis omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam.",
    work: "Hamster Lovers",
    path: "man-2.jpg"
  },
  {
    id: 4,
    name: "Robert Fox",
    commnet: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti dolore laudantium, totam aperiam, eaque ipsa quae ab illo. Sed ut unde perspiciatis omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam.",
    work: "Animal Lover",
    path: "man-3.jpg"
  }
];

interface VetType {
  id: number,
  name: string,
  work: string,
  color: string,
  img: string
};

const VetData: VetType[] = [
  {
    id: 1,
    name: "Dr. Edgar Warren",
    work: "Pharmacology Specialist",
    color: "pink",
    img: "vet-1.jpg"
  },
  {
    id: 2,
    name: "Dr. Leslie Alexander",
    work: "Parasitology Specialist",
    color: "green",
    img: "vet-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Wade Cooper",
    work: "Veterinary Surgeon",
    color: "grey",
    img: "vet-3.jpg"
  },
  {
    id: 4,
    name: "Dr. Bessie Esther",
    work: "Veterinary Eye Specialist",
    color: "grey",
    img: "vet-4.jpg"
  },
  {
    id: 5,
    name: "Dr. Darrel Steward",
    work: "Nutrition Specialist",
    color: "green",
    img: "vet-5.jpg"
  },
  {
    id: 6,
    name: "Dr. Anette Wilson",
    work: "Dermatologist Specialist",
    color: "pink",
    img: "vet-6.jpg"
  }
];

interface ExpertSkillsType {
  id: number,
  name: string,
  percent: string,
  color: string,
};

const ExpertSkillsData: ExpertSkillsType[] = [
  {
    id: 1,
    name: "Pet Grooming",
    percent: "92%",
    color: "",
  },
  {
    id: 2,
    name: "Pet Breeding",
    percent: "85%",
    color: "--grey",
  },
  {
    id: 3,
    name: "Pet Training",
    percent: "96%",
    color: "--green",
  },
  {
    id: 4,
    name: "Natural Prebiotic",
    percent: "93%",
    color: "",
  }
];

export default function About() {

  const navigate = useNavigate();

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
        x: 500,
        opacity: 0
      },
      {
        duration: 2,
        scrollTrigger: {
          trigger: "#section-1",
          start: "top center",
          end: "bottom bottom",
          markers: true,
          scrub: true,
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut
      }
    )

    gsap.fromTo("#section-2",
      {
        x: -500,
        opacity: 0
      },
      {
        duration: 2,
        scrollTrigger: {
          trigger: "#section-2",
          start: 'center bottom',
          end: "center top",
          scrub: true,
          markers: true,
          pinSpacing: false,
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut
      }
    )

  }, []);

  return (
    <>
      <Header name={"ABOUT US"} path={"about"} />

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>
              <h1>Why Choose Us</h1>
              <p>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet. Nam et sagittis diam. Maecenasma ximus fringilla viverra quisque.</p>
              <div className='grid__6'>
                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--grey social__media__button--width__80'>
                    <IconBellRinging2 color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Modern Pet Toy</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>

                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--pink social__media__button--width__80'>
                    <IconPill color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Pet Nutritions</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>

                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--grey social__media__button--width__80'>
                    <IconLeaf color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Natural Prebiotic</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>

                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--pink social__media__button--width__80'>
                    <IconThumbUp color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Quality Guaranteed</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>

                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--grey social__media__button--width__80'>
                    <IconCookie color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Happy Pets</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>

                <div className='home__page__content'>
                  <div className='social__media__button social__media__button--pink social__media__button--width__80'>
                    <IconMessage color='white' width={"40px"} height={"40px"} stroke={"1px"} />
                  </div>
                  <h2>Friendly Support</h2>
                  <p>Vivamus lectus metus, efficitur pulvinar sollicit magna.</p>
                </div>
              </div>
              <div className='button'>
                <Button className={""} name={"Contact Us"} onClick={() => navigate("/contact")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home__header__container home__header__container--message'>
        <div className='home__header__content'>
          <Swiper
            className="mySwiper"
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {
              CommuniticatonData.map((index: CommuniticatonType) => {
                return (
                  <SwiperSlide key={index.id}>
                    <div className='home__header__content'>
                      <IconQuote color='#BBA29C' width={"80px"} height={"80px"} stroke={"1.2px"} />
                      <p>{index.commnet}</p>
                      <div className='communication__user'>
                        <img src={require(`../img/${index.path}`)} alt=''></img>
                      </div>
                      <h3>{index.name}</h3>
                      <p>{index.work}</p>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>

      <section className='page__container' id='section-2'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>
              <h1>Professional Veterinarian</h1>
              <p>Donec feugiat lectus minec scelerisque massa viverraac estibulum imperdieta. consectetur convallis quis tincidunt ligula.</p>
            </div>
            <div className='grid__3'>
              {
                VetData.map((index: VetType) => {
                  return (
                    <div className={`vet__card__container vet__card__container--${index.color}`} key={index.id}>
                      <div className='vet__card__header'>
                        <h1>{index.name}</h1>
                        <p>{index.work}</p>
                      </div>
                      <div className='vet__card__footer'>
                        <img src={require(`../img/${index.img}`)} alt=''></img>
                        <div className='navbar__logo navbar__logo--about'>
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
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>

              <div>
                <h1>Expert Skills</h1>
                <p>Caonsectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc, aliquam id nunc ac, convallis dictum nisi. Curabitur vehicula tincidunt sapien, vel fringilla neque iaculis.</p>
                <p>At Vitech, aliquam id nunc ac, convallis dictum nisi. Curabitur vehicula tincidunt sapien, vel fringilla neque iaculis.</p>
                {
                  ExpertSkillsData.map((index: ExpertSkillsType) => {
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
