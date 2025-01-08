import footer2 from '../assets/footer2.svg'
import footer3 from '../assets/footer3.svg'
import footer4 from '../assets/footer4.svg'

const links = [
  {
    img: footer2,
    link: "https://ethosfound.org/",
  },
  {
    img: footer3,
    link: "https://www.facebook.com/WomenResourceCenter/\n",
  },
  {
    img: footer4,
    link: "http://www.genocide-museum.am/rus/Description_and_history.php",
  }
]

export function Footer() {
  return (
    <footer className="items-center mt-40 mb-16 lg:flex hidden">
      <p className="text-3xl">© All Rights Reserved</p>
      <ul className="flex gap-3 absolute left-1/2 transform -translate-x-1/2">
        {
          links.map(link => (
            <li key={link.link}>
              <a href={link.link} target="_blank">
                <img src={link.img} alt=""/>
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}