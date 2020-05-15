import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import { CategorysSectionWrapper } from 'views/money/components/CategorysSection'
import styled from 'styled-components'
import { useRecords } from 'views/hooks/useRecords'
import { useTags } from 'views/hooks/useTags'

const Wrapper = styled.div`background: white;`


function Statistics() {
  const [category, setCategory] = useState(0)
  const { records } = useRecords()
  const { getName } = useTags()
  console.log(getName(4))
  return (
    <Layout>
      <Wrapper>
        <CategorysSectionWrapper value={category} onChange={setCategory} />
      </Wrapper>
      <div>
        {
          records.map((record, index) => {
            return <div key={index}>
              {
                record.tags.map(id => {
                  return <div key={id}>{getName(id)!.name}</div>
                })
              }
              {/* {record.amount} */}
            </div>
          })
        }
      </div>
    </Layout>
  )
}
export default Statistics