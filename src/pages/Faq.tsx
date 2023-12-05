import { IconArrowBadgeDown, IconArrowBadgeRight } from '@tabler/icons-react';
import Header from 'components/Header';
import Questions from 'components/Questions';
import React from 'react';
import gsap, { Power2 } from 'gsap';

interface AchievementsType {
  id: number,
  name: string,
  number: number
};

const AchievementsData: AchievementsType[] = [
  {
    id: 1,
    name: "Happy Customers",
    number: 1.438
  },
  {
    id: 2,
    name: "Petzy Branch",
    number: 36
  },
  {
    id: 3,
    name: "Certified Veterinarian",
    number: 23
  }
];

interface QuestionsType {
  id: number,
  question: string,
  answer: string
};

const QuestionsData: QuestionsType[] = [
  {
    id: 1,
    question: "How long does it take for home delivery?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 2,
    question: "What courier do you use for deliveries?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 3,
    question: "Can I collect from a local store?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 4,
    question: "Do you deliver on Weekend?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  }
];

const QuestionsData2: QuestionsType[] = [
  {
    id: 1,
    question: "Why can’t I select next day delivery?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 2,
    question: "How do I apply a promotional code?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 3,
    question: "I haven’t received a dispatch email confirmation?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  },
  {
    id: 4,
    question: "Do you offer discount to non EU customers?",
    answer: "Suspendisse sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie, nibh velit hendrerit elit, quis rutrum libero orci in sem. Sed eu tellus a nibh ullamcorper blandit ac sit amet nibh."
  }
];

export default function Faq() {

  const [indexQuestionBox, setIndexQuestionBox] = React.useState<number>();
  const [indexQuestionBox2, setIndexQuestionBox2] = React.useState<number>();

  const handleClickGetId = (id: number) => {
    setIndexQuestionBox(id === indexQuestionBox ? 0 : id);
  };

  const handleClickGetId2 = (id: number) => {
    setIndexQuestionBox2(id === indexQuestionBox2 ? 0 : id);
  };

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
      <Header name={"FAQ"} path={"faq"} />

      <section className='page__container' id='section-1'>
        <div className='page__row'>
          <div className='page__gap'>
            <div className='home__page__content'>
              <h1>Client Inquiries</h1>
              <p>Curabitur et lorem et dolor iaculis convallis. Curabitur interdum ipsum convallis porttitor vulputate. Morbi sed massa at dui congue porttitor eget urabitur.</p>
            </div>
            <div className='grid__2'>
              <div className='page__header__content'>
                {
                  QuestionsData.map((index: QuestionsType) => {
                    return (
                      <div className='questions__box__content' key={index.id}>
                        <div className={`questions__box ${index.id === indexQuestionBox ? "active" : ""}`} onClick={() => handleClickGetId(index.id)}>
                          {index.id !== indexQuestionBox
                            ?
                            <IconArrowBadgeRight style={{ color: "#575A5F" }} />
                            :
                            <IconArrowBadgeDown style={{ color: "#575A5F" }} />
                          }
                          <h2>{index.question}</h2>
                        </div>
                        <div className={`answer__container ${index.id === indexQuestionBox ? "active" : ""}`}>
                          <p>{index.answer}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className='page__header__content'>
                {
                  QuestionsData2.map((index: QuestionsType) => {
                    return (
                      <div className='questions__box__content' key={index.id}>
                        <div className={`questions__box questions__box--pink ${index.id === indexQuestionBox2 ? "active" : ""}`} onClick={() => handleClickGetId2(index.id)}>
                          {index.id !== indexQuestionBox2
                            ?
                            <IconArrowBadgeRight style={{ color: "#575A5F" }} />
                            :
                            <IconArrowBadgeDown style={{ color: "#575A5F" }} />
                          }
                          <h2>{index.question}</h2>
                        </div>
                        <div className={`answer__container ${index.id === indexQuestionBox2 ? "active" : ""}`}>
                          <p>{index.answer}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home__header__container home__header__container--faq__container' id='section-2'>
        <div className='grid__2'>
          <div className='home__page__content'>
            <h1 className='faq__title'>Our Achievements</h1>
            <p className='faq__comment'>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet.</p>
          </div>

          <div className='grid__3'>
            {
              AchievementsData.map((index: AchievementsType) => {
                return (
                  <div className='home__page__content' key={index.id}>
                    <h1 className='faq__title'>{index.number}<sup> +</sup></h1>
                    <p className='faq__comment'>{index.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <div id='section-1'>
        <Questions name={"Have More Questions ?"} />
      </div>

    </>
  )
}
