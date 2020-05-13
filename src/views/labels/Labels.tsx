import React from 'react'
import Layout from 'views/components/Layout'
import { useTags } from '../components/useTags'
import styled from 'styled-components'
import SvgIcon from '../components/SvgIcon'
import { Link } from 'react-router-dom'

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

const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: #767676;
  color: white;
  cursor: pointer;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Space = styled.div`
  height: 16px;
`

function Labels() {
  const { setTags, tags } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <Link to={"/tags/" + tag} key={tag} className="clearfix">
            <li >
              <span className="oneLine">{tag}</span>
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