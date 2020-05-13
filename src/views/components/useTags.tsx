import { useState } from 'react'

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    { id: 0, name: '衣' }, { id: 1, name: '食' }, { id: 2, name: '住' }, { id: 3, name: '行' }
  ])
  return { tags, setTags }
}

export { useTags }