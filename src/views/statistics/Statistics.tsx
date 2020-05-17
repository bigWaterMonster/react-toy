import React, { useState } from 'react'
import Layout from 'views/components/Layout'
import { CategorysSectionWrapper } from 'views/money/components/CategorysSection'
import styled from 'styled-components'
import { useRecords, RecordItem } from 'views/hooks/useRecords'
import { useTags } from 'views/hooks/useTags'
import day from 'dayjs'

const Wrapper = styled.div`background: white;`

const RecordHeader = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

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


  const displayRecords = () => {
    return records.filter(record => record.category === category)
  }

  let obj: { [props: string]: RecordItem[] } = {}
  displayRecords().forEach((record) => {
    const createTime = day(record.createTime).format('YYYY年MM月DD日')
    if (!obj[createTime]) {
      obj[createTime] = []
    }
    obj[createTime].push(record)
  })

  const arr = Object.entries(obj).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0
    } else if (a[0] > b[0]) {
      return -1
    } else {
      return 1
    }
  })
  return (
    <Layout>
      <Wrapper>
        <CategorysSectionWrapper value={category} onChange={setCategory} />
      </Wrapper>
      <div>
        {
          arr.map((record, index) => {
            const date = record[0]
            const r = record[1]
            return (
              <div key={index}>
                <RecordHeader>{date}</RecordHeader>
                {
                  r.map((record, index) => {
                    return (<Item key={index}>
                      {
                        <div>{record.tags.map(id => getName(id)?.name).join(',')}</div>
                      }
                      {record.note && <div className="note">{record.note}</div>}
                      <hr />
                      <div>¥{record.amount}</div>
                    </Item>)
                  })
                }
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
export default Statistics