import React, { useState, useEffect, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { LeftArrowIcon, RightArrowIcon, SquareIcon } from '@modjs/icons'
import Button from '../Button/Button'

interface ModCarouselProps extends React.TouchEventHandler<HTMLDivElement> {
    onTouchStart?: (event: TouchEvent) => void
    onTouchMove?: (event: TouchEvent) => void
    currentIndex?: number
    data?: []
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const forwardProps = (prop: string) => !['currentIndex', 'data'].includes(prop)

const ModCarousel = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCarouselProps>`
    overflow: hidden;
    display: block;
`

const ModCarouselItems = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCarouselProps>`
    display: flex;
    transition: all 150ms linear;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform: translateX(-${props => (props.currentIndex ?? 0) * 100}%);
    &:-webkit-scrollbar {
        display: none;
    }
    &:-webkit-scrollbar {
        display: none;
    }
`

const ModCarouselNavigation = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCarouselProps>`
    justify-content: center;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
`

const Carousel = (
    { data, children, ...props }: ModCarouselProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [touchPosition, setTouchPosition] = useState(0)
    const [currentIndex, setcurrentIndex] = useState(0)
    const [length, setLength] = useState(data ? data.length : 0)

    const handleTouchStart = (event: TouchEvent) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const next = () => {
        if (currentIndex < length - 1) {
            setcurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault()
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch =
            'touches' in event
                ? event.touches[0].clientX
                : (event as MouseEvent).clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(0)
    }

    const getExact = (count: number) => {
        setcurrentIndex(count)
    }

    useEffect(() => {
        setLength(data ? data.length : 0)
    }, [])

    return (
        <>
            <ModCarousel
                data={data}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                {...props}
                ref={ref}
                data-test="carousel"
            >
                <ModCarouselItems
                    currentIndex={currentIndex}
                    data-test="carousel-items"
                >
                    {children}
                </ModCarouselItems>
                <ModCarouselNavigation data-test="carousel-navigation">
                    <Button
                        type="button"
                        onClick={prev}
                        disabled={currentIndex > 0 ? false : true}
                        variant="transparent"
                        data-testid="prev"
                    >
                        <LeftArrowIcon
                            height="3rem"
                            width="3rem"
                            fill={currentIndex > 0 ? 'primary' : '#8e8e8e'}
                        />
                    </Button>
                    {data &&
                        data.map(obj => (
                            <Button
                                border="dark"
                                p={6}
                                type="button"
                                key={obj['id']}
                                onClick={() => getExact(obj['count'])}
                                variant="icon"
                                data-testid={`index-${obj['count']}`}
                                disabled={
                                    currentIndex === obj['count'] ? true : false
                                }
                                startAdornment={
                                    <SquareIcon
                                        fill={
                                            currentIndex === obj['count']
                                                ? '#8e8e8e'
                                                : 'primary'
                                        }
                                        height="0.5rem"
                                        width="0.5rem"
                                    />
                                }
                            ></Button>
                        ))}
                    <Button
                        type="button"
                        onClick={next}
                        disabled={currentIndex < length - 1 ? false : true}
                        variant="transparent"
                        data-testid="next"
                    >
                        <RightArrowIcon
                            height="3rem"
                            width="3rem"
                            fill={
                                currentIndex < length - 1
                                    ? 'primary'
                                    : '#8e8e8e'
                            }
                        />
                    </Button>
                </ModCarouselNavigation>
            </ModCarousel>
        </>
    )
}

export default withSystemProps(forwardRef(Carousel))
