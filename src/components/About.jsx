import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'

// eslint-disable-next-line react/prop-types
export function About({aboutRef}) {
  return (
    <section className="mt-56 hidden lg:block" ref={aboutRef}>
      <h2 className="text-7xl font-medium leading-snug">О нас</h2>
      <article className="flex mt-6 gap-12">
        <div className="flex w-1/2 gap-6 items-center">
          <img className="row-span-3 w-1/2 object-contain" src={about1} alt="Sunrise"/>
          <div className="flex flex-col w-1/2 gap-6">
            <img className="xl:w-11/12" src={about2} alt="2Цветок"/>
            <img className="xl:w-11/12" src={about3} alt="Fenix"/>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-12">
          <p className="text-3xl leading-relaxed">
            Клуб “Джокер” – член Федерации Интеллектуальной Игры Мафия (ФИИМ), открыл свои двери для всех желающих в
            2022 году.
          </p>
          <p className="text-3xl leading-relaxed">
            Мы проводим игры <span className="text-red font-medium">для начинающих и опытных</span> игроков, а также
            благотворительные вечера и международные турниры по спортивной мафии.
          </p>
          <p className="text-3xl leading-relaxed">
            Подробнее о становлении клуба рассказываем в <a className="text-red underline font-bold" target="_blank"
                                                            href="https://collab.am/leisure/armeniya-odna-iz-pervyh-stran-kotoraya-testirovala-sportivnye-pravila-organizator-kluba-professionalnoj-mafii-joker/">этой
            статье.</a>
          </p>
        </div>
      </article>
    </section>
  )
}