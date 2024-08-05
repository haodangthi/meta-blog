'use client'

import { PrismicNextImage } from '@prismicio/next'
import styled from 'styled-components'
import { IBlogPostPayload } from '../types/BlogPostPayload'

const Author = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.color};
`

const Date = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.color};
`

export default function BlogPostInfo({ item }: IBlogPostPayload) {
  const color = '#000'

  return (
    <div className="align-center">
      <PrismicNextImage className="profile-img" field={item.avatar} />
      <Author color={color}>{item.author}</Author>
      <Date color={color}>{item.date}</Date>
    </div>
  )
}
