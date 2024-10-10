import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'
import footer3 from '../assets/footer3.png'
import footer4 from '../assets/footer4.png'
import footer5 from '../assets/footer5.png'

export function Footer() {
  return (
    <footer className="flex items-center mt-40 mb-16">
      <p className="text-3xl">© All Rights Reserved</p>
      <ul className="flex gap-3 absolute left-1/2 transform -translate-x-1/2">
        <li><img src={footer1} alt=""/></li>
        <li><img src={footer2} alt=""/></li>
        <li><img src={footer3} alt=""/></li>
        <li><img src={footer4} alt=""/></li>
        <li><img src={footer5} alt=""/></li>
      </ul>
    </footer>
  )
}