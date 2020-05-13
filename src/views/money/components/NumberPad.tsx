import styled from "styled-components";
import React, { FC } from "react";

const NumberPad = styled.section`
  display: flex;
  flex-direction: column;
  >.output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, .25),
                inset 0 5px 5px -5px rgba(0, 0, 0, .25)
  }
  >.pad {
    >button {
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-of-type(1) {
        background: #f2f2f2;
      }
      &:nth-of-type(2), &:nth-of-type(5) {
        background: #e0e0e0;
      }
      &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9) {
        background: #d3d3d3;
      }
      &:nth-of-type(4), &:nth-of-type(7), &:nth-of-type(10) {
        background: #c1c1c1;
      }
      &:nth-of-type(8), &:nth-of-type(11), &:nth-of-type(13) {
        background: #b8b8b8;
      }
      &:nth-of-type(12) {
        background: #9A9A9A;
      }
      &:nth-of-type(14) {
        background: #a9a9a9;
      }
    }
  }
`

type Props =  {
  value: number;
  onChange: (value: number) => void
  onOk?: () => void
}

const NumberPadWrapper: FC<Props> = function(props) {
  const output = props.value.toString()
  const setOutput = (output: string) => {
    if (output.length <= 16) props.onChange(parseFloat(output))
    else props.onChange(0)
  }
  const onClickNumber = function(e: React.MouseEvent) {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break
      case '.':
        console.log(text)
        if (!~output.indexOf('.')) setOutput(output + text)
        break
      case '清空':
        setOutput('0')
        break
      case '删除':
        if (output.length === 1) {
          setOutput('0')
        } else {
          setOutput(output.slice(0, -1))
        }
        break
      case 'OK':
        if (props.onOk) {
          props.onOk()
        }
        break
      default:
        return '0'
    }
  }
  return (
    <NumberPad>
      <div className="output">
        {output}
      </div>
      <div className="pad" onClick={onClickNumber}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPad>
  )
}

export { NumberPadWrapper }