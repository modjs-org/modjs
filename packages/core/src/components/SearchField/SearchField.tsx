import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { SearchIcon } from '@modjs/icons'
import SearchContext from '../../context/SearchContext/SearchContext'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
    ref?: React.Ref<HTMLElement>
    minLength?: string
    maxLength?: string
    autoComplete?: string
    placeholder?: string
    type?: string
    name?: string
    id?: string
    value?: string
}

interface ModSearchFieldProps extends TextFieldProps {
    active?: boolean
    valid?: boolean
    dataValue?: string
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
}

const forwardProps = (prop: string) =>
    ![
        'isOpen',
        'minLength',
        'maxLength',
        'autoComplete',
        'placeholder',
        'type',
        'name',
        'id',
        'value',
        'active',
        'valid',
        'dataValue',
        'variant',
        'notched',
    ].includes(prop)

const ModSearchFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSearchFieldProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 6px;
    background: ${props =>
        props.variant === 'filled'
            ? props.theme.color.light
            : props.theme.color.transparent};
    ${props =>
        props.notched &&
        `
      clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px, 8px 0%);
    `}
    ${props =>
        ((!props.notched && props.variant === 'outlined') ||
            (!props.notched && props.variant === 'filled')) &&
        `
      border: ${`1px solid ${props.theme.color.dark}`};
      border-radius: ${props.theme.borderRadius};
    `};
    ${props =>
        props.variant === 'transparent' &&
        `
     border-bottom: ${`1px solid ${props.theme.color.dark}`};
    `}
    ${props =>
        ((props.variant === 'filled' && props.notched) ||
            (props.variant === 'outlined' && props.notched)) &&
        `
      &:before { 
        content: '';
        background: ${props.theme.color.dark};
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      };
    `};
`

const ModSearchField = styled.input<TextFieldProps>`
    font-size: ${props => props.theme.typography.fs.md};
    font-family: ${props => props.theme.typography.ff.primary};
    color: ${props => props.theme.typography.color.main};
    display: flex;
    align-items: center;
    padding: 9px 4px;
    width: 100%;
    border: none;
    box-sizing: border-box;
    background: transparent;
    &:focus {
        outline: none;
    }
    &:active {
        outline: none;
    }
`

const ModSearchOverlay = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${props => props.theme.color.dark};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    opacity: 0;
`

const SearchField = (
    {
        minLength,
        maxLength,
        autoComplete,
        placeholder,
        type,
        name,
        id,
        variant,
        notched,
        children,
        ...props
    }: ModSearchFieldProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSearchResults = () => {
        setIsOpen(!isOpen)
    }

    const value = {
        isOpen,
        toggleSearchResults,
    }

    const [active, setActive] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value } = event.target as HTMLInputElement
        setInputValue(value)
    }

    return (
        <>
            <SearchContext.Provider value={value}>
                <ModSearchFieldWrapper
                    ref={ref}
                    minLength={minLength}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={id}
                    dataValue={inputValue}
                    active={active}
                    variant={variant ? variant : 'filled'}
                    notched={notched === true ? true : false}
                    data-test="search-field-wrapper"
                    onClick={toggleSearchResults}
                >
                    <SearchIcon data-testid="search-icon" fill="#8e8e8e" />

                    <ModSearchField
                        {...props}
                        ref={ref}
                        minLength={minLength ? minLength : '2'}
                        maxLength={maxLength ? maxLength : '64'}
                        autoComplete={autoComplete ? autoComplete : 'off'}
                        placeholder={placeholder ? placeholder : 'Search...'}
                        type={type ? type : 'text'}
                        name={name ? name : 'search'}
                        id={id ? id : 'search'}
                        value={inputValue}
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        onInput={handleInput}
                        data-test="search-field"
                    />
                </ModSearchFieldWrapper>
                <ModSearchOverlay
                    isOpen={isOpen}
                    onClick={toggleSearchResults}
                    data-testid="search-overlay"
                />
                {children}
            </SearchContext.Provider>
        </>
    )
}

export default withSystemProps(forwardRef(SearchField))
