import styled from "styled-components";
import React, { FC, ChangeEventHandler } from 'react'
import { Input } from "views/components/Input";

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
  const onChange: ChangeEventHandler<HTMLInputElement> = function (e) {
    props.onChange(e.target.value)
  }
  // 受控组件
  return (
    <NotesSection>
      <Input
        type="text"
        placeholder="在这里添加备注"
        label="备注"
        value={note}
        onChange={onChange}
      />
    </NotesSection>
  )
}

export { NotesSectionWrapper }