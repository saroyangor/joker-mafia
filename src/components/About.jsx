import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'

export function About() {
  return (
    <section className="mt-56">
      <h2 className="text-7xl font-medium leading-snug">О нас</h2>
      <article className="flex mt-6 gap-12">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 w-1/2">
          <img className="row-span-3 w-full" src={about1} alt="Sunrise"/>
          <img className="w-11/12" src={about2} alt="2Цветок"/>
          <img className="w-11/12" src={about3} alt="Fenix"/>
        </div>
        <div className="w-1/2 flex flex-col gap-12">
          <p className="text-3xl leading-relaxed">
            Мафия клуб “Джокер”  открыл свои двери для всех желающих в 2022 году. Игры проводим в центре Еревана по адресу: Маштоца 39/12.
          </p>
          <p className="text-3xl leading-relaxed">
            По пятницам проходит школа мафии с мастер классами от опытных игроков.
          </p>
          <p className="text-3xl leading-relaxed">
            Подробнее о становление клуба рассказываем в <a className="text-red underline font-bold" href="">этой статье.</a>
          </p>
        </div>
      </article>
    </section>
  )
}