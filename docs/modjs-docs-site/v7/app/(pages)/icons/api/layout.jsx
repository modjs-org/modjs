//core/api/react-url-field
import StyledComponentsRegistry from '../../../registry'

export const metadata = {
    title: 'React Icons API | Mod.js | Icons',
    description:
        'API reference for the React Icons component from Modj.js. Learn about how to use the Icons component and all the valid props that can be supplied to these component.',
    keywords: ['Mod.js React Icons API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
