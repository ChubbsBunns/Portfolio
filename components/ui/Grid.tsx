import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <div className="flex justify-center align-middle font-bold  text-xl p-3">Putting away my face for now</div>
        <BentoGrid>
            {gridItems.map(
                ({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                   <BentoGridItem 
                   id = {id}
                   key = {id}
                   title = {title}
                   description = {description}
                   className = {className}
                   img = {img}
                   imgClassName = {imgClassName}
                   titleClassName = {titleClassName}
                   spareImg = {spareImg}
                   />
                )
            )}
        </BentoGrid>
    </section>
  )
}

export default Grid
