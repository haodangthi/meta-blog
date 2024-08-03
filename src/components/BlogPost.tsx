'use client'

import {PrismicNextImage} from "@prismicio/next";
import BlogPostInfo from "./BlogPostInfo";
import {CategoryTag} from "./CategoryTag";
import styled from "styled-components";

const Title = styled.h3`
  width: 360px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`

const Card = styled.div`
  width: fit-content;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #E8E8EA;
  
  .post-image {
    width: 360px;
    height: 240px;
    border-radius: 6px;
  }
`

export default function BlogPost({data}) {
    return (
        <Card>
            <PrismicNextImage className="post-image mb-16" field={data.img} />
            {data.category.map((item, index) => <CategoryTag key={index} item={item} className="mb-16"/>)}
            <Title className="mb-16">{data.title}</Title>
            <BlogPostInfo item={data}></BlogPostInfo>
        </Card>
    )
}
