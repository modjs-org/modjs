{
    /* 
    -----------------------------------------------------------------------------------------------------------------------------
    ---------------------------------------------------------------------- DRAFT ------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------------
*/
}

import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModFullstackproIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const FullStackProIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModFullstackproIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="fullstackpro-icon"
        >
            <title>Full Stack Pro Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>

            <desc id="desc1">Created with Fabric.js 5.2.4</desc>
            <defs id="defs1">
                <rect
                    x="1158.4565"
                    y="440.08408"
                    width="563.04877"
                    height="284.76028"
                    id="rect2460"
                />
                <linearGradient id="linearGradient20">
                    <stop
                        style={{
                            stopColor: '#00ff00',
                            stopOpacity: 0.57232702,
                        }}
                        offset="0"
                        id="stop19"
                    />
                    <stop
                        offset="1"
                        id="stop20"
                        style={{
                            stopColor: '#000000',
                            stopOpacity: 0,
                        }}
                    />
                </linearGradient>
                <linearGradient id="linearGradient17">
                    <stop
                        style={{
                            stopColor: '#fd0000',
                            stopOpacity: 1,
                        }}
                        offset="0"
                        id="stop17"
                    />
                    <stop
                        style={{
                            stopColor: '#ff0000',
                            stopOpacity: 0,
                        }}
                        offset="1"
                        id="stop18"
                    />
                </linearGradient>
                <rect
                    x="485.08475"
                    y="530.84747"
                    width="1267.6271"
                    height="1848.8135"
                    id="rect64"
                />
                <radialGradient
                    xlinkHref="#linearGradient17"
                    id="radialGradient18"
                    cx="-1657.71"
                    cy="594.19354"
                    fx="-1657.71"
                    fy="594.19354"
                    r="64.238075"
                    gradientTransform="matrix(0.46431638,-1.7193288e-8,0,0.48461074,115.07382,-493.15168)"
                    gradientUnits="userSpaceOnUse"
                />
                <radialGradient
                    xlinkHref="#linearGradient20"
                    id="radialGradient21"
                    cx="-3544.5796"
                    cy="-1273.01"
                    fx="-3544.5796"
                    fy="-1273.01"
                    r="869.75195"
                    gradientTransform="matrix(0.0420917,0,0,0.03928462,-453.28456,-193.6885)"
                    gradientUnits="userSpaceOnUse"
                />
            </defs>

            <g
                transform="matrix(8.6054471,0,0,8.7278681,1094.1245,1667.5096)"
                id="g6"
            >
                <g
                    vectorEffect="non-scaling-stroke"
                    id="g5"
                    transform="translate(-1.5953632,-0.52432863)"
                >
                    <g
                        transform="matrix(0.02869121,0,0,-0.0285307,-96.020088,-147.79551)"
                        id="g1"
                    >
                        <path
                            id="path1"
                            style={{
                                opacity: 1,
                                fill: fill,
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                                strokeWidth: 1.00032,
                                strokeLinecap: 'butt',
                                strokeLinejoin: 'miter',
                                strokeMiterlimit: 4,
                                strokeDasharray: 'none',
                                strokeDashoffset: 0,
                            }}
                            d="m 339.03469,1497.7466 c -55.8729,1.2496 -112.8735,-5.5003 -155.87176,-20.5 -57.99964,-21 -913.64553,-534.11302 -1028.32173,-596.13 -48.32165,-44.7037 -103.10816,-111.98399 -156.5704,-197.83477 l -24.3225,-81.83282 -1.5535,-541.629243 -1.5532,-603.945637 c 48.49557,-41.54735 74.06033,-63.80513 108.87981,-99.76648 l -66.54815,121.99498 8.95793,515.4399544 21.69445,619.2957756 36.3386,76.4072 c 17.99974,35.99912 48.99939,82.00091 69.99913,102.00079 20.99974,19.99918 119.00178,83.99916 218.00048,140.9988 98.9987,56.999 315.00273,182.00175 480.00051,277.00045 164.998287,95.9987 322.99931,182.0002 349.99913,193.0002 63.99894,24.9993 173.00137,27.0005 240.00025,4.0005 71.99888,-25 991.00086,-557.00097 1048.00016,-607.00067 23.3526,-21.12858 64.1324,-73.724 96.8262,-121.24933 -22.3055,18.02725 -31.9309,26.25956 -78.1035,5.48262 C 1473.8872,669.47901 1166.1618,511.24409 914.16445,367.24639 515.16965,137.24917 450.16236,96.245385 392.16342,39.246427 c -47.9997,-47.9997113 -72,-81.0012 -89.99988,-125.000236 l -15.3218,-77.111251 -11.67816,-567.88901 c -1,-321.99593 -5.3e-4,-595.00083 2.99941,-608.00073 3,-11.9999 13.89334,-16.2947 21.89328,-16.2947 0.051,0 0.73026,0.1916 0.80136,0.1963 0,-5e-4 -0.0105,-0.031 -0.0105,-0.031 0,-3 116.31404,4.1301 170.31364,8.1301 110.99804,8 347.20729,69.2434 447.20599,109.2426 94.99874,38.9997 308.48844,183.1671 375.48714,239.16611 146.9987,121.99844 253.4147,272.16681 344.3059,439.59059 l 46.0003,87.00062 -0.955,553.000728 c -3,546.993202 5.1814,556.017512 -16.818,610.016512 -28.9999,70.99958 -96.2281,142.98264 -155.2275,187.98234 -55.9993,41.99906 -950.99966,559.0016 -1022.99924,591.0003 -38.49826,16.9996 -93.24876,26.2506 -149.1222,27.5009 z"
                        />
                    </g>

                    <g
                        transform="matrix(0.02869121,0,0,-0.0285307,114.08012,-166.9287)"
                        id="g4"
                    >
                        <text
                            xmlSpace="preserve"
                            transform="matrix(0.89388821,0,0,-0.88135013,-7418.876,-508.99734)"
                            id="text2460"
                            style={{
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                fontWeight: 'bold',
                                fontStretch: 'normal',
                                fontSize: '133.333px',
                                fontFamily: 'Sans',
                                // -inkscape-font-specification:'Sans, Bold',
                                fontVariantLigatures: 'normal',
                                fontVariantCaps: 'normal',
                                fontVariantNumeric: 'normal',
                                fontVariantEastAsian: 'normal',
                                whiteSpace: 'pre',
                                // shapeInside:'url(#rect2460)',
                                fill: '#007fcc',
                                fillOpacity: 1,
                                strokeWidth: 1.127,
                                strokeDasharray: 'none',
                            }}
                        />
                        <text
                            xmlSpace="preserve"
                            style={{
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                fontWeight: 'bold',
                                fontStretch: 'normal',
                                fontSize: '118.346px',
                                fontFamily: 'Sans',
                                // -inkscape-font-specification:'Sans, Bold'
                                fontVariantLigatures: 'normal',
                                fontVariantCaps: 'normal',
                                fontVariantNumeric: 'normal',
                                fontVariantEastAsian: 'normal',
                                fill: '#00ff00',
                                fillOpacity: '0.448378',
                                strokeWidth: '1.00032',
                                strokeDasharray: 'none',
                            }}
                            x="-6470.6084"
                            y="-1726.3799"
                            id="text2461"
                            transform="matrix(0.88546545,0.47303817,0.47976759,-0.87304549,0,0)"
                        >
                            <tspan
                                id="tspan2461"
                                style={{
                                    fontStyle: 'normal',
                                    fontVariant: 'normal',
                                    fontWeight: 'bold',
                                    fontStretch: 'normal',
                                    fontSize: '473.385px',
                                    fontFamily: 'Sans',
                                    // -inkscape-font-specification:'Sans, Bold'
                                    fontVariantLigatures: 'normal',
                                    fontVariantCaps: 'normal',
                                    fontVariantNumeric: 'normal',
                                    fontVariantEastAsian: 'normal',
                                    fill: '#ffffff',
                                    fillOpacity: 1,
                                    strokeWidth: '1.00032',
                                }}
                                x="-6470.6084"
                                y="-1726.3799"
                            >
                                _
                            </tspan>
                        </text>
                    </g>
                </g>
            </g>

            <text
                xmlSpace="preserve"
                id="text64"
                style={{
                    fontStyle: 'normal',
                    fontVariant: 'normal',
                    fontWeight: 'bold',
                    fontStretch: 'normal',
                    fontSize: '200px',
                    fontFamily: 'Sans',
                    // -inkscape-font-specification:'Sans, Bold'
                    fontVariantLigatures: 'normal',
                    fontVariantCaps: 'normal',
                    fontVariantNumeric: 'normal',
                    fontVariantEastAsian: 'normal',
                    whiteSpace: 'pre',
                    // shapeInside:'url(#rect64)',
                    fill: '#f6ffd5',
                    fillOpacity: '1',
                }}
                transform="matrix(0.18888376,-0.03086676,-6.829213e-4,0.22749781,255.23296,303.47094)"
            >
                <tspan x="485.08398" y="1441.6133" id="tspan4">
                    <tspan
                        style={{
                            fontSize: '1066.67px',
                            fontFamily: 'Rajdhani',
                            // -inkscape-font-specification:'Rajdhani, Bold',
                            fill: '#ffffff',
                        }}
                        id="tspan3"
                    >
                        $
                    </tspan>
                </tspan>
            </text>
            <ellipse
                style={{
                    fill: 'url(#radialGradient18)',
                    strokeWidth: '0.484526',
                }}
                id="path65"
                cx="-654.62805"
                cy="-205.19914"
                rx="29.826788"
                ry="31.130466"
                transform="matrix(-0.9981858,-0.06020895,0.10549731,-0.99441959,0,0)"
            />
            <ellipse
                style={{
                    fill: 'url(#radialGradient21)',
                    strokeWidth: '0.562377',
                }}
                id="path65-4"
                cx="-602.48199"
                cy="-243.69821"
                rx="36.609337"
                ry="34.167873"
                transform="matrix(-0.99855366,-0.05376411,0.1180197,-0.99301125,0,0)"
            />
        </ModFullstackproIcon>
    )
}

