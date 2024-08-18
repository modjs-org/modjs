import React, { useState, forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import {
    formatPassword,
    validatePasswordDigit,
    validatePasswordLength,
    validatePasswordLowercase,
    validatePasswordSpecialChar,
    validatePasswordUppercase,
} from '@modjs/helpers'
import {
    NotVisibleIcon,
    SuccessIcon,
    ErrorIcon,
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

interface ModCreatePasswordFieldProps extends TextFieldProps {
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

const ModCreatePasswordFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModCreatePasswordFieldProps>`
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
            (props.active && !props.valid) || (props.dataValue && !props.valid)
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
                (props.active && !props.valid) ||
                (props.dataValue && !props.valid)
                    ? props.theme.border.error
                    : (props.active && props.valid) ||
                        (props.dataValue && props.valid)
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

const ModCreatePasswordField = styled.input<TextFieldProps>`
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

const CreatePasswordField = (
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
    }: ModCreatePasswordFieldProps,
    ref?: React.Ref<HTMLElement>,
) => {
    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputMinLength, setInputMinLength] = useState(8)
    const [inputMaxLength, setInputMaxLength] = useState(32)
    const [visible, setVisible] = useState(false)

    const [validPasswordLength, setValidPasswordLength] = useState(false)
    const [validPasswordDigit, setValidPasswordDigit] = useState(false)
    const [validPasswordUppercase, setValidPasswordUppercase] = useState(false)
    const [validPasswordLowercase, setValidPasswordLowercase] = useState(false)
    const [validPasswordSpecialChar, setValidPasswordSpecialChar] =
        useState(false)

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        const formattedPassword = formatPassword(value)
        setInputValue(formattedPassword)
        setInputMinLength(minLength)
        setInputMaxLength(maxLength)
        const isValidLength = validatePasswordLength(
            value,
            minLength,
            maxLength,
        )
        const isValidDigit = validatePasswordDigit(value)
        const isValidUppercase = validatePasswordUppercase(value)
        const isValidLowercase = validatePasswordLowercase(value)
        const isValidSpecialChar = validatePasswordSpecialChar(value)

        setValid(
            isValidLength &&
                isValidDigit &&
                isValidUppercase &&
                isValidLowercase &&
                isValidSpecialChar,
        )
        setValidPasswordLength(isValidLength)
        setValidPasswordDigit(isValidDigit)
        setValidPasswordUppercase(isValidUppercase)
        setValidPasswordLowercase(isValidLowercase)
        setValidPasswordSpecialChar(isValidSpecialChar)
    }

    const toggleVisibility = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        setVisible(!visible)
    }

    return (
        <>
            <ModCreatePasswordFieldWrapper
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
                data-test="create-password-field-wrapper"
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

                <ModCreatePasswordField
                    {...props}
                    ref={ref}
                    minLength={minLength ? minLength : '8'}
                    maxLength={maxLength ? maxLength : '32'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    placeholder={placeholder ? placeholder : 'New Password *'}
                    type={visible ? 'text' : 'password'}
                    name={name ? name : 'new-password'}
                    id={id ? id : 'new-password'}
                    value={inputValue}
                    data-testid="new-password-field"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="create-password-field"
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
            </ModCreatePasswordFieldWrapper>

            {active && !valid && (
                <Box data-testid="create-password-field-error">
                    <Box display="flex" gap={4} alignItems="center">
                        {validPasswordLength ? (
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="length-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="length-not-satisfied"
                            />
                        )}
                        <Typography
                            data-testid="length-error-text"
                            variant="small"
                            color={validPasswordLength ? 'success' : 'error'}
                        >{`Password must be between ${inputMinLength} and ${inputMaxLength} characters.`}</Typography>
                    </Box>
                    <Box display="flex" gap={4} alignItems="center">
                        {validPasswordDigit ? (
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="digit-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="digit-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            data-testid="digit-error-text"
                            variant="small"
                            color={validPasswordDigit ? 'success' : 'error'}
                        >
                            Password must contain atleast one digit.
                        </Typography>
                    </Box>
                    <Box display="flex" gap={4} alignItems="center">
                        {validPasswordUppercase ? (
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="uppercase-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="uppercase-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            data-testid="uppercase-error-text"
                            variant="small"
                            color={validPasswordUppercase ? 'success' : 'error'}
                        >
                            Password must contain atleast one uppercase letter.
                        </Typography>
                    </Box>
                    <Box display="flex" gap={4} alignItems="center">
                        {validPasswordLowercase ? (
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="lowercase-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="lowercase-not-satisfied"
                            />
                        )}{' '}
                        <Typography
                            data-testid="lowercase-error-text"
                            variant="small"
                            color={validPasswordLowercase ? 'success' : 'error'}
                        >
                            Password must contain atleast one lowercase letter.
                        </Typography>
                    </Box>
                    <Box display="flex" gap={4} alignItems="center">
                        {validPasswordSpecialChar ? (
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="specialChar-satisfied"
                            />
                        ) : (
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="specialChar-not-satisfied"
                            />
                        )}
                        <Typography
                            data-testid="specialChar-error-text"
                            variant="small"
                            color={
                                validPasswordSpecialChar ? 'success' : 'error'
                            }
                        >
                            Password must contain atleast one special character.
                        </Typography>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default withSystemProps(forwardRef(CreatePasswordField))
