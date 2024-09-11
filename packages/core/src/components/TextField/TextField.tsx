import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { validateText } from '@modjs/helpers'
import { ErrorIcon, SuccessIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Typography from '../Typography/Typography'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    minLength?: string
    maxLength?: string
    autoComplete?: string
    type?: string
    value?: string
}

interface ModTextFieldProps extends TextFieldProps {
    active?: boolean
    valid?: boolean
    dataValue?: string
    variant?: 'filled' | 'outlined' | 'transparent'
    notched?: boolean
    startAdornment?: React.ReactNode
}

const forwardProps = (prop: string) =>
    ![
        'minLength',
        'maxLength',
        'autoComplete',
        'type',
        'value',
        'active',
        'valid',
        'dataValue',
        'variant',
        'notched',
    ].includes(prop)

const ModTextFieldWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModTextFieldProps>`
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
            : (props.active && props.valid) || (props.dataValue && props.valid)
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

const ModTextField = styled.input<TextFieldProps>`
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

const TextField = ({
    minLength,
    maxLength,
    autoComplete,
    type,
    variant,
    notched,
    startAdornment,
    ...props
}: ModTextFieldProps) => {
    const textFieldRef = useRef<HTMLInputElement | null>(null)

    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputMaxLength, setInputMaxLength] = useState(200)
    const [inputLength, setInputLength] = useState(0)
    const [validLength, setValidLength] = useState(false)

    const handleInput: React.FormEventHandler<HTMLInputElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        setInputLength(value.length)
        setInputValue(value)
        if (validateText(value, minLength, maxLength)) {
            setValid(true)
            setValidLength(true)
        } else {
            setValid(false)
            setValidLength(false)
        }
    }

    useEffect(() => {
        if (textFieldRef.current) {
            setInputMaxLength(textFieldRef.current.maxLength)
        }
    }, [])

    return (
        <>
            <ModTextFieldWrapper
                minLength={minLength}
                maxLength={maxLength}
                autoComplete={autoComplete}
                type={type}
                dataValue={inputValue}
                active={active}
                valid={valid}
                variant={variant ? variant : 'filled'}
                notched={notched === true ? true : false}
                data-test="text-field-wrapper"
            >
                {startAdornment}
                <ModTextField
                    {...props}
                    ref={textFieldRef}
                    minLength={minLength ? minLength : '1'}
                    maxLength={maxLength ? maxLength : '200'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    type={type ? type : 'text'}
                    // value={inputValue} //TODO: cannot hardcode value like this. Form fields must reset after submission.
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="text-field"
                />
            </ModTextFieldWrapper>

            {active && (
                <Box
                    display="flex"
                    gap={4}
                    alignItems="center"
                    data-testid="text-field-error"
                >
                    {validLength ? (
                        <>
                            <SuccessIcon
                                fill="#5a6b31"
                                data-testid="success-icon"
                            />
                            <Typography
                                variant="small"
                                color="success"
                                data-testid="char-length"
                            >{`${inputLength} / ${inputMaxLength} characters`}</Typography>
                        </>
                    ) : (
                        <>
                            <ErrorIcon
                                fill="#ca3c1f"
                                data-testid="error-icon"
                            />
                            <Typography
                                variant="small"
                                color="error"
                                data-testid="char-length"
                            >{`${inputLength} / ${inputMaxLength} characters`}</Typography>
                        </>
                    )}
                </Box>
            )}
        </>
    )
}

export default withSystemProps(TextField)
