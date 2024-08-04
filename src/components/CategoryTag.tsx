"use client"

import styled from "styled-components";

const Tag = styled.div`
  width: fit-content;
  padding: 4px 10px;
  color: ${props => props.color};
  border-radius: 6px;
  background-color: rgba(75, 107, 251, 0.05);
`

export const CategoryTag = ({item}) => {
    return (
        <Tag
            className="mb-16"
            color={item.text_color}
        >
            {item.name}
        </Tag>
    )
}


