import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// eslint-disable-next-line react/prop-types
export function Schedule({scheduleRef}) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: 'schedule',
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="lg:mt-60 sm:mt-24 mt-16" ref={scheduleRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug lg:border-b border-white/50">Расписание</h2>
      <div className="hidden mt-6 lg:flex justify-between ">
        <ul className="flex flex-col gap-5 text-3xl">
          <li>Вторник</li>
          <li>Среда</li>
          <li>Четверг</li>
          <li>Пятница</li>
          <li>Суббота</li>
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          <li>20:00-01:00</li>
          <li>20:00-01:00</li>
          <li>20:00-01:00</li>
          <li>20:00-01:00</li>
          <li>19:30-02:00</li>
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          <li>Основной состав</li>
          <li>Мафия на армянском</li>
          <li>Основной состав</li>
          <li>Мафия для начинающих</li>
          <li>Основной состав</li>
        </ul>
      </div>

      <div className="slider-container mt-2.5 lg:hidden">
        <Slider {...settings}>
          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold sm:text-xl text-base text-black">Основной состав</h3>
            <p className="text-black mt-2 text-sm sm:text-base">🗓 Вторник, четверг, суббота</p>
            <p className="text-black mt-1.5 text-sm sm:text-base">🕘20:00-01:00</p>
          </div>

          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold sm:text-xl text-base text-black">Мафия для начинающих</h3>
            <p className="text-black mt-2 text-sm sm:text-base">🗓 Пятница</p>
            <p className="text-black mt-1.5 text-sm sm:text-base">🕘20:00-01:00</p>
          </div>

          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold sm:text-xl text-base text-black">Мафия на армянском</h3>
            <p className="text-black mt-2 text-sm sm:text-base">🗓 Среда</p>
            <p className="text-black mt-1.5 text-sm sm:text-base">🕘20:00-01:00</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}
