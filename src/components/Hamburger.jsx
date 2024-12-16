import { useState } from 'react'

export function Hamburger() {
  const [opened, setOpened] = useState(false)

  return (
    <div className={"grid place-content-center w-8 h-8 cursor-pointer" + (opened ? " hamburger-toggle" : "")} onClick={() => setOpened(!opened)}>
      <div className="
        w-8
        h-0.5
        bg-white
        rounded-full
        transition-all
        duration-150
        before:content-['']
        before:absolute
        before:w-8
        before:h-0.5
        before:bg-white
        before:-translate-y-2
        before:transition-all
        before:duration-150
        before:rounded-full
        after:content-['']
        after:absolute
        after:w-8
        after:h-0.5
        after:bg-white
        after:translate-y-2
        after:transition-all
        after:duration-150
        after:rounded-full
      "
      ></div>
    </div>
  )
}