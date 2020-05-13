import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import styled from 'styled-components'
import { TagsSectionWrapper } from './components/TagsSection'
import { NumberPadWrapper } from './components/NumberPad'
import { NotesSectionWrapper } from './components/NotesSection'
import { CategorysSectionWrapper } from './components/CategorysSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

function Money() {
  const [selected, setSelected] = useState(
    {
      tags: [] as number[],
      note: '',
      category: 0,
      amount: 0
    }
  )

  type Selected = typeof selected

  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
    <MyLayout>
      <TagsSectionWrapper value={selected.tags} onChange={(tags) => onChange({ tags })} />
      <NotesSectionWrapper value={selected.note} onChange={(note) => onChange({ note })} />
      <CategorysSectionWrapper value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadWrapper value={selected.amount} onChange={(amount) => { onChange({ amount }) }} />
    </MyLayout>
  )
}
export default Money
