'use client'

import styled from 'styled-components'
import ThemeIcon from '../icons/ThemeIcon'
import { useTheme } from '../../context/ThemeContext'

const SwitcherContainer = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 28px;
  background-color: ${({ theme }) => theme.switcherColor};
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
`

const SwitchCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: ${({ theme }) => theme.switcher};
  transition:
    left 0.3s,
    background-color 0.3s;
  svg {
    fill: #000000;
  }
`

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return (
    <SwitcherContainer onClick={toggleTheme}>
      <SwitchCircle>
        <ThemeIcon />
      </SwitchCircle>
    </SwitcherContainer>
  )
}

export default ThemeSwitcher
