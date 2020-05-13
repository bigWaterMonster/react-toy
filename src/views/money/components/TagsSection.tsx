import React, { FC } from "react"
import styled from "styled-components"
import { useTags } from "views/components/useTags"
import { createId } from 'lib/createId'

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
  value: number[],
  onChange: (tags: number[]) => void
}

const TagsSectionWrapper: FC<Props> = (props) => {
  const selectedTagsIds = props.value
  const { setTags, tags } = useTags()
  // 添加tag
  const addTag = () => {
    const newTagName = window.prompt('新标签名称为')
    if (newTagName !== null) {
      setTags([...tags, { id: createId(), name: newTagName }])
    }
  }
  // 选中了哪些tags
  const onToggleTag = (tagId: number) => {
    const isInclude = ~selectedTagsIds.indexOf(tagId)
    if (isInclude) {
      props.onChange(selectedTagsIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagsIds, tagId])
    }
  }
  // 确认是否选中
  const getClass = (tagId: number) => {
    return ~selectedTagsIds.indexOf(tagId) ? 'selected' : ''
  }

  return (
    <TagsSection className="tags">
      <ol>
        {
          tags.map((tag, index) => (
            <li key={index} onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}>{tag.name}</li>
          ))
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagsSection>
  )
}

export { TagsSectionWrapper }