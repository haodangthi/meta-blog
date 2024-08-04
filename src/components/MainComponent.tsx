'use client'

import styled from 'styled-components'
import { CategoryTag } from './CategoryTag'
import { MainPostTitleWrapper } from './PageTitleWrapper'
import BlogPostInfo from './BlogPostInfo'

export const MainPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 1216px;
  height: 450px;
  margin: 40px auto;
  border-radius: 12px;
  padding: 40px;
  background:
    linear-gradient(0deg, rgba(20, 22, 36, 0.4) 0%, rgba(20, 22, 36, 0.4) 100%),
    url(${(props) => props.$bgimage}) lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;

  h3 {
    width: 720px;
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 600;
  }
`

export default function MainPostComponent({ data }) {
  return (
    <MainPostWrapper $bgimage={data.img.url}>
      {data.category.map((item, index) => (
        <CategoryTag key={index} item={item} className="mb-16" />
      ))}
      <MainPostTitleWrapper>{data.title}</MainPostTitleWrapper>
      <BlogPostInfo item={data} isMainPost={true} />
    </MainPostWrapper>
  )
}
