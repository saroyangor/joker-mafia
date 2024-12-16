import { Hamburger } from './Hamburger.jsx'

import logo from '../assets/logo.svg'

export function Hero() {
  return (
    <section className="flex lg:min-h-[92vh]">
      <div className="lg:max-w-[726px] mt-36 lg:absolute">
        <h1 className="lg:text-8xl text-6xl font-bold lg:mb-11 mb-5 leading-tight">
          <span className="text-red">Мафия</span> клуб “Joker”
        </h1>
        <p className="lg:text-4xl text-2xl leading-tight">
          <span className="text-red font-bold">Спортивная мафия</span> в самом центре Еревана для начинающих и опытных мафиози. <span className="text-red font-medium">Играем 5 раз в неделю</span> в ресторане “Пятница” по адресу Маштоца 39/12.
        </p>
        <button className="lg:text-3xl text-xl bg-red text-white p-6 rounded-full lg:mt-24 mt-12 hover:bg-white hover:text-red transition duration-300">Записаться на игру</button>
      </div>
      <div className="lg:hidden flex justify-between w-full items-center h-36 fixed container mx-auto top-0 z-50 bg-black bg-opacity-90">
        <img className="w-48 h-24" src={logo} alt="logo"/>
        <Hamburger />
      </div>
      <div className="right 2xl:w-1/2 xl:w-7/12 ml-auto hidden lg:block">
        <nav>
          <ul className="flex mt-12 gap-8">
            <li><a href="">О нас</a></li>
            <li><a href="">Услуги</a></li>
            <li><a href="">Расписание</a></li>
            <li><a href="">Цены</a></li>
            <li><a href="">Отзывы</a></li>
            <li><a href="">Галерея</a></li>
            <li><a href="">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
