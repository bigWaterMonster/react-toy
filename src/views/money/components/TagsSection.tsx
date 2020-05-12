import React, { FC, useState } from "react"
import styled from "styled-components"

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 2px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: hidden;
  >ol {
    overflow: auto;
    >li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: orange;
      }
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

type Props = {
  value: string[],
  onChange: (tags: string[]) => void
}

const TagsSectionWrapper: FC<Props> = (props) => {
  const selectedTags = props.value
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  // 添加tag
  const addTag = () => {
    const newTagName = window.prompt('新标签名称为')
    if (newTagName !== null) {
      setTags([...tags, newTagName])
    }
  }
  // 选中了哪些tags
  const onToggleTag = (tag: string) => {
    const isInclude = ~selectedTags.indexOf(tag)
    if (isInclude) {
      props.onChange(selectedTags.filter(t => t !== tag))
    } else {
      props.onChange([...selectedTags, tag])
    }
  }
  // 确认是否选中
  const getClass = (tag: string) => {
    return ~selectedTags.indexOf(tag) ? 'selected': ''
  }

  return (
    <TagsSection className="tags">
      <ol>
        {
          tags.map((tag, index) => (
            <li key={index} onClick={() => onToggleTag(tag)}
            className={getClass(tag)}>{tag}</li>
          ))
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagsSection>
  )
}

export { TagsSectionWrapper }