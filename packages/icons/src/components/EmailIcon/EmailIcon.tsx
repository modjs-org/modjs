import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModEmailIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const EmailIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModEmailIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="email-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M4570 8664 c-133 -6 -390 -41 -595 -80 -201 -39 -509 -126 -685 -194
                      -30 -12 -66 -25 -80 -30 -96 -31 -445 -199 -565 -271 -247 -148 -386 -242
                      -539 -367 -362 -295 -640 -600 -890 -972 -60 -90 -164 -257 -179 -290 -4 -8
                      -22 -42 -40 -75 -65 -119 -77 -142 -122 -240 -102 -223 -145 -331 -207 -525
                      -11 -36 -26 -81 -33 -100 -7 -19 -20 -64 -30 -100 -9 -36 -22 -87 -29 -115 -8
                      -27 -21 -86 -31 -130 -9 -44 -23 -106 -31 -137 -8 -32 -14 -70 -14 -85 0 -15
                      -6 -61 -14 -103 -44 -227 -51 -334 -51 -750 0 -338 3 -425 18 -525 30 -198 48
                      -307 62 -370 8 -33 16 -71 18 -85 5 -29 36 -141 87 -315 4 -16 23 -68 40 -115
                      18 -47 39 -103 47 -124 45 -123 206 -441 274 -544 16 -24 29 -45 29 -47 0 -16
                      180 -260 280 -380 110 -132 330 -349 445 -440 28 -22 52 -43 55 -46 10 -10
                      165 -124 220 -161 227 -151 507 -294 760 -388 158 -59 177 -65 310 -103 177
                      -50 357 -87 605 -124 173 -26 967 -26 1190 0 166 20 311 41 425 62 41 8 86 16
                      100 19 47 8 155 34 235 56 197 55 231 65 295 90 30 11 87 32 126 45 40 13 80
                      28 90 33 11 6 60 27 109 47 50 20 96 43 104 51 15 14 15 16 -23 139 -7 22 -20
                      65 -29 95 -9 30 -30 98 -47 150 -17 52 -38 120 -47 150 -33 112 -51 155 -65
                      153 -7 -1 -67 -26 -133 -56 -66 -29 -129 -56 -140 -60 -11 -3 -45 -15 -75 -27
                      -103 -40 -285 -92 -470 -133 -240 -54 -645 -97 -910 -97 -133 0 -452 23 -555
                      40 -265 43 -413 79 -625 151 -149 51 -390 160 -485 220 -22 14 -47 29 -55 33
                      -59 28 -182 115 -331 234 -119 95 -307 293 -425 447 -37 47 -124 175 -124 180
                      0 2 -21 39 -46 82 -25 43 -49 85 -54 93 -43 74 -159 340 -173 395 -3 11 -16
                      52 -30 90 -13 39 -32 99 -42 135 -9 36 -23 86 -31 112 -8 26 -14 55 -14 65 0
                      10 -6 47 -14 83 -84 381 -97 1005 -30 1445 57 373 141 680 272 990 56 133 171
                      359 222 440 11 17 24 39 30 50 30 59 150 229 246 350 107 135 374 402 509 511
                      102 82 329 239 420 290 114 63 276 144 360 179 50 20 104 43 120 50 79 35 357
                      120 440 135 22 4 60 12 85 18 76 18 218 40 372 58 165 18 582 16 743 -5 290
                      -38 554 -94 675 -143 14 -6 39 -14 55 -19 111 -29 406 -168 525 -247 14 -9 33
                      -21 42 -27 169 -101 428 -334 569 -510 54 -67 179 -242 179 -250 0 -2 19 -36
                      43 -77 47 -80 112 -212 147 -298 12 -30 26 -66 32 -80 37 -93 85 -256 122
                      -420 128 -567 76 -1368 -120 -1828 -8 -18 -14 -37 -14 -43 0 -17 -90 -199
                      -138 -279 -108 -180 -279 -363 -417 -447 -48 -29 -154 -77 -213 -95 -92 -28
                      -259 -27 -325 2 -184 82 -252 318 -209 730 7 69 19 161 27 205 7 44 20 123 29
                      175 8 52 22 140 31 195 37 233 47 294 60 375 8 47 21 130 30 185 9 55 22 136
                      30 180 13 78 28 172 59 365 25 155 47 290 61 375 7 44 21 127 30 185 9 58 23
                      141 31 185 14 78 14 80 -7 96 -31 23 -221 100 -324 132 -368 111 -886 178
                      -1213 157 -195 -13 -335 -27 -402 -40 -163 -33 -210 -43 -260 -57 -109 -31
                      -156 -46 -188 -59 -18 -8 -39 -14 -47 -14 -7 0 -26 -6 -42 -14 -15 -8 -53 -24
                      -83 -36 -118 -47 -283 -135 -455 -243 -145 -91 -374 -293 -524 -462 -69 -79
                      -251 -324 -251 -340 0 -2 -16 -27 -35 -56 -43 -65 -175 -331 -175 -352 0 -9
                      -4 -18 -10 -22 -5 -3 -14 -20 -19 -38 -5 -18 -21 -66 -35 -107 -97 -281 -138
                      -492 -156 -805 -17 -295 16 -588 91 -805 73 -212 167 -372 303 -520 278 -300
                      685 -434 1153 -380 213 24 462 102 616 192 26 15 50 28 52 28 15 0 195 132
                      265 194 123 110 264 273 354 410 32 48 63 85 69 83 7 -2 15 -26 19 -53 10 -74
                      34 -172 58 -239 11 -33 24 -69 27 -80 4 -11 19 -42 35 -68 15 -26 28 -50 28
                      -53 0 -11 74 -102 128 -157 172 -176 431 -267 759 -268 263 -1 470 37 753 136
                      45 16 267 124 304 148 23 14 134 89 186 124 124 85 329 293 459 465 112 149
                      259 419 336 618 9 25 21 56 26 68 9 24 36 106 63 192 46 148 83 328 123 595
                      15 99 18 186 18 500 0 396 1 388 -51 690 -29 170 -85 388 -120 473 -8 18 -14
                      39 -14 47 0 8 -6 29 -14 47 -8 18 -29 69 -46 113 -34 84 -172 368 -217 445
                      -197 339 -517 696 -847 944 -200 150 -490 321 -681 401 -16 7 -46 19 -65 27
                      -48 21 -156 63 -240 93 -19 7 -62 20 -95 30 -33 9 -78 23 -100 31 -23 8 -48
                      14 -57 14 -8 0 -38 6 -64 14 -96 27 -266 59 -489 92 -106 15 -677 27 -875 18z
                      m555 -2924 c28 -5 73 -13 100 -16 28 -4 56 -11 63 -17 16 -13 15 -61 -3 -166
                      -8 -47 -21 -131 -29 -186 -9 -55 -21 -134 -27 -175 -7 -41 -13 -91 -16 -110
                      -2 -19 -10 -79 -18 -132 -8 -54 -22 -144 -30 -200 -41 -272 -76 -433 -120
                      -543 -7 -16 -20 -50 -30 -75 -29 -76 -112 -237 -153 -298 -85 -127 -104 -150
                      -184 -233 -228 -236 -454 -325 -698 -274 -136 29 -234 89 -313 193 -46 60
                      -107 180 -107 210 0 9 -8 37 -17 62 -14 37 -17 85 -17 280 0 156 5 255 13 295
                      7 33 17 80 21 105 13 81 72 274 105 345 31 67 87 181 98 200 69 115 153 229
                      233 314 212 224 447 359 719 412 33 6 65 13 70 14 23 8 294 3 340 -5z"
                />
            </g>
        </ModEmailIcon>
    )
}

export default withSystemProps(forwardRef(EmailIcon))
