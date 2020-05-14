import { useState, useEffect, useRef } from 'react'
import { createId, initId } from 'lib/createId'

type Tag = { id: number, name: string }

const getDefaultTags = (): Tag[] => {
  return JSON.parse(localStorage.getItem('tags') || '[]')
}

const initTags = getDefaultTags()

if (!initTags.length) {
  localStorage.setItem('tags', JSON.stringify([
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' },
  ]))
} else {
  initId(initTags.slice(-1)[0].id)
}

const useTags = () => {
  let defaultTags = useRef(getDefaultTags())
  const [tags, setTags] = useState<Tag[]>(defaultTags.current)
  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])
  const findTag = (id: number) => tags.find(tag => tag.id === id)
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id)
  const updateTag = function (id: number, name: string) {
    setTags(tags.map((tag) => tag.id !== id ? tag : ({ name, id })))
  }
  const deleteTag = function (id: number) {
    setTags(tags.filter((tag) => tag.id !== id))
  }
  const addTag = () => {
    const newTagName = window.prompt('新标签名称为')
    if (newTagName !== null) {
      setTags([...tags, { id: createId(), name: newTagName }])
    }
  }
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag }
}

export { useTags }