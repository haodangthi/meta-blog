'use client'

import styled from 'styled-components'

export const PageTitleWrapper = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor};
`

export const MainPostTitleWrapper = styled.h1<{ textColor?: string }>`
  width: 720px;
  color: ${({ theme }) => theme.mainPostTitleColor};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;

  &:hover {
    color: lightblue;
  }
`

export const BlogPostTitleWrapper = styled.h1<{ textColor?: string }>`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.titleColor};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
`
