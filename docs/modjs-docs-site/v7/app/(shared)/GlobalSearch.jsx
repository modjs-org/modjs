import React, { useState } from 'react'
import {
    Box,
    Button,
    Card,
    Grid,
    Link,
    Modal,
    ModalContent,
    SearchField,
    SearchResults,
    Tooltip,
    TooltipContent,
    Typography,
} from '@modjs/core'
import { SearchIcon } from '@modjs/icons'

const searchResults = [
    { title: 'Core Installation', link: '/core/installation' },
    { title: 'Core Customization', link: '/core/customization' },
    { title: 'Core API', link: '/core/api/react-accordion' },
    { title: 'Icons Installation', link: '/icons/installation' },
    { title: 'Icons Customization', link: '/icons/customization' },
    { title: 'Icon API', link: '/icons/api' },

    { title: 'Accordion API', link: '/core/api/react-accordion' },
    {
        title: 'AccordionContent API',
        link: '/core/api/react-accordion-content',
    },
    {
        title: 'AccordionTitle API',
        link: '/core/api/react-accordion-title',
    },
    { title: 'Appbar API', link: '/core/api/react-appbar' },
    { title: 'Article API', link: '/core/api/react-article' },
    { title: 'Aside API', link: '/core/api/react-aside' },
    { title: 'Avatar API', link: '/core/api/react-avatar' },
    { title: 'Box API', link: '/core/api/react-box' },
    { title: 'Breadcrumbs API', link: '/core/api/react-breadcrumbs' },
    { title: 'Button API', link: '/core/api/react-button' },
    { title: 'Card API', link: '/core/api/react-card' },
    { title: 'CardContent API', link: '/core/api/react-card-content' },
    { title: 'CardFooter API', link: '/core/api/react-card-footer' },
    { title: 'CardHeader API', link: '/core/api/react-card-header' },
    { title: 'CardMedia API', link: '/core/api/react-card-media' },
    { title: 'CardMeta API', link: '/core/api/react-card-meta' },
    { title: 'Carousel API', link: '/core/api/react-carousel' },
    {
        title: 'CarouselDescription API',
        link: '/core/api/react-carousel-description',
    },
    { title: 'CarouselExcerpt API', link: '/core/api/react-carousel-excerpt' },
    { title: 'CarouselFooter API', link: '/core/api/react-carousel-footer' },
    { title: 'CarouselItem API', link: '/core/api/react-carousel-item' },
    { title: 'CarouselMedia API', link: '/core/api/react-carousel-media' },
    { title: 'CodeEditor API', link: '/core/api/react-code-editor' },
    {
        title: 'ConfirmPasswordField API',
        link: '/core/api/react-confirm-password-field',
    },
    { title: 'Container API', link: '/core/api/react-container' },
    { title: 'Copy API', link: '/core/api/react-copy' },
    { title: 'CopyResponse API', link: '/core/api/react-copy-response' },
    {
        title: 'CreatePasswordField API',
        link: '/core/api/react-create-password-field',
    },
    { title: 'Drawer API', link: '/core/api/react-drawer' },
    { title: 'DrawerContent API', link: '/core/api/react-drawer-content' },
    { title: 'Dropdown API', link: '/core/api/react-dropdown' },
    { title: 'DropdownContent API', link: '/core/api/react-dropdown-content' },
    { title: 'EmailField API', link: '/core/api/react-email-field' },
    { title: 'Fieldset API', link: '/core/api/react-fieldset' },
    { title: 'Footer API', link: '/core/api/react-footer' },
    { title: 'Form API', link: '/core/api/react-form' },
    { title: 'Grid API', link: '/core/api/react-grid' },
    { title: 'Header API', link: '/core/api/react-header' },
    { title: 'Image API', link: '/core/api/react-image' },
    { title: 'Layout API', link: '/core/api/react-layout' },
    { title: 'LinearProgress API', link: '/core/api/react-linear-progress' },
    { title: 'Link API', link: '/core/api/react-link' },
    { title: 'List API', link: '/core/api/react-list' },
    { title: 'Main API', link: '/core/api/react-main' },
    { title: 'MessageArea API', link: '/core/api/react-message-area' },
    { title: 'Modal API', link: '/core/api/react-modal' },
    { title: 'ModalContent API', link: '/core/api/react-modal-content' },
    { title: 'NameField API', link: '/core/api/react-name-field' },
    { title: 'Nav API', link: '/core/api/react-nav' },
    { title: 'OrderedList API', link: '/core/api/react-ordered-list' },
    { title: 'PasswordField API', link: '/core/api/react-password-field' },
    { title: 'PhoneField API', link: '/core/api/react-phone-field' },
    { title: 'Pill API', link: '/core/api/react-pill' },
    { title: 'Pre API', link: '/core/api/react-pre' },
    { title: 'SearchField API', link: '/core/api/react-search-field' },
    { title: 'SearchResults API', link: '/core/api/react-search-results' },
    { title: 'Section API', link: '/core/api/react-section' },
    { title: 'Separator API', link: '/core/api/react-separator' },
    { title: 'SideNavigation API', link: '/core/api/react-side-navigation' },
    { title: 'Slideshow API', link: '/core/api/react-slideshow' },
    {
        title: 'SlideshowDescription API',
        link: '/core/api/react-slideshow-description',
    },
    {
        title: 'SlideshowExcerpt API',
        link: '/core/api/react-slideshow-excerpt',
    },
    { title: 'SlideshowFooter API', link: '/core/api/react-slideshow-footer' },
    { title: 'SlideshowItem API', link: '/core/api/react-slideshow-item' },
    { title: 'SlideshowMedia API', link: '/core/api/react-slideshow-media' },
    { title: 'Snackbar API', link: '/core/api/react-snackbar' },
    { title: 'SnackbarContent API', link: '/core/api/react-snackbar-content' },
    { title: 'SnackbarHeader API', link: '/core/api/react-snackbar-header' },
    { title: 'Table API', link: '/core/api/react-table' },
    { title: 'TableBody API', link: '/core/api/react-table-body' },
    { title: 'TableData API', link: '/core/api/react-table-data' },
    { title: 'TableHead API', link: '/core/api/react-table-head' },
    { title: 'TableHeader API', link: '/core/api/react-table-header' },
    { title: 'TableRow API', link: '/core/api/react-table-row' },
    { title: 'TextField API', link: '/core/api/react-text-field' },
    { title: 'TextArea API', link: '/core/api/react-textarea' },
    { title: 'Toolbar API', link: '/core/api/react-toolbar' },
    { title: 'Tooltip API', link: '/core/api/react-tooltip' },
    { title: 'TooltipContent API', link: '/core/api/react-tooltip-content' },
    { title: 'Typography API', link: '/core/api/react-typography' },
    { title: 'UnorderedList API', link: '/core/api/react-unordered-list' },
    { title: 'UrlField API', link: '/core/api/react-url-field' },
]

