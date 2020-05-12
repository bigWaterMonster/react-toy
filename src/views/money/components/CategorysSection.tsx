import styled from "styled-components";
import React, { FC, useState } from "react";

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

const CategorysSectionWrapper: FC = function() {
  const [status] = useState(['支出', '收入'])
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <CategorysSection>
      <ul>
        { status.map((st, index) => (
            <li key={index}
              className={selectedIndex === index ? 'selected' : ''}
              onClick={() => { setSelectedIndex(index) }}
            >{st}</li>
          ))
        }
      </ul>
    </CategorysSection>
  )
}

export { CategorysSectionWrapper }