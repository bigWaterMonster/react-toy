import React from 'react'
import { useParams } from 'react-router-dom'
import { useTags } from 'views/components/useTags'
import Layout from 'views/components/Layout'
import SvgIcon from 'views/components/SvgIcon'
import { Button } from 'views/components/Button'
import styled from 'styled-components'
import { Input } from 'views/components/Input'

type RouterParams = { id: string }

const TopBar = styled.header`
  display: flex;
  position: relative;
  line-height: 20px;
  padding: 14px;
  background: white;
  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
`

function TagEdit() {
  const { findTag } = useTags()
  const { id } = useParams<RouterParams>()
  const tag = findTag(Number(id))
  return (
    <Layout>
      <TopBar>
        <SvgIcon name="arrowLeft" />
        <span>编辑标签</span>
      </TopBar>
      <div>
        {tag && tag.name}
        <Input label="标签" />
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}
export default TagEdit