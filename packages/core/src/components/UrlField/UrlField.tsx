import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { formatUrl, validateUrl } from '@modjs/helpers'
import { ErrorIcon, WorldWideWebIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Typography from '../Typography/Typography'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    minLength?: string
    maxLength?: string
    autoComplete?: string
    placeholder?: string
    type?: string
    name?: string
    id?: string
    value?: string
    ref?: React.Ref<HTMLElement>
}

interface ModUrlFieldProps extends TextFieldProps {
    active?: boolean
    valid?: boolean
    dataValue?: string
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
}

const forwardProps = (prop: string) =>
    ![
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

const ModUrlFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModUrlFieldProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 6px;
    margin: 12px 0px;
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
            border: ${
                (props.active && !props.valid) ||
                (props.dataValue && !props.valid)
                    ? props.theme.border.error
                    : (props.active && props.valid) ||
                        (props.dataValue && props.valid)
                      ? props.theme.border.success
                      : props.theme.border.dark
            };
            border-radius: ${props.theme.borderRadius};
    `};
    ${props =>
        props.variant === 'transparent' &&
        `
    border-bottom: ${
        (props.active && !props.valid) || (props.dataValue && !props.valid)
            ? props.theme.border.error
            : (props.active && props.valid) || (props.dataValue && props.valid)
              ? props.theme.border.success
              : props.theme.border.dark
    };
    `}
    ${props =>
        ((props.variant === 'filled' && props.notched) ||
            (props.variant === 'outlined' && props.notched)) &&
        `
    &:before { 
        content: '';
        background: ${
            (props.active && !props.valid) || (props.dataValue && !props.valid)
                ? props.theme.color.error
                : (props.active && props.valid) ||
                    (props.dataValue && props.valid)
                  ? props.theme.color.success
                  : props.theme.color.dark
        };
        clip-path: polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px,8px 0%,9.9px 0px,1px 8px,1px calc(100% - 1px),calc(100% - 8px) calc(100% - 1px),calc(100% - 1px) calc(100% - 8px),calc(100% - 1px) 1px,7px 1px);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    };
    `};
`

const ModUrlField = styled.input<TextFieldProps>`
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

const UrlField = (
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
        ...props
    }: ModUrlFieldProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedUrl = formatUrl(value)
        setInputValue(formattedUrl)
        if (validateUrl(value, minLength, maxLength)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    return (
        <>
            <ModUrlFieldWrapper
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
                valid={valid}
                variant={variant ? variant : 'filled'}
                notched={notched === true ? true : false}
                data-test="url-field-wrapper"
            >
                <WorldWideWebIcon
                    data-testid="world-wide-web-icon"
                    fill={
                        (active && !valid) || (inputValue && !valid)
                            ? '#ca3c1f'
                            : (active && valid) || (inputValue && valid)
                              ? '#5a6b31'
                              : '#8e8e8e'
                    }
                />

                <ModUrlField
                    {...props}
                    ref={ref}
                    minLength={minLength ? minLength : '3'}
                    maxLength={maxLength ? maxLength : '2048'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'Your Website *'}
                    type={type ? type : 'text'}
                    name={name ? name : 'website'}
                    id={id ? id : 'website'}
                    // value={inputValue} //TODO: cannot hardcode value like this. Form fields must reset after submission.
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="url-field"
                />
            </ModUrlFieldWrapper>

            {active && !valid && (
                <Box
                    display="flex"
                    gap={4}
                    alignItems="center"
                    data-testid="url-field-error"
                >
                    <ErrorIcon fill="#ca3c1f" />
                    <Typography variant="small" color="error">
                        Please enter a valid URL.
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default withSystemProps(forwardRef(UrlField))
