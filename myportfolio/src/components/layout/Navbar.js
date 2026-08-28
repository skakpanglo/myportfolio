import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

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
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;

  &:hover {
    color: #666;
  }

  &[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(5px);
    margin-bottom: 6px;
    background-color: #000;
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
  }

  &[data-tooltip]:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

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
        <NavLink to="/achievements" onClick={closeMenu} data-tooltip="Achievements">
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9 6.5C10.5188 6.5 11.75 5.26878 11.75 3.75C11.75 2.23122 10.5188 1 9 1C7.48122 1 6.25 2.23122 6.25 3.75C6.25 5.26878 7.48122 6.5 9 6.5Z" fill="currentColor"></path>
            <path d="M8.25 8.47217L4.2832 7.20287C3.7456 7.03297 3.1753 7.12377 2.7183 7.45577C2.2618 7.78927 2 8.30437 2 8.86987V13.5198C2 14.2835 2.4888 14.9534 3.2168 15.1868L8.25 16.7972V8.47217Z" fill="currentColor"></path>
            <path d="M15.2817 7.45617C14.8256 7.12417 14.2544 7.03137 13.7168 7.20327L9.75 8.47257V16.7976L14.7837 15.1872C15.5112 14.9538 16 14.2839 16 13.5202V8.87027C16 8.30487 15.7383 7.78967 15.2817 7.45617Z" fill="currentColor"></path>
          </svg>
        </NavLink>
        {/* Temporarily hiding blog link
        <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
        */}
        <ContactButton to="/lets-talk" onClick={closeMenu}>
          Connect <FiSend />
        </ContactButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
