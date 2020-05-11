import React from 'react'
import Layout from 'views/components/Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 2px;
  >ol {
    >li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    margin-left: 12px;
    background: none;
    color: #666;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    margin-top: 8px;
  }
`

const NotesSection = styled.section`

`
const CategorysSection = styled.section`

`
const NumberPad = styled.section`

`


function Money() {
  const tags = ['衣', '食', '住', '行']
  return (
    <Layout>
      <TagsSection className="tags">
        <ol>
          {
            tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))
          }
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorysSection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorysSection>
      <NumberPad>
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
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPad>
    </Layout>
  )
}
export default Money