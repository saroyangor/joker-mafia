import prevArrow from '../assets/left.svg'

// eslint-disable-next-line react/prop-types
export function PrevArrow({onClick}) {
  return (
    <img onClick={onClick} src={prevArrow} alt="prevArrow" className="absolute bottom-[-36px] cursor-pointer left-0" />
  )
}
