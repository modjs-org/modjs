//EXPERIMENTAL
import React, { useState, useEffect, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { LeftArrowIcon, RightArrowIcon } from '@modjs/icons'
import Button from '../Button/Button'

interface ModSlideshowProps extends React.TouchEventHandler<HTMLDivElement> {
    onTouchStart?: (event: TouchEvent) => void
    onTouchMove?: (event: TouchEvent) => void
    currentIndex?: number
    slides?: []
    handleSlideChange?: () => void
    children: React.ReactNode
    ref?: React.Ref<HTMLElement>
}

const forwardProps = (prop: string) =>
    !['currentIndex', 'slides'].includes(prop)

const ModSlideshow = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
    overflow: hidden;
    display: block;
`

const ModSlideshowItems = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
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

const ModSlideshowNavigation = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
    justify-content: center;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 32px;
`

const Slideshow = (
    { slides, children, handleSlideChange, ...props }: ModSlideshowProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [touchPosition, setTouchPosition] = useState(0)
    const [currentIndex, setcurrentIndex] = useState(0)
    const [length, setLength] = useState(slides ? slides.length : 0)

    const handleTouchStart = (event: TouchEvent) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const next = () => {
        if (currentIndex < length - 1) {
            setcurrentIndex(prevState => prevState + 1)
        }
        //@ts-expect-error Experimental
        handleSlideChange()
    }

    const prev = () => {
        if (currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
            //@ts-expect-error Experimental
            handleSlideChange()
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

    // const getExact = (count: number) => {
    //     setcurrentIndex(count)
    // }

    useEffect(() => {
        setLength(slides ? slides.length : 0)
    }, [])

    return (
        <>
            <ModSlideshow
                slides={slides}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                {...props}
                ref={ref}
                data-test="slideshow"
            >
                <ModSlideshowItems
                    currentIndex={currentIndex}
                    data-test="slideshow-items"
                >
                    {children}
                </ModSlideshowItems>
                <ModSlideshowNavigation data-test="slideshow-navigation">
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
                </ModSlideshowNavigation>
            </ModSlideshow>
        </>
    )
}

export default withSystemProps(forwardRef(Slideshow))
