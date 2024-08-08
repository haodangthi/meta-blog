'use client'

import styled from 'styled-components'

export const PageTitleWrapper = styled.h2`
  color: ${({ theme }) => theme.titleColor};
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
`

export const MainPostTitleWrapper = styled.h1<{ textColor?: string }>`
  color: ${({ theme }) => theme.mainPostTitleColor};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  width: 720px;
`

export const BlogPostTitleWrapper = styled.h1<{ textColor?: string }>`
  color: ${({ theme }) => theme.titleColor};
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
`
