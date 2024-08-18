import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModBackendIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const BackendIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <>
            <ModBackendIcon
                {...props}
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 350"
                height={height}
                width={width}
                data-test="backend-icon"
            >
                <title>Backend Icon</title>
                <metadata>
                    Created by Prashan Pudasaini on Thursday, January 4th, 2024
                    @ fullstackpro.io
                </metadata>
                <g
                    transform="translate(0,350) scale(0.100000,-0.100000)"
                    fill={fill}
                    stroke="none"
                >
                    <path
                        d="M360 2353 l-1 -648 -58 62 -58 62 -63 -64 c-35 -36 -62 -66 -59 -67
            3 -2 77 -74 165 -161 l160 -158 162 162 163 163 -61 61 -61 62 -59 -61 -60
            -61 0 560 0 560 705 0 705 0 0 -87 0 -88 -352 0 -353 0 0 -180 0 -180 883 0
            c875 0 882 0 882 20 0 20 -8 20 -857 22 l-858 3 -3 129 c-2 97 1 131 10 138 7
            4 156 8 330 8 l317 0 20 26 c17 22 21 41 21 100 0 63 -3 77 -24 101 l-24 28
            -697 0 -697 0 -24 -28 -24 -28 0 -525 c0 -435 2 -531 14 -559 19 -45 45 -45
            95 0 21 19 43 35 48 35 14 0 53 -44 53 -61 0 -15 -239 -259 -254 -259 -17 0
            -256 244 -256 260 0 17 39 60 54 60 5 0 26 -16 47 -35 53 -48 78 -45 98 8 7
            19 11 235 11 648 0 612 0 619 -20 619 -20 0 -20 -7 -20 -647z"
                    />
                    <path
                        d="M2070 2846 c0 -159 9 -209 40 -226 12 -6 189 -10 454 -10 429 0 436
            0 436 20 0 20 -7 20 -445 20 l-445 0 0 175 c0 168 -1 175 -20 175 -19 0 -20
            -7 -20 -154z"
                    />
                    <path
                        d="M1240 2116 c-3 -159 1 -876 5 -876 3 0 399 0 880 0 868 0 875 0 875
            20 0 20 -8 20 -857 22 l-858 3 0 390 0 390 858 3 c849 2 857 2 857 22 0 20 -7
            20 -849 20 -467 0 -863 3 -880 6 -17 4 -31 4 -31 0z"
                    />
                    <path
                        d="M1485 1955 c-22 -22 -25 -32 -25 -105 0 -73 3 -83 25 -105 21 -22 33
            -25 103 -25 69 0 81 3 100 23 19 20 22 35 22 110 0 117 -10 127 -120 127 -73
            0 -83 -3 -105 -25z m195 -105 l0 -90 -90 0 -90 0 0 90 0 90 90 0 90 0 0 -90z"
                    />
                    <path
                        d="M1835 1955 c-22 -21 -25 -33 -25 -95 0 -72 10 -105 39 -127 12 -9
            123 -12 444 -13 l428 0 24 26 c22 24 25 36 25 106 0 70 -3 82 -25 103 l-24 25
            -431 0 -431 0 -24 -25z m895 -105 l0 -90 -440 0 -440 0 0 90 0 90 440 0 440 0
            0 -90z"
                    />
                    <path
                        d="M1485 1605 c-22 -22 -25 -32 -25 -105 0 -73 3 -83 25 -105 21 -22 33
            -25 103 -25 69 0 81 3 100 23 19 20 22 35 22 108 0 76 -2 88 -23 107 -20 19
            -35 22 -101 22 -68 0 -80 -3 -101 -25z m195 -105 l0 -90 -90 0 -90 0 0 90 0
            90 90 0 90 0 0 -90z"
                    />
                    <path
                        d="M1835 1605 c-22 -22 -25 -32 -25 -105 0 -73 3 -83 25 -105 l24 -25
            431 0 431 0 24 25 c22 22 25 32 25 105 0 73 -3 83 -25 105 l-24 25 -431 0
            -431 0 -24 -25z m895 -105 l0 -90 -440 0 -440 0 0 90 0 90 440 0 440 0 0 -90z"
                    />
                    <path
                        d="M0 1040 c0 -19 8 -20 508 -22 l507 -3 0 -310 0 -310 -197 -3 -197 -2
            -20 -27 c-17 -21 -21 -40 -21 -100 0 -69 2 -77 29 -104 l29 -29 642 0 641 0
            30 29 29 29 0 186 c0 180 -1 186 -24 213 l-24 27 -42 -29 c-24 -17 -49 -34
            -56 -40 -9 -6 -21 -2 -39 15 -14 13 -25 28 -25 34 0 6 58 70 130 141 l130 129
            131 -131 c120 -120 130 -133 119 -152 -6 -12 -22 -27 -35 -33 -21 -10 -29 -6
            -65 26 -23 21 -49 36 -58 34 -9 -2 -25 -19 -34 -38 -16 -30 -18 -67 -18 -280
            0 -256 3 -290 26 -290 12 0 14 50 14 290 0 160 4 290 9 290 5 0 31 -24 58 -54
            l49 -54 62 60 c34 33 62 61 62 62 0 1 -73 75 -162 164 l-163 162 -162 -162
            -163 -163 62 -62 62 -63 58 57 58 57 0 -204 0 -205 -660 0 -660 0 0 88 0 87
            220 0 220 0 0 355 0 355 -530 0 c-523 0 -530 0 -530 -20z"
                    />
                    <path
                        d="M0 370 c0 -19 7 -20 225 -20 l225 0 0 -88 0 -88 -97 4 -96 5 6 -33
            c4 -18 7 -59 7 -91 0 -52 2 -59 20 -59 18 0 20 7 20 65 l0 65 59 0 c44 0 65 5
            85 21 25 19 26 25 26 110 0 134 11 129 -260 129 -213 0 -220 -1 -220 -20z"
                    />
                </g>
            </ModBackendIcon>
        </>
    )
}

export default withSystemProps(forwardRef(BackendIcon))
