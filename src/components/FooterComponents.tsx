'use client'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 64px 0 0;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  text-align: left;
`

export const Column = styled.div`
  margin-right: ${(props) => props.mr}px;
  max-width: ${(props) => props.$maxWidth}px;
`

export const ColumnTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  color: #181a2a;
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`

export const LinkItem = styled.li`
  margin-bottom: 10px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

export const AboutText = styled.p`
  color: #666;
  margin: 10px 0;
`

export const Address = styled.address`
  display: flex;
  font-style: normal;
  color: #666;
`

export const ColumnTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactDetail = styled.span`
  color: #181a2a;
  font-size: 16px;
  font-style: normal;

  strong {
    margin-right: 5px;
  }
`

export const NewsletterSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const NewsletterTitle = styled.h4`
  margin: 30px 0 15px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  outline: none;
`

export const CopyrightSection = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  a {
    color: #3b3c4a;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child) {
      border-right: 1px solid #e8e8ea;
      padding-right: 10px;
    }
  }
`
