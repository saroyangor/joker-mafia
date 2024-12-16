import contact1 from '../assets/contact1.svg'
import contact2 from '../assets/contact2.svg'
import contact3 from '../assets/contact3.svg'
import contact4 from '../assets/contact4.svg'
import contact5 from '../assets/contact5.svg'

export function Contacts() {
  return (
    <section className="lg:mt-60 sm:mt-24 mt-16 mb-6 lg:mb-0">
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug">Контакты</h2>
      <p className="lg:text-3xl sm:text-2xl text-xl leading-normal mt-6">
        Мы всегда на связи в телеграме и инстаграме - просто отправьте сообщение, и мы ответим вам в рабочее время с 14:00 до 20:00.
      </p>
      <ul className="flex gap-5 mt-9">
        <li>git
          <a href="">
            <img src={contact1} alt="Telegram"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src={contact2} alt="Instagram"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src={contact3} alt="Facebook"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src={contact4} alt="FIIM"/>
          </a>
        </li>
        <li>
          <a href="">
            <img src={contact5} alt="FIIM"/>
          </a>
        </li>
      </ul>
    </section>
  )
}