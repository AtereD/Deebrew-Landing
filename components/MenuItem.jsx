import Image from 'next/image'
import React from 'react'

const MenuItem = ({imgSrc, name, description, price}) => {
  return (
    <div className='flex items-center gap-4'>
        {/* image */}
        <div className='relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full'>
            <Image src={imgSrc} fill alt='' priority quality={100} className='object-cover'/>
        </div>
        {/* txt */}
        <div className='flex flex-col flex-1 gap-2'>
            <div className='flex justify-between gap-4 items-baseline'>
                {/* name */}
                <p className='uppercase font-primary font-semibold text-[22px] leaading-none text-primary'>{name}</p>
                {/* border */}
                <div className='border-dashed flex-1 border-b border-primary'></div>
                {/* price */}
                <p className='leading-none font-primary font-semibold text-[30px] text-primary'>{price.toFixed(2)}</p>
            </div>
            <p className=''>{description}</p>
        </div>
    </div>
  )
}

export default MenuItem