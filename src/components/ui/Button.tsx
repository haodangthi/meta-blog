'use client'
import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid rgba(105, 106, 117, 0.3);
  border-radius: 6px;
  padding: 12px 20px;
  background-color: transparent;
  cursor: pointer;
  color: #696a75;
  font-size: 16px;
  font-weight: 500;
`

export const ButtonSecondary = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4b6bfb;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2a68cc;
  }
`
