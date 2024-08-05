'use client'

import styled from 'styled-components'
import { ICategory } from '../types/BlogPost'
import { IBlogPostPayload } from '../types/BlogPostPayload'

const Tag = styled.div`
  width: fit-content;
  padding: 4px 10px;
  color: ${(props) => props.color};
  border-radius: 6px;
  background-color: rgba(75, 107, 251, 0.05);
`

interface ICategoryTagProps {
  item: ICategory
}

export function CategoryTag({ item }: ICategoryTagProps) {
  return (
    <Tag className="mb-16" color={item.text_color}>
      {item.name}
    </Tag>
  )
}

export function Tags({ data }: IBlogPostPayload) {
  return (
    <>
      {data.category.map((item, index) => (
        <CategoryTag key={index} item={item} className="mb-16" />
      ))}
    </>
  )
}
