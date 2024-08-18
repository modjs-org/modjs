//core/api/react-appbar
import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'React Appbar API | Mod.js | Core',
    description:
        'API reference for the React Appbar component from Modj.js. Learn about how to use the Appbar component and all the valid props that can be supplied to this component.',
    keywords: ['Mod.js React Appbar API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
