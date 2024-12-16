import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Schedule() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: 'schedule',
    dotsClass: 'slick-dots',
    responsive: [
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
    <section className="lg:mt-60 mt-20">
      <h2 className="lg:text-7xl text-5xl font-medium leading-snug">Расписание</h2>
      <div className="hidden mt-6 lg:flex justify-between ">
        <ul className="flex flex-col gap-5 text-3xl">
          <li>Вторник</li>
          <li>Среда</li>
          <li>Четверг</li>
          <li>Пятница</li>
          <li>Суббота</li>
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          <li>20:00-00:00</li>
          <li>20:00-00:00</li>
          <li>20:00-00:00</li>
          <li>20:00-00:00</li>
          <li>16:00-19:00</li>
          <li>19:30-02:00</li>
        </ul>
        <ul className="flex flex-col gap-5 text-3xl">
          <li>Мафия для опытных</li>
          <li>Мафия на армянском</li>
          <li>Мафия для опытных</li>
          <li>Школа мафии (все уровни)</li>
          <li>Тренинг для новичков</li>
          <li>Мафия для всех уровней</li>
        </ul>
      </div>

      <div className="slider-container mt-2.5 lg:hidden">
        <Slider {...settings}>
          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold text-xl text-black">Основной состав</h3>
            <p className="text-black mt-2">🗓 Вторник, четверг, суббота</p>
            <p className="text-black mt-1.5">🕘20:00-00:00</p>
          </div>

          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold text-xl text-black">Школа мафии (новички)</h3>
            <p className="text-black mt-2">🗓 Пятница</p>
            <p className="text-black mt-1.5">🕘19:30-00:00</p>
          </div>

          <div className="bg-lightgray rounded-lg p-3 min-w-80">
            <h3 className="font-bold text-xl text-black">Мафия на армянском</h3>
            <p className="text-black mt-2">🗓 Среда</p>
            <p className="text-black mt-1.5">🕘20:00-00:00</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}
