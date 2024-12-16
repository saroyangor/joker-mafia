import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import review1 from '../assets/review1.svg'
import review2 from '../assets/review2.svg'
import review3 from '../assets/review3.svg'
import review4 from '../assets/review4.svg'
import { NextArrow } from './NextArrow.jsx'
import { PrevArrow } from './PrevArrow.jsx'

// eslint-disable-next-line react/prop-types
export function Reviews({reviewsRef}) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: 'reviews',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }


  return (
    <section className="lg:mt-60 sm:mt-24 mt-16" ref={reviewsRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug">Отзывы</h2>

      <div className="slider-container mt-2.5 lg:mt-6">
        <Slider {...settings}>
          <div className="border rounded-lg py-6 px-3 2xl:min-h-[486px] xl:min-h-[406px] lg:min-h-[486px] min-h-[342px]">
            <div className="flex gap-3 items-center">
              <img src={review1} alt="Sunrise"/>
              <h4 className="font-inter text-2xl">Sunrise</h4>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <p>Лучший маф-клуб в Ереване! Отличное место, чтобы научиться играть в мафию и отточить свои навыки, если
                вы опытный игрок.</p>
              <p>В то же время, это место не только о мафии с высококвалифицированными судьями и наставниками, но и о
                замечательных людях, где можно окунуться в сообщество интеллигентных, открытых и увлеченных людей.</p>
              <p>Теплота, юмор, смех и забота друг о друге - вот что отличает это место. Здесь вы будете чувствовать
                себя желанным гостем и непринужденно среди единомышленников, но очень разных и уникальных личностей.</p>
            </div>
          </div>

          <div className="border rounded-lg py-6 px-3 2xl:min-h-[486px] xl:min-h-[406px] lg:min-h-[486px] min-h-[342px]">
            <div className="flex gap-3 items-center">
              <img src={review2} alt="Peach"/>
              <h4 className="font-inter text-2xl">Peach</h4>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <p>Очень люблю клуб &#34;Джокер&#34; за абсолютно семейную атмосферу, полную принятия, любви и взаимовыручки. С его появлением в моей жизни полгода назад я, как релокант, окончательно почувствовала себя частью жизни Еревана, ранее наблюдая за ней со стороны.</p>
              <p>Двери клуба открыты для мафиози с любым опытом: от людей, впервые надевающих маску под музыку ночной фазы, до многократных чемпионов всего и вся. При этом опытные игроки всегда с большим удовольствием делятся советами с начинающими, что укрепляет дружелюбную атмосферу, что очень ценно лично для меня.</p>
            </div>
          </div>

          <div className="border rounded-lg py-6 px-3 2xl:min-h-[486px] xl:min-h-[406px] lg:min-h-[486px] min-h-[342px]">
            <div className="flex gap-3 items-center">
              <img src={review3} alt="Scarpia"/>
              <h4 className="font-inter text-2xl">Scarpia</h4>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <p>Появление мафии и конкретно этого клуба в моей релокантской жизни круто изменили ее к лучшему. </p>
              <p>Клуб &#34;Джокер&#34; - сообщество людей, по-настоящему влюбленных в мафию и друг друга. Здесь я обрел круг общения, нашел новых друзей и полюбил игру, которая в каждом человеке раскрывает что-то новое и неизменно дарит яркие эмоции. </p>
              <p>Приходите играть!</p>
            </div>
          </div>

          <div className="border rounded-lg py-6 px-3 2xl:min-h-[486px] xl:min-h-[406px] lg:min-h-[486px] min-h-[342px]">
            <div className="flex gap-3 items-center">
              <img src={review4} alt="Пушишка"/>
              <h4 className="font-inter text-2xl">Пушишка</h4>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <p>
                Играю в клубе около года, атмосфера - топ. Организатор и ведущие очень дружелюбные, рады новичкам, вливаешься очень быстро. На играх по пятницам подробно дают обратную связь по тому, как ты сыграл, и что можно улучшить.
              </p>
              <p>В самом заведении стоит круглый стол, что очень удобно, а на стенах висят фотографии игроков, выглядит мило</p>
              <p>Сейчас начали играть на армянском по средам. Я на нём не говорю, но со стороны смотреть было интересно</p>
              <p>Рекомендую!</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}