export default withSystemProps(forwardRef(FullStackProIcon))

// import React, { forwardRef } from 'react'
// import { styled } from 'styled-components'
// import { withSystemProps } from '@modjs/utils'
// import { IconProps } from '../../utils/IconProps'

// const ModFullstackproIcon = styled.svg<IconProps>`
//     fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
//     height: ${props =>
//         props.height ? props.height : props.theme.icons.height.lg};
//     width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
// `

// const FullStackProIcon = (
//     { fill, height, width, ...props }: IconProps,
//     ref?: React.Ref<HTMLElement>,
// ) => {
//     return (
//         <ModFullstackproIcon
//             {...props}
//             ref={ref}
//             version="1.0"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 900 900"
//             preserveAspectRatio="xMidYMid meet"
//             height={height}
//             width={width}
//             data-test="fullstackpro-icon"
//         >
//             <title>Full Stack Pro Icon</title>
//             <metadata>
//                 Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
//                 fullstackpro.io
//             </metadata>

//             <desc id="desc1">Created with Fabric.js 5.2.4</desc>
//             <defs id="defs1">
//                 <rect
//                     x="1158.4565"
//                     y="440.08408"
//                     width="563.04877"
//                     height="284.76028"
//                     id="rect2460"
//                 />
//                 <linearGradient id="linearGradient20">
//                     <stop
//                         style={{
//                             stopColor: '#00ff00',
//                             stopOpacity: 0.57232702,
//                         }}
//                         offset="0"
//                         id="stop19"
//                     />
//                     <stop
//                         offset="1"
//                         id="stop20"
//                         style={{
//                             stopColor: '#000000',
//                             stopOpacity: 0,
//                         }}
//                     />
//                 </linearGradient>
//                 <linearGradient id="linearGradient17">
//                     <stop
//                         style={{
//                             stopColor: '#fd0000',
//                             stopOpacity: 1,
//                         }}
//                         offset="0"
//                         id="stop17"
//                     />
//                     <stop
//                         style={{
//                             stopColor: '#ff0000',
//                             stopOpacity: 0,
//                         }}
//                         offset="1"
//                         id="stop18"
//                     />
//                 </linearGradient>
//                 <rect
//                     x="485.08475"
//                     y="530.84747"
//                     width="1267.6271"
//                     height="1848.8135"
//                     id="rect64"
//                 />
//                 <radialGradient
//                     xlinkHref="#linearGradient17"
//                     id="radialGradient18"
//                     cx="-1657.71"
//                     cy="594.19354"
//                     fx="-1657.71"
//                     fy="594.19354"
//                     r="64.238075"
//                     gradientTransform="matrix(0.46431638,-1.7193288e-8,0,0.48461074,115.07382,-493.15168)"
//                     gradientUnits="userSpaceOnUse"
//                 />
//                 <radialGradient
//                     xlinkHref="#linearGradient20"
//                     id="radialGradient21"
//                     cx="-3544.5796"
//                     cy="-1273.01"
//                     fx="-3544.5796"
//                     fy="-1273.01"
//                     r="869.75195"
//                     gradientTransform="matrix(0.0420917,0,0,0.03928462,-453.28456,-193.6885)"
//                     gradientUnits="userSpaceOnUse"
//                 />
//             </defs>

