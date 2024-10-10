import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'
import gallery6 from '../assets/gallery6.png'
import gallery7 from '../assets/gallery7.png'

export function Gallery() {
  return (
    <section className="mt-60">
      <h2 className="text-7xl font-medium leading-snug">Галерея</h2>

      <div className="w-fit mx-auto">
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col gap-6">
          <img src={gallery1} alt="1"/>
          <img src={gallery2} alt="2"/>
        </div>
        <div className="grid gap-6">
          <img className="col-start-1 col-end-5" src={gallery3} alt=""/>
          <img className="col-start-5 col-end-7" src={gallery4} alt=""/>

          <img className="col-start-1 col-end-3" src={gallery5} alt=""/>
          <img className="col-start-3 col-end-7" src={gallery6} alt=""/>

          <img className="col-start-1 col-end-7" src={gallery7} alt=""/>
        </div>
      </div>
      </div>
    </section>
  )
}