import { useEffect, useState } from 'react'

interface Props {
  slides: string[]
}

export default function Carousel({ slides }: Props) {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }

  let nextSlide = () => {
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className='overflow-hidden relative'>
      <div
        className={`flex  transition-transform ease-out duration-700 `}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((s, index) => {
          return typeof s === 'string' ? <img key={index} src={s} alt={`Slide ${index + 1}`} /> : null
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
        <button onClick={previousSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? 'bg-white' : 'bg-white/40'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
