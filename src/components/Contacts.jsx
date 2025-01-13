import contact1 from '../assets/contact1.svg'
import contact2 from '../assets/contact2.svg'
import contact3 from '../assets/contact3.svg'
import contact4 from '../assets/contact4.svg'
import contact5 from '../assets/contact5.svg'
import contact6 from '../assets/contact6.svg'

const links = [
  {
    img: contact1,
    link: "https://t.me/Mafclubjoker",
    alt: "Telegram"
  },
  {
    img: contact2,
    link: "https://www.instagram.com/yerevanmafiajoker/",
    alt: "Instagram"
  },
  {
    img: contact3,
    link: "https://www.facebook.com/mafia.yerevan",
    alt: "Facebook"
  },
  {
    img: contact4,
    link: "https://mafiaworldtour.com/clubs/324",
    alt: "FIIM"
  },
  {
    img: contact5,
    link: "https://www.google.com/maps/place/%D0%9C%D0%B0%D1%84%D0%B8%D1%8F+%D0%BA%D0%BB%D1%83%D0%B1+%22Joker%22/@40.1725754,43.2724028,8z/data=!4m6!3m5!1s0x406abdf851e966eb:0xd4f5825c83a6d017!8m2!3d40.1886226!4d44.5165139!16s%2Fg%2F11w1nkzqn2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    alt: "Google Maps"
  },
  {
    img: contact6,
    link: "https://www.youtube.com/@mafclubjoker",
    alt: "YouTube"
  }
]

// eslint-disable-next-line react/prop-types
export function Contacts({contactsRef}) {
  return (
    <section className="lg:mt-60 sm:mt-24 mt-16 mb-6 lg:mb-0" ref={contactsRef}>
      <h2 className="lg:text-7xl sm:text-5xl text-3xl font-medium leading-snug">Контакты</h2>
      <p className="lg:text-3xl sm:text-2xl text-xl leading-normal mt-6">
        Мы всегда на связи в телеграме и инстаграме - просто отправьте сообщение, и мы ответим вам в рабочее время с 14:00 до 20:00.
      </p>
      <ul className="flex gap-5 mt-9">
        {
          links.map(link => (
            <li key={link.link}>
              <a href={link.link} target="_blank">
                <img src={link.img} alt={link.alt}/>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  )
}