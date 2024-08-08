'use client'

import styled from 'styled-components'

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
