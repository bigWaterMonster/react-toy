import React, { FC } from "react"
import styled from "styled-components";


const Label = styled.label`
  display: flex;
  align-items: center;
  >span {
    margin-right: 16px;
    white-space: nowrap;
  }
  >input {
    display: inline-block;
    height: 72px;
    width: 100%;
    background: none;
    border: none;
  }
`

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<Props> = (props) => {
  const { label, children, ...rest } = props
  return (
    <Label>
      <span>{label}</span>
      <input
        {...rest}
      />
    </Label>
  )
}

export { Input }