const GlobalSearch = ({ toggleOpenId, toggleCloseId, searchFieldId }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])

    const handleSearch = e => {
        const value = e.target.value
        setSearchTerm(value)
        if (value.trim() === '') {
            setResults([])
            return
        }
        const filteredResults = searchResults
            .filter(result =>
                result.title.toLowerCase().includes(value.toLowerCase()),
            )
            .slice(0, 5) //Limit search results to the first 5 objects in the filteredResults array
        setResults(filteredResults)
    }

    return (
        <Modal
            // toggleOpen={<SearchField notched={true} id={toggleOpenId} />}
            toggleOpen={
                <Tooltip
                    arrow={true}
                    el={
                        <Button
                            variant="icon"
                            notched={true}
                            id={toggleOpenId}
                            data-testid="GlobalSearch_btn-toggle_search_modal"
                        >
                            <SearchIcon />
                        </Button>
                    }
                >
                    <TooltipContent displayPosition="left">
                        <Typography variant="small" color="white">
                            Toggle Search Modal
                        </Typography>
                    </TooltipContent>
                </Tooltip>
            }
            toggleClose={
                <Button variant="icon" notched={true} id={toggleCloseId}>
                    <SearchIcon />
                </Button>
            }
        >
            <ModalContent
                title={
                    <Typography variant="h3">
                        What are you looking for?
                    </Typography>
                }
            >
                <SearchField
                    notched={true}
                    id={searchFieldId}
                    onChange={handleSearch}
                    placeholder="Search documentation..."
                >
                    {searchTerm && (
                        <SearchResults
                            mt={4}
                            title={
                                <Box>
                                    <Typography variant="h3">
                                        Search Results:
                                    </Typography>
                                </Box>
                            }
                        >
                            {results.length > 0 ? (
                                results.map((res, index) => (
                                    <Link
                                        variant="transparent"
                                        key={index}
                                        href={res.link}
                                    >
                                        {res.title}
                                    </Link>
                                ))
                            ) : (
                                <Box px={8}>
                                    <Typography variant="body1" color="error">
                                        No results for "{searchTerm}"
                                    </Typography>
                                </Box>
                            )}
                        </SearchResults>
                    )}
                </SearchField>
                {!searchTerm && (
                    <>
                        <Typography variant="h3" mt={16}>
                            Common Searches:
                        </Typography>

                        <Grid columns={2} gap={16}>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/core"
                                    data-testid="GlobalSearch_link-core"
                                >
                                    @modjs/core
                                </Link>
                            </Card>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/icons"
                                    data-testid="GlobalSearch_link-icons"
                                >
                                    @modjs/icons
                                </Link>
                            </Card>
                        </Grid>
                        <Grid columns={2} gap={16}>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/core/installation"
                                    data-testid="GlobalSearch_link-core_installation"
                                >
                                    Core Installation
                                </Link>
                            </Card>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/icons/installation"
                                    data-testid="GlobalSearch_link-icons_installation"
                                >
                                    Icons Installation
                                </Link>
                            </Card>
                        </Grid>
                        <Grid columns={2} gap={16}>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/core/customization"
                                    data-testid="GlobalSearch_link-core_customization"
                                >
                                    Core Customization
                                </Link>
                            </Card>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/icons/customization"
                                    data-testid="GlobalSearch_link-icons_customization"
                                >
                                    Icons Customization
                                </Link>
                            </Card>
                        </Grid>
                        <Grid columns={2} gap={16}>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/core/api/react-accordion"
                                    data-testid="GlobalSearch_link-core_api"
                                >
                                    Core API
                                </Link>
                            </Card>
                            <Card>
                                <Link
                                    variant="transparent"
                                    href="/icons/api"
                                    data-testid="GlobalSearch_link-icons_api"
                                >
                                    Icons API
                                </Link>
                            </Card>
                        </Grid>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default GlobalSearch