//             <g
//                 transform="matrix(8.6054471,0,0,8.7278681,1094.1245,1667.5096)"
//                 id="g6"
//             >
//                 <g
//                     vectorEffect="non-scaling-stroke"
//                     id="g5"
//                     transform="translate(-1.5953632,-0.52432863)"
//                 >
//                     <g
//                         transform="matrix(0.02869121,0,0,-0.0285307,-96.020088,-147.79551)"
//                         id="g1"
//                     >
//                         <path
//                             id="path1"
//                             style={{
//                                 opacity: 1,
//                                 fill: '#007fcc',
//                                 fillOpacity: 1,
//                                 fillRule: 'nonzero',
//                                 stroke: 'none',
//                                 strokeWidth: 1.00032,
//                                 strokeLinecap: 'butt',
//                                 strokeLinejoin: 'miter',
//                                 strokeMiterlimit: 4,
//                                 strokeDasharray: 'none',
//                                 strokeDashoffset: 0,
//                             }}
//                             d="m 339.03469,1497.7466 c -55.8729,1.2496 -112.8735,-5.5003 -155.87176,-20.5 -57.99964,-21 -913.64553,-534.11302 -1028.32173,-596.13 -48.32165,-44.7037 -103.10816,-111.98399 -156.5704,-197.83477 l -24.3225,-81.83282 -1.5535,-541.629243 -1.5532,-603.945637 c 48.49557,-41.54735 74.06033,-63.80513 108.87981,-99.76648 l -66.54815,121.99498 8.95793,515.4399544 21.69445,619.2957756 36.3386,76.4072 c 17.99974,35.99912 48.99939,82.00091 69.99913,102.00079 20.99974,19.99918 119.00178,83.99916 218.00048,140.9988 98.9987,56.999 315.00273,182.00175 480.00051,277.00045 164.998287,95.9987 322.99931,182.0002 349.99913,193.0002 63.99894,24.9993 173.00137,27.0005 240.00025,4.0005 71.99888,-25 991.00086,-557.00097 1048.00016,-607.00067 23.3526,-21.12858 64.1324,-73.724 96.8262,-121.24933 -22.3055,18.02725 -31.9309,26.25956 -78.1035,5.48262 C 1473.8872,669.47901 1166.1618,511.24409 914.16445,367.24639 515.16965,137.24917 450.16236,96.245385 392.16342,39.246427 c -47.9997,-47.9997113 -72,-81.0012 -89.99988,-125.000236 l -15.3218,-77.111251 -11.67816,-567.88901 c -1,-321.99593 -5.3e-4,-595.00083 2.99941,-608.00073 3,-11.9999 13.89334,-16.2947 21.89328,-16.2947 0.051,0 0.73026,0.1916 0.80136,0.1963 0,-5e-4 -0.0105,-0.031 -0.0105,-0.031 0,-3 116.31404,4.1301 170.31364,8.1301 110.99804,8 347.20729,69.2434 447.20599,109.2426 94.99874,38.9997 308.48844,183.1671 375.48714,239.16611 146.9987,121.99844 253.4147,272.16681 344.3059,439.59059 l 46.0003,87.00062 -0.955,553.000728 c -3,546.993202 5.1814,556.017512 -16.818,610.016512 -28.9999,70.99958 -96.2281,142.98264 -155.2275,187.98234 -55.9993,41.99906 -950.99966,559.0016 -1022.99924,591.0003 -38.49826,16.9996 -93.24876,26.2506 -149.1222,27.5009 z"
//                         />
//                     </g>

