import styled from "styled-components";
import React, { FC, useRef } from 'react'

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label {
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
  }
`

type Props = {
  value: string
  onChange: (value: string) => void
}

const NotesSectionWrapper: FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = function () {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value)
    }
  }
  // 受控组件
  return (
    <NotesSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
          defaultValue={note}
          ref={refInput}
          onBlur={onBlur}/>
      </label>
    </NotesSection>
  )
}

export { NotesSectionWrapper }