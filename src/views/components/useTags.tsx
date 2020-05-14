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
    const index = findTagIndex(id)
    let newTags = [...tags]
    newTags[index].name = name
    setTags(newTags)
  }
  const deleteTag = function (id: number) {
    const index = findTagIndex(id)
    let newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag }
}

export { useTags }