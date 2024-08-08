'use client'

import styled from 'styled-components'
import { Tags } from './ui/CategoryTag'
import { MainPostTitleWrapper } from './PageTitleWrapper'
import BlogPostInfo from './BlogPostInfo'
import React from 'react'
import { PrismicNextImage } from '@prismicio/next'

export const MainPostWrapper = styled.div`
  width: 1216px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 40px auto;
  padding: 40px;

  h3 {
    width: 720px;
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 600;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  background: linear-gradient(
    0deg,
    rgba(20, 22, 36, 0.4) 0%,
    rgba(20, 22, 36, 0.4) 100%
  );

  > img {
    position: absolute;
    border-radius: 12px;
    z-index: -1;
  }
`

export default function MainPostComponent({ data }: any): JSX.Element {
  return (
    <ImageWrapper>
      <PrismicNextImage
        field={data.img}
        width={1216}
        height={450}
        alt=""
        fallback={<div>A picture of the main post</div>}
      />
      <MainPostWrapper>
        <Tags data={data} />
        <MainPostTitleWrapper>{data.title}</MainPostTitleWrapper>
        <BlogPostInfo data={data} />
      </MainPostWrapper>
    </ImageWrapper>
  )
}
