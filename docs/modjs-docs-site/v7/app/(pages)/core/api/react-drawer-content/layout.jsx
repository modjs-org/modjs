//core/api/react-drawer-content
import StyledComponentsRegistry from '../../../../registry'

export const metadata = {
    title: 'React DrawerContent API | Mod.js | Core',
    description:
        'API reference for the React DrawerContent component from Modj.js. Learn about how to use the DrawerContent component and all the valid props that can be supplied to this component.',
    keywords: ['Mod.js React DrawerContent API'], //ALERT: keyword cannibalization
    robots: 'index,follow',
    referrer: 'origin-when-cross-origin', //Send full referrer (including path and query parameters) if the user navigates to the other page WITHIN the same origin (same domain protocol and port)
}

export default function RootLayout({ children }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
