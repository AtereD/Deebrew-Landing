import Image from 'next/image';
import Separator from './Separator';
import Badge from './Badge';

const OpeningHours = () => {
  return (
    <section className='flex bg-primary h-[60vh] xl:h-[80vh]'>
        <div className='relative xl:flex flex-1 justify-center items-center hidden'>
            {/* overlay */}
            <div className='w-full h-full absolute z-40 top-0 bg-black/60'></div>
            <Image  src="/assets/opening-hours/img.png" fill alt="" quality={100} priority className='object-cover'/>
            <Badge containerStyles="w-[320px] h-[320px] absolute z-40"/>
        </div>
        <div className='flex-1 bg-opening-hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative'>
            {/* overlay */}
            <div className='w-full h-full absolute top-0 bg-black/[0.85] z-10'></div>
            <div className='z-20 flex flex-col items-center justify-center'>
                <h2 className='h2 text-white my-4'>Opening Hours</h2>
                <Separator bg="accent"/>
                <div className='lg:mt-12 relative sm:w-[300px] h-[220px] xl:w-[470px] xl:h-[200px] w-full px-4 sm:px-0'>
                    <Image src="/assets/opening-hours/program-badge.svg" fill alt="" priority quality={100} className='object-contain'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OpeningHours