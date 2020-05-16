import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import { CategorysSectionWrapper } from 'views/money/components/CategorysSection'
import styled from 'styled-components'
import { useRecords } from 'views/hooks/useRecords'
import { useTags } from 'views/hooks/useTags'
import day from 'dayjs'

const Wrapper = styled.div`background: white;`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

function Statistics() {
  const [category, setCategory] = useState(0)
  const { records } = useRecords()
  const { getName } = useTags()
  return (
    <Layout>
      <Wrapper>
        <CategorysSectionWrapper value={category} onChange={setCategory} />
      </Wrapper>
      <div>
        {
          records.map((record, index) => {
            return <Item key={index}>
              {
                record.tags.map(id => {
                  return <div key={id}>{getName(id)!.name}</div>
                })
              }

              {record.note && <div className="note">{record.note}</div>}
              {/* {day(record.createTime as string).format('YYYY年MM月DD日')}
              <hr /> */}
              <div>¥{record.amount}</div>
            </Item  >
          })
        }
      </div>
    </Layout>
  )
}
export default Statistics