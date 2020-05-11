import styled from "styled-components";

const CategorysSection = styled.section`
  font-size: 24px;
  >ul {
    display: flex;
    background: #c4c4c4;
    >li {
      flex-grow: 1;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        position: absolute;
        height: 3px;
        background: #333;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
export { CategorysSection }