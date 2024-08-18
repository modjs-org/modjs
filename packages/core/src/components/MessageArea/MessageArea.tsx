import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs/utils'
import { validateMessage } from '@modjs/helpers'
import { ErrorIcon, SuccessIcon } from '@modjs/icons'
import Box from '../Box/Box'
import Typography from '../Typography/Typography'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    minLength?: string
    maxLength?: string
    autoComplete?: string
    type?: string
    rows?: string
    resize?: string
}

interface ModMessageAreaProps extends TextAreaProps {
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
        'type',
        'rows',
        'resize',
        'value',
        'active',
        'valid',
        'dataValue',
        'variant',
        'notched',
    ].includes(prop)

const ModMessageAreaWrapper = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModMessageAreaProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-left: 6px;
    margin: 12px 0px;
    resize: ${props => (props.resize ? props.resize : 'vertical')};
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

const ModMessageArea = styled.textarea<TextAreaProps>`
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
const MessageArea = ({
    minLength,
    maxLength,
    autoComplete,
    type,
    rows,
    resize,
    variant,
    notched,
    ...props
}: ModMessageAreaProps) => {
    const messageAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const [active, setActive] = useState(false)
    const [valid, setValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputMaxLength, setInputMaxLength] = useState(5000)
    const [inputLength, setInputLength] = useState(0)
    const [validLength, setValidLength] = useState(false)

    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = event => {
        const { value, minLength, maxLength } = event.target as HTMLInputElement
        setInputLength(value.length)
        setInputValue(value)
        if (validateMessage(value, minLength, maxLength)) {
            setValid(true)
            setValidLength(true)
        } else {
            setValid(false)
            setValidLength(false)
        }
    }

    useEffect(() => {
        if (messageAreaRef.current) {
            setInputMaxLength(messageAreaRef.current.maxLength)
        }
    }, [])

    return (
        <>
            <ModMessageAreaWrapper
                minLength={minLength}
                maxLength={maxLength}
                autoComplete={autoComplete}
                type={type}
                rows={rows}
                resize={resize}
                dataValue={inputValue}
                active={active}
                valid={valid}
                variant={variant ? variant : 'filled'}
                notched={notched === true ? true : false}
                data-test="message-area-wrapper"
            >
                <ModMessageArea
                    {...props}
                    ref={messageAreaRef}
                    minLength={minLength ? minLength : '1'}
                    maxLength={maxLength ? maxLength : '5000'}
                    autoComplete={autoComplete ? autoComplete : 'off'}
                    type={type ? type : 'text'}
                    rows={rows ? rows : '9'}
                    value={inputValue}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    onInput={handleInput}
                    data-test="message-area"
                />
            </ModMessageAreaWrapper>

            {active && (
                <Box
                    display="flex"
                    gap={4}
                    alignItems="center"
                    data-testid="character-count"
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
            {active && !valid && (
                <Box
                    display="flex"
                    gap={4}
                    alignItems="center"
                    data-testid="message-area-error"
                >
                    <ErrorIcon fill="#ca3c1f" />
                    <Typography variant="small" color="error">
                        Please enter your message.
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default withSystemProps(MessageArea)