//                     <g
//                         transform="matrix(0.02869121,0,0,-0.0285307,114.08012,-166.9287)"
//                         id="g4"
//                     >
//                         <text
//                             xmlSpace="preserve"
//                             transform="matrix(0.89388821,0,0,-0.88135013,-7418.876,-508.99734)"
//                             id="text2460"
//                             style={{
//                                 fontStyle: 'normal',
//                                 fontVariant: 'normal',
//                                 fontWeight: 'bold',
//                                 fontStretch: 'normal',
//                                 fontSize: '133.333px',
//                                 fontFamily: 'Sans',
//                                 // -inkscape-font-specification:'Sans, Bold',
//                                 fontVariantLigatures: 'normal',
//                                 fontVariantCaps: 'normal',
//                                 fontVariantNumeric: 'normal',
//                                 fontVariantEastAsian: 'normal',
//                                 whiteSpace: 'pre',
//                                 // shapeInside:'url(#rect2460)',
//                                 fill: '#007fcc',
//                                 fillOpacity: 1,
//                                 strokeWidth: 1.127,
//                                 strokeDasharray: 'none',
//                             }}
//                         />
//                         <text
//                             xmlSpace="preserve"
//                             style={{
//                                 fontStyle: 'normal',
//                                 fontVariant: 'normal',
//                                 fontWeight: 'bold',
//                                 fontStretch: 'normal',
//                                 fontSize: '118.346px',
//                                 fontFamily: 'Sans',
//                                 // -inkscape-font-specification:'Sans, Bold'
//                                 fontVariantLigatures: 'normal',
//                                 fontVariantCaps: 'normal',
//                                 fontVariantNumeric: 'normal',
//                                 fontVariantEastAsian: 'normal',
//                                 fill: '#00ff00',
//                                 fillOpacity: '0.448378',
//                                 strokeWidth: '1.00032',
//                                 strokeDasharray: 'none',
//                             }}
//                             x="-6470.6084"
//                             y="-1726.3799"
//                             id="text2461"
//                             transform="matrix(0.88546545,0.47303817,0.47976759,-0.87304549,0,0)"
//                         >
//                             <tspan
//                                 id="tspan2461"
//                                 style={{
//                                     fontStyle: 'normal',
//                                     fontVariant: 'normal',
//                                     fontWeight: 'bold',
//                                     fontStretch: 'normal',
//                                     fontSize: '473.385px',
//                                     fontFamily: 'Sans',
//                                     // -inkscape-font-specification:'Sans, Bold'
//                                     fontVariantLigatures: 'normal',
//                                     fontVariantCaps: 'normal',
//                                     fontVariantNumeric: 'normal',
//                                     fontVariantEastAsian: 'normal',
//                                     fill: '#00ff00',
//                                     fillOpacity: '0.448378',
//                                     strokeWidth: '1.00032',
//                                 }}
//                                 x="-6470.6084"
//                                 y="-1726.3799"
//                             >
//                                 _
//                             </tspan>
//                         </text>
//                     </g>
//                 </g>
//             </g>

