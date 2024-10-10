export function Schedule() {
  return (
    <section className="mt-60">
      <h2 className="text-7xl font-medium leading-snug">Расписание</h2>
      <div className="mt-6 flex justify-between">
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
    </section>
  )
}
