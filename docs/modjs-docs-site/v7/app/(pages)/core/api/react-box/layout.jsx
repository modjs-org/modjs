//core/api/react-box
import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'React Box API | Mod.js | Core',
    description:
        'API reference for the React Box component from Modj.js. Learn about how to use the Box component and all the valid props that can be supplied to this component.',
    keywords: ['Mod.js React Box API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
