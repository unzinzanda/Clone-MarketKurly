import React, { useCallback, useEffect, useRef, useState } from 'react'
import { images } from '../../constants/images'
import { css } from '@emotion/react'

interface arrowButtonProps {
  dir: string
}

const arrowButton = (props: arrowButtonProps) => css`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${props.dir === 'left' ? '100px' : ''};
  right: ${props.dir === 'right' ? '100px' : ''};
  transform: translate(0, -50%);

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100%;

  opacity: 0;

  transition: opacity 0.5s ease;

  img {
    width: 30px;
    height: 30px;
  }

  :hover {
    opacity: 1;
  }
`

const Carousel = () => {
  const banners = [
    './assets/images/banner1.jpg',
    './assets/images/banner2.jpg',
    './assets/images/banner3.png',
    './assets/images/banner4.jpg',
    './assets/images/banner5.jpg',
    './assets/images/banner6.png',
  ]
  const [curBanners, setCurBanners] = useState<string[]>([])
  const [curIndex, setCurIndex] = useState(1)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMoving, setIsMoving] = useState(false)

  // 화살표 클릭에 대한 디바운싱
  const debounce = <T extends (...args: any[]) => any>(
    callback: T,
    delay: number,
  ) => {
    let timeId: ReturnType<typeof setTimeout>

    return (...args: Parameters<T>) => {
      if (timeId) clearTimeout(timeId)
      timeId = setTimeout(callback, delay, ...args)
    }
  }

  const noTransition = (index: number) => {
    setTimeout(() => {
      setCurIndex(index)
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = ''
      }
    }, 1000)
  }

  const handleSwipe = (dir: number) => {
    const newIndex = curIndex + dir

    // index가 end일 때
    if (newIndex === banners.length + 1) {
      noTransition(1)
    }
    // index가 start일 때
    else if (newIndex === 0) {
      noTransition(banners.length)
    }
    setCurIndex(newIndex)
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 1s ease-in-out'
    }
    setIsMoving(false)
  }

  useEffect(() => {
    if (banners.length !== 0) {
      const start = banners[0]
      const end = banners[banners.length - 1]
      const newBanners = [end, ...banners, start]

      setCurBanners(newBanners)
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSwipe(1)
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [curIndex])

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${curIndex}00vw)`
    }
  }, [curIndex])

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        overflow: hidden;
        position: relative;
        :hover {
          button {
            opacity: 1;
          }
        }
      `}
    >
      <div
        css={css`
          height: 370px;
          display: flex;
        `}
        ref={carouselRef}
      >
        {curBanners.map((str, index) => (
          <div
            css={css`
              width: 100vw;
            `}
            key={str + index}
          >
            <img
              css={css`
                width: 100vw;
                height: 370px;
              `}
              src={str}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        css={arrowButton({ dir: 'left' })}
        onClick={() => {
          const debouncedHandler = debounce<typeof handleSwipe>(
            handleSwipe,
            500,
          )
          debouncedHandler(-1)
        }}
      >
        <img src={images.arrow.left} />
      </button>
      <button
        type="button"
        css={arrowButton({ dir: 'right' })}
        onClick={() => {
          const debouncedHandler = debounce<typeof handleSwipe>(
            handleSwipe,
            500,
          )
          debouncedHandler(1)
        }}
      >
        <img src={images.arrow.right} />
      </button>
    </div>
  )
}

export default Carousel