//             <text
//                 xmlSpace="preserve"
//                 id="text64"
//                 style={{
//                     fontStyle: 'normal',
//                     fontVariant: 'normal',
//                     fontWeight: 'bold',
//                     fontStretch: 'normal',
//                     fontSize: '200px',
//                     fontFamily: 'Sans',
//                     // -inkscape-font-specification:'Sans, Bold'
//                     fontVariantLigatures: 'normal',
//                     fontVariantCaps: 'normal',
//                     fontVariantNumeric: 'normal',
//                     fontVariantEastAsian: 'normal',
//                     whiteSpace: 'pre',
//                     // shapeInside:'url(#rect64)',
//                     fill: '#f6ffd5',
//                     fillOpacity: '1',
//                 }}
//                 transform="matrix(0.18888376,-0.03086676,-6.829213e-4,0.22749781,255.23296,303.47094)"
//             >
//                 <tspan x="485.08398" y="1441.6133" id="tspan4">
//                     <tspan
//                         style={{
//                             fontSize: '1066.67px',
//                             fontFamily: 'Rajdhani',
//                             // -inkscape-font-specification:'Rajdhani, Bold',
//                             fill: '#000000',
//                         }}
//                         id="tspan3"
//                     >
//                         $
//                     </tspan>
//                 </tspan>
//             </text>
//             <ellipse
//                 style={{
//                     fill: 'url(#radialGradient18)',
//                     strokeWidth: '0.484526',
//                 }}
//                 id="path65"
//                 cx="-654.62805"
//                 cy="-205.19914"
//                 rx="29.826788"
//                 ry="31.130466"
//                 transform="matrix(-0.9981858,-0.06020895,0.10549731,-0.99441959,0,0)"
//             />
//             <ellipse
//                 style={{
//                     fill: 'url(#radialGradient21)',
//                     strokeWidth: '0.562377',
//                 }}
//                 id="path65-4"
//                 cx="-602.48199"
//                 cy="-243.69821"
//                 rx="36.609337"
//                 ry="34.167873"
//                 transform="matrix(-0.99855366,-0.05376411,0.1180197,-0.99301125,0,0)"
//             />
//         </ModFullstackproIcon>
//     )
// }

// export default withSystemProps(forwardRef(FullStackProIcon))
