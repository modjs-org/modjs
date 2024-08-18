import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModVitestIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const VitestIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModVitestIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 165 165"
            height={height}
            width={width}
            data-test="Vitest"
        >
            <title>Vitest Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January July 27th,
                2024 @ www.fullstackpro.io
            </metadata>
            <path
                d="M120.831 57.2543L84.693 109.505C84.3099 110.059 83.7558 110.474 83.1148 110.687C82.4738 110.9 81.7809 110.898 81.1412 110.684C80.5015 110.469 79.95 110.052 79.5702 109.497C79.1905 108.941 79.0032 108.277 79.037 107.606L80.4833 78.7582L57.1343 73.8064C56.6353 73.7007 56.1704 73.474 55.7807 73.1465C55.391 72.8191 55.0885 72.4009 54.9001 71.929C54.7117 71.4571 54.6432 70.9461 54.7006 70.4412C54.758 69.9364 54.9395 69.4532 55.2291 69.0345L91.3675 16.7837C91.7507 16.2294 92.3048 15.8145 92.9458 15.6018C93.5869 15.3891 94.2798 15.3902 94.9196 15.6051C95.5593 15.8199 96.1109 16.2367 96.4906 16.7923C96.8703 17.3478 97.0575 18.0117 97.0236 18.6833L95.5773 47.5314L118.926 52.4828C119.425 52.5885 119.89 52.8152 120.28 53.1426C120.67 53.4701 120.972 53.8883 121.16 54.3602C121.349 54.8321 121.417 55.3431 121.36 55.8479C121.303 56.3528 121.121 56.836 120.831 57.2547L120.831 57.2543Z"
                fill="#FCC72B"
            />
            <path
                d="M82.9866 153.343C82.0254 153.344 81.0735 153.156 80.1855 152.788C79.2975 152.42 78.4909 151.88 77.8122 151.2L43.6658 117.056C42.2998 115.683 41.5341 113.824 41.5366 111.887C41.5392 109.95 42.3098 108.092 43.6796 106.723C45.0493 105.353 46.9064 104.582 48.8435 104.579C50.7807 104.577 52.6399 105.342 54.0134 106.708L82.9866 135.678L146.105 72.5626C147.481 71.2088 149.336 70.4536 151.266 70.4615C153.197 70.4693 155.046 71.2396 156.41 72.6045C157.775 73.9695 158.546 75.8184 158.554 77.7487C158.561 79.679 157.806 81.5342 156.452 82.9101L88.1597 151.2C87.4811 151.881 86.6747 152.42 85.7869 152.788C84.8992 153.156 83.9475 153.344 82.9866 153.343Z"
                fill="#729B1B"
            />
            <path
                d="M82.9572 153.343C83.9184 153.344 84.8703 153.156 85.7583 152.788C86.6463 152.42 87.4528 151.88 88.1316 151.2L122.278 117.056C123.644 115.683 124.41 113.824 124.407 111.887C124.405 109.95 123.634 108.092 122.264 106.723C120.894 105.353 119.037 104.582 117.1 104.579C115.163 104.577 113.304 105.342 111.93 106.708L82.9572 135.678L19.8389 72.5626C18.4629 71.2088 16.6077 70.4536 14.6775 70.4615C12.7472 70.4693 10.8982 71.2396 9.53331 72.6045C8.16839 73.9695 7.39811 75.8184 7.39025 77.7487C7.38239 79.679 8.13759 81.5342 9.49135 82.9101L77.784 151.2C78.4627 151.881 79.2691 152.42 80.1568 152.788C81.0446 153.156 81.9963 153.344 82.9572 153.343Z"
                fill="#729B1B"
                fill-opacity="0.5"
            />
        </ModVitestIcon>
    )
}

export default withSystemProps(forwardRef(VitestIcon))
