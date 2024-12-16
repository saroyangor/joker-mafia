export function Prices() {
  return (
    <section className="mt-60">
      <h2 className="text-7xl font-medium leading-snug border-b border-white/50">Прайс лист*</h2>

      <div className="flex flex-col mt-12 gap-12">
        <div className="flex gap-40">
          <p className="text-5xl min-w-72">2000 AMD</p>
          <ul className="text-3xl leading-normal list-disc">
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

        <div className="flex gap-40">
          <p className="text-5xl min-w-72">2500 AMD</p>
          <ul className="text-3xl leading-normal list-disc">
            <li>
              Любители, сыгравшие от 12 вечеров в клубе, а также игроки с турнирным опытом
            </li>
          </ul>
        </div>

        <div className="flex gap-40">
          <p className="text-5xl min-w-72">3000 AMD</p>
          <ul className="text-3xl leading-normal list-disc">
            <li>
              Начинающие игроки без турнирного опыта игры в спортивную мафию
            </li>
          </ul>
        </div>

        <div className="flex gap-40">
          <p className="text-5xl min-w-72">4000 AMD</p>
          <ul className="text-3xl leading-normal list-disc">
            <li>
              Участие в мастер классе в формате мафии (идеально для самых начинающих)
            </li>
          </ul>
        </div>
      </div>
      <p className="text-2xl leading-loose mt-6">
        *цены указаны за игровой вечер (3-6 игр) по 40-60 минут
      </p>
    </section>
  )
}
