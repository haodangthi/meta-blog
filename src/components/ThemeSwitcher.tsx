'use client'
import styled from "styled-components";
import {useState} from "react";
import ThemeIcon from "./Icons/ThemeIcon";

const SwitcherContainer = styled.div`
    margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 28px;
  background-color: ${({ theme }) => (theme === "light" ? "#ddd" : "#4B6BFB")};
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const SwitchCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: ${({ theme }) => (theme === "light" ? "-9px" : "10px")};
  transition: left 0.3s, background-color 0.3s;
  svg {
    fill: #000000;
  }
`;

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <SwitcherContainer theme={theme} onClick={toggleTheme}>
            <SwitchCircle theme={theme}>
                <ThemeIcon/>
            </SwitchCircle>
        </SwitcherContainer>
    );
};

export default ThemeSwitcher;
