'use client'

import styled from 'styled-components'

const Tag = styled.div<{ background: string }>`
  width: fit-content;
  padding: 4px 10px;
  color: ${(props) => props.color};
  border-radius: 6px;
  background-color: ${(props) => props.background};
`

const TagList = styled.div`
  display: flex;
  gap: 10px;
`

export function CategoryTag({ item }: any) {
  return (
    <Tag className="mb-16" color={item.text_color} background={item.bg_color}>
      {item.name}
    </Tag>
  )
}

export function Tags({ data }: any) {
  return (
    <TagList>
      {data.category.map((item: any, index: number) => (
        <CategoryTag item={item} key={index} className="mb-16" />
      ))}
    </TagList>
  )
}
