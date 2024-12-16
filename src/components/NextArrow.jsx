import nextArrow from '../assets/right.svg'

// eslint-disable-next-line react/prop-types
export function NextArrow({onClick}) {
  return (
    <img onClick={onClick} src={nextArrow} alt="nextArrow" className="absolute bottom-[-36px] cursor-pointer left-10" />
  )
}
