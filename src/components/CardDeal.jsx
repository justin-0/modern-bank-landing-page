import React from 'react'
import style, { layout } from '../styles'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 class={style.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste
        similique esse libero voluptas doloremque, quod labore dolores
        distinctio a?
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)
export default CardDeal
