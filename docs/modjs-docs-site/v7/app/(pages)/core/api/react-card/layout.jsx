//core/api/react-card
import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'React Card API | Mod.js | Core',
    description:
        'API reference for the React Card component from Modj.js. Learn about how to use the Card component and all the valid props that can be supplied to this component.',
    keywords: ['Mod.js React Card API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
