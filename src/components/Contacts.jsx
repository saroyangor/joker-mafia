import contact1 from '../assets/contact1.png'
import contact2 from '../assets/contact2.png'
import contact3 from '../assets/contact3.png'
import contact4 from '../assets/contact4.png'

export function Contacts() {
  return (
    <section className="mt-60">
      <h2 className="text-7xl font-medium leading-snug">Контакты</h2>
      <p className="text-3xl leading-normal mt-6">
        Мы всегда на связи в телеграме и инстаграме - просто отправьте сообщение, и мы ответим вам в рабочее время с 14:00 до 20:00.
      </p>
      <ul className="flex gap-5 mt-9">
        <li>
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
      </ul>
    </section>
  )
}