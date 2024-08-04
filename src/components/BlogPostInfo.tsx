'use client'

import { PrismicNextImage } from '@prismicio/next'
import styled from 'styled-components'
import { theme } from '../styles/theme'

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

export default function BlogPostInfo({ item, isMainPost }) {
  const color = isMainPost ? 'white' : theme.colors.secondary400

  return (
    <div className="align-center">
      <PrismicNextImage className="profile-img" field={item.avatar} />
      <Author color={color}>{item.author}</Author>
      <Date color={color}>{item.date}</Date>
    </div>
  )
}
