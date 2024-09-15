{
    /* DRAFT
     */
}

import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModPrashanIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const PrashanIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPrashanIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="280 50 600 450"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="prashan-icon"
        >
            <title>prashan.dev logo</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                prashan.dev
            </metadata>
            <g
                transform="translate(0.000000,552.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M3702 4020 l-344 -5 -24 -28 c-24 -28 -24 -31 -22 -218 1 -104 -3
-194 -8 -198 -5 -5 -114 -11 -242 -13 -207 -3 -237 -5 -263 -22 -16 -10 -31
-28 -34 -40 -3 -11 -4 -268 -3 -571 l3 -550 267 -5 c146 -3 270 -8 273 -12 4
-4 8 -83 9 -175 l1 -168 240 -6 c132 -4 572 -7 977 -8 l737 -1 28 24 28 24 5
159 5 158 265 5 265 5 3 566 2 565 -24 23 c-30 28 -52 30 -318 31 l-198 0 -2
233 -3 232 -640 0 c-352 0 -795 -2 -983 -5z m1476 -297 l2 -163 -328 0 c-242
0 -331 -3 -340 -12 -9 -9 -12 -148 -12 -564 l0 -552 31 -31 c17 -17 40 -31 52
-31 12 -1 150 -2 307 -3 l285 -2 3 -106 3 -107 -773 -7 c-425 -3 -816 -5 -868
-3 l-95 3 -3 104 c-2 77 1 107 10 113 7 5 146 8 308 7 303 -3 317 -1 353 38
16 18 17 59 15 584 l-3 564 -340 5 -340 5 -3 150 c-1 82 0 155 2 162 4 11 168
13 868 11 l863 -3 3 -162z m-1203 -758 l0 -470 -530 -7 c-489 -7 -531 -6 -542
9 -10 13 -13 122 -13 464 0 246 3 455 6 463 6 15 60 16 543 14 l536 -3 0 -470z
m1760 465 c12 -19 5 -923 -6 -937 -9 -10 -112 -12 -538 -7 -289 4 -530 10
-535 15 -5 5 -9 205 -9 465 0 380 2 457 14 465 20 13 1066 12 1074 -1z"
                />
            </g>
        </ModPrashanIcon>
    )
}

export default withSystemProps(forwardRef(PrashanIcon))
