import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { formatPassword, validatePassword } from '@modjs/helpers'
import {
    ErrorIcon,
    NotVisibleIcon,
    PasswordIcon,
    VisibleIcon,
} from '@modjs/icons'
import Box from '../Box/Box'
import Button from '../Button/Button'
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

interface ModPasswordFieldProps extends TextFieldProps {
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

const ModPasswordFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModPasswordFieldProps>`
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

const ModPasswordField = styled.input<TextFieldProps>`
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

const PasswordField = (
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
    }: ModPasswordFieldProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const [visible, setVisible] = useState(false)

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedPassword = formatPassword(value)
        setInputValue(formattedPassword)
        if (validatePassword(value, minLength, maxLength)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    const toggleVisibility = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        setVisible(!visible)
    }

    return (
        <>
            <ModPasswordFieldWrapper
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
                data-test="password-field-wrapper"
            >
                <PasswordIcon
                    data-testid="password-icon"
                    fill={
                        (active && !valid) || (inputValue && !valid)
                            ? '#ca3c1f'
                            : (active && valid) || (inputValue && valid)
                              ? '#5a6b31'
                              : '#8e8e8e'
                    }
                />

                <ModPasswordField
                    {...props}
                    ref={ref}
                    minLength={minLength ? minLength : '8'}
                    maxLength={maxLength ? maxLength : '32'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'Your Password *'}
                    type={visible ? 'text' : 'password'}
                    name={name ? name : 'password'}
                    id={id ? id : 'password'}
                    value={inputValue}
                    data-testid="password-field"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="password-field"
                />
                <Button
                    onClick={toggleVisibility}
                    variant="transparent"
                    pr={8}
                    data-testid="toggle-visibility"
                >
                    {visible ? (
                        <NotVisibleIcon height="1rem" width="1.5rem" />
                    ) : (
                        <VisibleIcon height="1rem" width="1.5rem" />
                    )}
                </Button>
            </ModPasswordFieldWrapper>

            {active && !valid && (
                <Box
                    display="flex"
                    gap={4}
                    alignItems="center"
                    data-testid="password-field-error"
                >
                    <ErrorIcon fill="#ca3c1f" />
                    <Typography variant="small" color="error">
                        Please enter a valid password.
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default withSystemProps(forwardRef(PasswordField))
