import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

export function Services() {
  return (
    <section className="mt-64 flex min-h-[552px] gap-6 justify-between">
      <div className="w-full flex flex-col justify-end relative group cursor-pointer">
        <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
          <p className="text-2xl leading-7 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Каждую пятницу и субботу проводим мастер классы и игры с разборами для начинающих мафиози. Опытные ведущие дают разбор после каждой игры, чтобы новые игроки легко вливались в комьюнити и оттачивали свои навыки игры.
          </p>
        </div>
        <img src={service1} alt="Fade" />
        <p className="text-4xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
          Мафия для опытных
        </p>
        <p></p>
      </div>

      <div className="w-full flex flex-col justify-end relative group cursor-pointer">
        <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
          <p
            className="text-2xl leading-7 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Играем фанки с опытными игроками каждые вторник, четверг и субботу, а также регулярно проводим закрытые внутриклубные миникапы и международные турниры под эгидой ФИИМ.

          </p>
        </div>
        <img src={service2} alt="Dzu"/>
        <p className="text-4xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
          Мафия для начинающих
        </p>
      </div>

      <div className="w-full flex flex-col justify-end relative group cursor-pointer">
        <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-75 transition duration-500">
          <p
            className="text-2xl leading-7 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Организуем корпоратив для вашей компании  под персональные запросы. Добавим интересных ролей, упростим правила и
            сделаем всё максимально  возможное, чтобы вы с коллегами как следует повеселились. Бурные эмоции гарантируем!
          </p>
        </div>
        <img src={service3} alt="Fis"/>
        <p className="text-4xl absolute w-4/5 bottom-10 left-[10%] group-hover:opacity-0 transition duration-500">
          Корпоративы и мероприятия
        </p>
      </div>
    </section>
  )
}