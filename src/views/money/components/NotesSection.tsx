import styled from "styled-components";
import React, { FC, useState, useRef } from 'react'

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
const NotesSectionWrapper: FC = () => {
  const [note, setNote] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = function () {
    console.log(refInput.current)
    if (refInput.current !== null) {
      setNote(refInput.current.value)
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