'use client'

import styled from 'styled-components'

type BoundedProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
  mb?: number
}

type WrapperProps = {
  mb?: number
}

const Wrapper = styled.div<WrapperProps>`
  max-width: fit-content;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mb || 0}px;
`

export default function Bounded({
  as: Comp = 'section',
  className,
  children,
  mb,
  ...restProps
}: BoundedProps) {
  return (
    <Comp className={className} {...restProps}>
      <Wrapper mb={mb}>{children}</Wrapper>
    </Comp>
  )
}
