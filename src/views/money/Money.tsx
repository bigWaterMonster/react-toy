import React from 'react'
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
  return (
    <MyLayout>
      <TagsSectionWrapper />
      <NotesSectionWrapper />
      <CategorysSectionWrapper/>
      <NumberPadWrapper />
    </MyLayout>
  )
}
export default Money