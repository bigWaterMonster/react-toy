import React, { FC } from 'react'
import Layout from 'views/components/Layout'
import { useTags } from '../components/useTags'
import styled from 'styled-components'
import SvgIcon from '../components/SvgIcon'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  a {
    display: block;
  }
  li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Space = styled.div`
  height: 16px;
`

const Labels: FC = () => {
  const { tags } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <Link to={"/tags/" + tag.id} key={tag.id} className="clearfix">
            <li>
              <span className="oneLine">{tag.name}</span>
              <SvgIcon name="arrowRight" />
            </li>
          </Link>
        )}
      </TagList>
      <Space />
      <Space />
      <Space />
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout >
  )
}
export default Labels