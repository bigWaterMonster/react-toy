import styled from "styled-components";

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

export { NumberPad }