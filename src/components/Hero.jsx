export function Hero() {
  return (
    <section className="flex h-[92vh]">
      <div className="max-w-[726px] mt-36 absolute">
        <h1 className="text-8xl font-bold mb-11 leading-tight">
          <span className="text-red">Мафия</span> клуб “Joker”
        </h1>
        <p className="text-4xl leading-tight">
          <span className="text-red font-bold">Спортивная мафия</span> в самом центре Еревана для начинающих и опытных
          мафиози. Играем 4 раза в неделю в ресторане “Пятница” у Каскада.
        </p>
        <button className="text-3xl bg-red text-white p-6 rounded-full mt-24">Записаться на игру</button>
      </div>
      <div className="right 2xl:w-1/2 w-7/12 ml-auto">
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
