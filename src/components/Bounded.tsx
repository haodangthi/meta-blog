'use client'

import styled from "styled-components";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Wrapper = styled.div`
    max-width: fit-content;
    margin: 0 auto;
    margin-bottom: ${props => props.marginbottom || 0}px;
`

export default function Bounded({
    as: Comp = "section",
    className,
    children,
    marginBottom,
    ...restProps
    }: BoundedProps) {

    return (
        <Comp
            className={className}
            {...restProps}
        >
            <Wrapper marginbottom = {marginBottom}>{children}</Wrapper>
        </Comp>
    );
}
