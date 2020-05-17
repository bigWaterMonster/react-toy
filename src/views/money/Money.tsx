import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import styled from 'styled-components'
import { TagsSectionWrapper } from './components/TagsSection'
import { NumberPadWrapper } from './components/NumberPad'
import { NotesSectionWrapper } from './components/NotesSection'
import { CategorysSectionWrapper } from './components/CategorysSection'
import { useRecords } from 'views/hooks/useRecords'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const CategorysWrapper = styled.div`
  background: #c4c4c4;
`

const defaultForm = {
  tags: [] as number[],
  note: '',
  category: 0,
  amount: '0',
}


function Money() {
  const [selected, setSelected] = useState(defaultForm)
  const { addRecord } = useRecords()

  type Selected = typeof selected

  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const onSubmit = () => {
    if (!selected.tags.length) {
      window.alert('请选择至少一个标签')
      return
    }
    addRecord(selected)
    window.alert('保存成功')
    setSelected(defaultForm)
  }
  return (
    <MyLayout>
      <TagsSectionWrapper value={selected.tags} onChange={(tags) => onChange({ tags })} />
      <NotesSectionWrapper value={selected.note} onChange={(note) => onChange({ note })} />
      <CategorysWrapper >
        <CategorysSectionWrapper value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategorysWrapper>
      <NumberPadWrapper value={selected.amount} onChange={(amount) => { onChange({ amount }) }} onOk={onSubmit} />
    </MyLayout>
  )
}
export default Money
