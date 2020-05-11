import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import styled from 'styled-components'
import { TagsSectionWrapper } from './components/TagsSection'
import { NumberPad } from './components/NumberPad'
import { NotesSection } from './components/NotesSection'
import { CategorysSection } from './components/CategorysSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function Money() {
  
  const status = ['支出', '收入']
  let [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <MyLayout>
      <TagsSectionWrapper/ >
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>
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
      <NumberPad>
        <div className="output">
          100
        </div>
        <div className="pad">
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
    </MyLayout>
  )
}
export default Money