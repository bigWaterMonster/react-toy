import { useState } from 'react'
import { createId } from 'lib/createId'

const defaultTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' }
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
  const findTag = (id: number) => tags.find(tag => tag.id === id)
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id)
  const updateTag = function (id: number, name: string) {
    setTags(tags.map((tag) => tag.id !== id ? tag : ({ name, id })))
  }
  const deleteTag = function (id: number) {
    setTags(tags.filter((tag) => tag.id !== id))
  }
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag }
}

export { useTags }