//core/api/react-pre
import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'React Pre API | Mod.js | Core',
    description:
        'API reference for the React Pre component from Modj.js. Learn about how to use the Pre component and all the valid props that can be supplied to this component.',
    keywords: ['Mod.js React Pre API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
