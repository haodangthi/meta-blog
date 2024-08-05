'use client'

import { PrismicNextImage } from '@prismicio/next'
import BlogPostInfo from './BlogPostInfo'
import { Tags } from './CategoryTag'
import styled from 'styled-components'

const Title = styled.h3`
  width: 360px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor};
`

const Card = styled.div`
  width: fit-content;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e8e8ea;

  .post-image {
    width: 360px;
    height: 240px;
    border-radius: 6px;
  }
`

export default function BlogPost({ data }: any) {
  return (
    <Card>
      <PrismicNextImage className="post-image mb-16" field={data.img} />
      <Tags data={data}></Tags>
      <Title className="mb-16">{data.title}</Title>
      <BlogPostInfo data={data}></BlogPostInfo>
    </Card>
  )
}
