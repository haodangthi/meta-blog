'use client'

import {PrismicNextImage} from "@prismicio/next";
import styled from "styled-components";

const Author = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #97989F;
`

const Date = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #97989F;
`

export default function BlogPostInfo({item}) {
    return (
        <div className="align-center">
            <PrismicNextImage className="profile-img" field={item.avatar} />
            <Author>{item.author}</Author>
            <Date>{item.date}</Date>
        </div>
    )
}
