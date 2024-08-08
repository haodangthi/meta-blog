'use client'

import { PrismicNextImage } from '@prismicio/next'
import styled from 'styled-components'

const Author = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme, color }) => color || theme.smallTextColor};
`

const Date = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme, color }) => color || theme.smallTextColor};
`

export default function BlogPostInfo({ data, color }: any) {
  return (
    <div className="align-center">
      <PrismicNextImage className="profile-img" field={data.avatar} />
      <Author color={color}>{data.author}</Author>
      <Date color={color}>{data.date}</Date>
    </div>
  )
}
