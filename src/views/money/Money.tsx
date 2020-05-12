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
      tags: [] as string[],
      note: '',
      category: 0,
      amount: 0
    }
  )
  return (
    <MyLayout>
      <TagsSectionWrapper value={selected.tags} onChange={(tags) => setSelected({
        ...selected,
        tags
      })}/>
      <NotesSectionWrapper value={selected.note} onChange={(note) => {
        setSelected({
          ...selected,
          note
        })
      }}/>
      <CategorysSectionWrapper value={selected.category} onChange={(category) => {
        setSelected({
          ...selected,
          category
        })
      }}/>
      <NumberPadWrapper value={selected.amount} onChange={(amount) => {
        setSelected({
          ...selected,
          amount
        })
      }}/>
    </MyLayout>
  )
}
export default Money