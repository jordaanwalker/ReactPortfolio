import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import profileImage from "../assets/images/avatar.png";

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.navBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.navBackground};
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
    z-index: 99;
  }
`;

const NavItem = styled(NavLink)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  margin-left: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <LogoContainer to="/">
          <ProfileImage src={profileImage} alt="Profile" />
        </LogoContainer>

        <MenuButton onClick={toggleMenu}>{isOpen ? "✕" : "☰"}</MenuButton>

        <NavLinks isOpen={isOpen}>
          <NavItem to="/" onClick={closeMenu}>
            Home
          </NavItem>
          <NavItem to="/projects" onClick={closeMenu}>
            Projects
          </NavItem>
          <NavItem to="/about" onClick={closeMenu}>
            About
          </NavItem>
          <NavItem to="/contact" onClick={closeMenu}>
            Contact
          </NavItem>
          <ThemeToggle onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </ThemeToggle>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
