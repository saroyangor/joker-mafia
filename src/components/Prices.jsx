export function Prices() {
  return (
    <section className="lg:mt-60 sm:mt-24 mt-16">
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug lg:border-b border-white/50">Прайс лист*</h2>

      <div className="border lg:border-none rounded-md p-3 lg:p-0 mt-2.5 lg:mt-0">
        <div className="flex flex-col lg:mt-12 sm:gap-12 gap-6">
          <div className="flex gap-4 sm:gap-6 lg:gap-40 flex-col lg:flex-row">
            <p className="lg:text-5xl sm:text-3xl text-xl min-w-72 text-red lg:text-white font-bold lg:font-normal">2000 AMD</p>
            <ul className="lg:text-3xl sm:text-xl text-base leading-normal list-disc pl-16 font-medium lg:font-normal">
              <li>
                Участники внутриклубных миникапов
              </li>
              <li>
                Участники турниров, представляющие клуб ‘Joker’
              </li>
              <li>
                Обладатели именной маски клуба Джокер
              </li>
            </ul>
          </div>

          <div className="flex gap-4 sm:gap-6 lg:gap-40 flex-col lg:flex-row">
            <p className="lg:text-5xl sm:text-3xl text-xl min-w-72 text-red lg:text-white font-bold lg:font-normal">2500 AMD</p>
            <ul className="lg:text-3xl sm:text-xl text-base leading-normal list-disc pl-16 font-medium lg:font-normal">
              <li>
                Любители, сыгравшие от 12 вечеров в клубе, а также игроки с турнирным опытом
              </li>
            </ul>
          </div>

          <div className="flex gap-4 sm:gap-6 lg:gap-40 flex-col lg:flex-row">
            <p className="lg:text-5xl sm:text-3xl text-xl min-w-72 text-red lg:text-white font-bold lg:font-normal">3000 AMD</p>
            <ul className="lg:text-3xl sm:text-xl text-base leading-normal list-disc pl-16 font-medium lg:font-normal">
              <li>
                Начинающие игроки без турнирного опыта игры в спортивную мафию
              </li>
            </ul>
          </div>

          <div className="flex gap-4 sm:gap-6 lg:gap-40 flex-col lg:flex-row">
            <p className="lg:text-5xl sm:text-3xl text-xl min-w-72 text-red lg:text-white font-bold lg:font-normal">4000 AMD</p>
            <ul className="lg:text-3xl sm:text-xl text-base leading-normal list-disc pl-16 font-medium lg:font-normal">
              <li>
                Участие в мастер классе в формате мафии (идеально для самых начинающих)
              </li>
            </ul>
          </div>
        </div>
        <p className="lg:text-2xl sm:text-lg text-xs leading-loose mt-6">
          *цены указаны за игровой вечер (3-6 игр) по 40-60 минут
        </p>
      </div>
    </section>
  )
}
