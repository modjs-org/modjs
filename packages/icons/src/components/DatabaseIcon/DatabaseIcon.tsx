import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModDatabaseIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const DatabaseIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModDatabaseIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            height={height}
            width={width}
            data-test="database-icon"
        >
            <title>Database Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <g
                transform="translate(100, 1070) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M3365 8991 c9 -15 -21 -19 -185 -26 -212 -8 -664 -52 -831 -80 -47
          -8 -98 -15 -114 -15 -15 0 -66 -7 -114 -16 -47 -9 -122 -22 -166 -30 -209 -38
          -358 -71 -540 -118 -428 -112 -784 -259 -1017 -421 -209 -145 -329 -292 -387
          -476 -16 -51 -14 -264 3 -319 73 -233 274 -427 622 -599 132 -65 156 -76 234
          -106 25 -9 59 -22 75 -29 17 -7 77 -27 135 -45 58 -19 120 -40 138 -47 18 -8
          41 -14 51 -14 9 0 37 -6 62 -14 86 -27 216 -59 369 -90 41 -8 107 -22 146 -31
          40 -8 80 -15 90 -15 11 0 51 -6 89 -14 158 -33 642 -92 960 -116 445 -34 1506
          -37 1825 -5 80 8 172 15 205 15 33 0 116 7 185 15 69 9 184 22 255 31 193 23
          342 44 412 60 34 8 74 14 88 14 14 0 54 6 88 14 34 8 100 22 147 31 167 34
          365 84 535 136 99 31 128 41 215 74 25 9 63 24 85 32 134 51 346 159 460 235
          167 110 325 285 370 408 45 124 55 232 31 340 -19 83 -34 122 -73 190 -84 145
          -228 276 -448 407 -25 15 -219 110 -263 128 -18 8 -47 21 -65 28 -66 29 -93
          39 -241 87 -163 54 -217 70 -313 94 -199 50 -272 67 -393 91 -47 9 -115 23
          -151 31 -37 8 -78 14 -93 14 -14 0 -58 6 -98 14 -207 41 -767 101 -1038 111
          -164 7 -194 11 -185 26 4 5 -222 9 -580 9 -358 0 -584 -4 -580 -9z"
                />
                <path
                    d="M0 6616 c0 -89 34 -212 79 -286 11 -19 24 -42 28 -50 26 -59 181
          -223 266 -282 190 -132 342 -212 562 -295 22 -8 51 -19 63 -24 69 -27 291 -94
          407 -123 33 -8 87 -21 120 -30 33 -8 98 -22 145 -31 47 -9 117 -22 155 -30
          273 -55 755 -116 1154 -146 78 -6 149 -13 157 -16 11 -4 14 -51 14 -259 l0
          -254 -92 0 c-188 -1 -921 85 -1163 136 -38 8 -81 14 -94 14 -14 0 -50 6 -80
          14 -31 8 -92 22 -136 31 -297 62 -546 131 -795 220 -288 104 -505 211 -712
          352 l-78 53 0 -92 c1 -104 12 -155 55 -243 55 -115 157 -227 307 -338 43 -31
          80 -57 83 -57 3 0 24 -12 48 -27 114 -73 420 -204 602 -258 33 -10 78 -23 100
          -30 22 -7 65 -19 95 -28 30 -8 80 -22 111 -31 31 -9 64 -16 74 -16 10 0 41 -6
          69 -14 82 -23 306 -68 451 -91 291 -46 289 -46 650 -90 72 -8 150 -15 175 -15
          25 0 113 -6 195 -15 505 -50 1284 -50 1880 0 94 8 197 17 230 19 495 40 1179
          162 1570 281 22 6 67 20 100 30 33 9 77 23 98 31 20 8 54 20 75 28 79 29 128
          49 167 66 76 34 230 111 260 131 17 10 37 22 45 26 78 35 316 251 353 319 110
          204 107 182 107 885 0 324 -4 589 -9 589 -4 0 -25 -11 -45 -25 -20 -14 -39
          -25 -41 -25 -2 0 -23 -13 -47 -29 -91 -60 -368 -203 -488 -251 -30 -12 -86
          -35 -125 -51 -38 -15 -133 -49 -210 -74 -77 -25 -153 -50 -170 -56 -16 -6 -46
          -14 -65 -19 -19 -4 -71 -18 -115 -30 -44 -12 -100 -26 -123 -31 -24 -5 -60
          -13 -80 -18 -171 -45 -521 -109 -792 -145 -63 -9 -167 -22 -230 -31 -63 -8
          -133 -15 -155 -15 -22 0 -101 -6 -175 -15 -716 -78 -1940 -51 -2685 60 -55 8
          -113 15 -129 15 -15 0 -65 7 -110 15 -44 8 -124 22 -176 30 -52 9 -123 23
          -157 31 -34 8 -72 14 -85 14 -28 0 -100 16 -378 85 -58 15 -121 30 -140 35
          -19 5 -66 18 -105 30 -38 12 -83 25 -100 30 -40 11 -137 45 -215 75 -25 9 -63
          24 -85 32 -62 23 -90 36 -230 104 -158 76 -255 134 -357 211 l-78 58 0 -64z
          m4198 -1344 c9 -7 12 -65 10 -258 l-3 -249 -262 -3 -263 -2 0 253 c0 140 3
          257 7 260 9 10 495 8 511 -1z"
                />
                <path
                    d="M3 4484 c9 -132 36 -211 116 -334 74 -115 276 -291 434 -379 100 -56
          301 -151 318 -151 6 0 23 -6 37 -14 30 -15 49 -22 202 -71 120 -39 179 -57
          265 -78 33 -9 87 -22 120 -31 237 -60 724 -143 975 -166 47 -4 128 -13 180
          -18 85 -10 386 -39 465 -45 l30 -2 3 -254 c1 -140 -1 -258 -5 -262 -27 -27
          -1040 88 -1300 147 -34 8 -74 14 -88 14 -14 0 -51 6 -83 14 -31 8 -91 21 -132
          31 -303 66 -590 148 -790 225 -30 12 -66 25 -80 30 -41 13 -153 63 -270 119
          -84 41 -202 109 -297 172 l-103 68 0 -59 c0 -112 57 -263 143 -376 63 -83 187
          -199 277 -259 82 -55 87 -58 157 -96 104 -58 141 -76 218 -107 44 -19 93 -40
          108 -48 16 -8 35 -14 42 -14 8 0 29 -6 47 -14 85 -36 221 -80 378 -121 540
          -141 1133 -224 1920 -271 313 -18 1102 -16 1385 5 534 39 886 79 1280 147 189
          32 441 86 565 120 30 8 78 21 105 29 274 73 574 192 761 302 233 135 377 276
          458 446 54 114 56 147 56 783 0 571 0 584 -19 584 -11 0 -23 -4 -26 -10 -17
          -27 -336 -203 -515 -283 -123 -55 -335 -135 -415 -156 -16 -5 -41 -13 -55 -18
          -52 -21 -288 -87 -425 -118 -38 -9 -93 -23 -121 -31 -28 -8 -59 -14 -68 -14
          -10 0 -48 -6 -85 -14 -367 -80 -750 -130 -1406 -183 -304 -24 -1290 -24 -1590
          1 -626 51 -956 89 -1295 151 -187 33 -259 47 -315 60 -33 7 -94 21 -135 30
          -216 48 -508 133 -670 195 -30 12 -66 25 -80 30 -66 23 -112 41 -128 50 -9 5
          -62 30 -117 56 -115 54 -275 148 -355 209 -88 67 -83 68 -77 -21z m4205 -1569
          c2 -226 1 -251 -15 -262 -24 -18 -484 -18 -501 -1 -13 13 -18 499 -5 511 4 4
          122 6 262 5 l256 -3 3 -250z"
                />
                <path
                    d="M3 2373 c9 -131 37 -213 116 -333 123 -187 387 -380 691 -504 36 -15
          74 -31 85 -35 65 -27 90 -36 185 -67 165 -53 237 -74 375 -107 33 -8 83 -21
          110 -27 28 -7 70 -16 95 -20 57 -10 147 -28 227 -46 34 -8 75 -14 90 -14 15 0
          61 -6 103 -14 203 -39 799 -106 942 -106 42 0 88 -4 102 -10 l26 -10 0 -254
          c0 -218 -2 -255 -15 -260 -9 -3 -61 -1 -118 4 -56 6 -133 13 -172 15 -145 11
          -383 36 -475 51 -52 8 -106 14 -120 14 -14 0 -65 7 -115 16 -49 8 -130 22
          -180 30 -128 21 -249 43 -330 61 -188 40 -319 71 -375 87 -25 8 -74 21 -110
          31 -105 28 -240 71 -330 105 -30 12 -75 28 -100 37 -43 15 -214 85 -252 104
          -84 42 -212 110 -243 130 -16 10 -37 22 -45 26 -8 4 -50 31 -92 60 l-78 53 0
          -59 c0 -180 114 -388 300 -548 67 -57 178 -137 235 -169 149 -82 341 -170 465
          -213 140 -49 292 -96 410 -127 173 -45 157 -41 390 -88 424 -85 929 -146 1470
          -176 239 -13 1130 -13 1375 0 394 22 889 74 1103 116 40 8 84 14 98 14 15 0
          56 6 93 14 36 8 104 22 151 31 121 24 194 41 393 91 96 24 150 40 313 94 148
          48 175 58 241 87 18 7 47 20 65 28 59 25 242 116 273 136 17 10 37 22 45 26 8
          3 31 19 51 35 20 15 40 28 44 28 8 0 90 68 146 120 78 72 166 198 197 280 40
          106 42 147 42 747 0 479 -2 583 -13 583 -8 0 -40 -18 -71 -40 -159 -111 -355
          -214 -591 -309 -44 -18 -95 -39 -113 -47 -18 -8 -41 -14 -50 -14 -10 0 -22 -4
          -28 -9 -9 -8 -192 -67 -299 -96 -27 -8 -75 -21 -105 -29 -561 -153 -1350 -259
          -2215 -296 -608 -26 -1408 7 -1970 81 -44 6 -116 14 -160 19 -44 5 -107 14
          -140 19 -33 6 -105 17 -160 26 -291 47 -552 104 -835 183 -84 23 -411 131
          -445 147 -16 7 -70 30 -120 51 -99 40 -303 144 -393 199 -58 36 -112 72 -143
          96 -20 16 -40 29 -44 29 -4 0 -5 -35 -2 -77z m4193 -1317 c11 -4 14 -55 14
          -260 l0 -256 -22 -5 c-13 -3 -131 -4 -263 -3 l-240 3 -3 254 c-1 146 2 258 7
          265 9 11 478 13 507 2z"
                />
            </g>
        </ModDatabaseIcon>
    )
}

export default withSystemProps(forwardRef(DatabaseIcon))
