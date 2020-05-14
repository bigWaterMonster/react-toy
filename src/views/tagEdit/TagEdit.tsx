import React, { ChangeEventHandler } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useTags } from 'views/hooks/useTags'
import Layout from 'views/components/Layout'
import SvgIcon from 'views/components/SvgIcon'
import { Button } from 'views/components/Button'
import styled from 'styled-components'
import { Input } from 'views/components/Input'
import { Center } from 'views/components/Center'
import { Space } from 'views/components/Space'

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

const InputWrapper = styled.div`
  margin-top: 8px;
  background: white;
  padding: 0px 16px;
`

function TagEdit() {
  const { findTag, updateTag, deleteTag } = useTags()
  const { id } = useParams<RouterParams>()
  const tag = findTag(Number(id))

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTag(tag!.id, e.target.value)
  }

  const history = useHistory()

  const goBack = function () {
    history.goBack()
  }

  return (
    <Layout>
      <TopBar>
        <SvgIcon name="arrowLeft" onClick={goBack} />
        <span>编辑标签</span>
      </TopBar>
      {
        tag ? <div>
          <InputWrapper>
            <Input label="标签" type="text" placeholder="标签名" value={tag.name} onChange={onChange} />
          </InputWrapper>
          <Space />
          <Space />
          <Space />
          <Center>
            <Button onClick={() => { deleteTag(tag.id) }}>删除标签</Button>
          </Center>
        </div>
          :
          <Center>不存在了</Center>
      }
    </Layout>
  )
}
export default TagEdit