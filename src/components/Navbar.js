import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  font-family: 'Gambarino', serif;
  padding: 1.5rem 6.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 1.2rem 1.2rem;
  }

  @media (min-width: 1200px) {
    padding-left: 6.3rem;
    padding-right: 6.3rem;
  }
`;


const Logo = styled(Link)`
  font-family: 'Gambarino', serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  z-index: 100;
`;

const NavLinks = styled.div`
  font-family: 'Gambarino', serif;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 250px;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none'};
  }
`;

const NavLink = styled(Link)`
  font-family: 'Gambarino', serif;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const ContactButton = styled(Link)`
  font-family: 'Gambarino', serif;
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;

const MenuButton = styled.button`
  font-family: 'Gambarino', serif;
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 20px;
    position: relative;
    
    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background: #000;
      transition: all 0.3s ease;
      left: 0;

      &:first-of-type {
        top: ${props => props.isOpen ? '50%' : '0'};
        transform: ${props => props.isOpen ? 'rotate(45deg)' : 'none'};
      }

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        opacity: ${props => props.isOpen ? '0' : '1'};
      }

      &:last-of-type {
        bottom: ${props => props.isOpen ? '50%' : '0'};
        transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'none'};
      }
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <Logo to="/" onClick={closeMenu}>Samuel Akpanglo</Logo>
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuButton>
      <NavLinks isOpen={isMenuOpen}>
        <NavLink to="/" onClick={closeMenu}>About</NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
        <NavLink to="/achievements" onClick={closeMenu}>Achievements</NavLink>
        {/* Temporarily hiding blog link
        <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
        */}
        <ContactButton to="/lets-talk" onClick={closeMenu}>Let's talk👋</ContactButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
