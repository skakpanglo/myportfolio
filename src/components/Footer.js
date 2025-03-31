import React from 'react';
import styled from '@emotion/styled';
import { FiArrowUpRight } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 8rem 2rem;
  background-color: #111111;
  color: #fff;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 6rem;
  font-weight: 500;
  max-width: 900px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 3rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  text-decoration: none;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-bottom-color: #fff;
  }

  svg {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: #fff;
    transform: translate(4px, -4px);
  }
`;

const LinkText = styled.span`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Gambarino', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samuel-akpanglo-b8b9a1230'
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/233200488213'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sam_uel.a/'
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/kepas.kon'
    },
    {
      name: 'X',
      url: 'https://dribbble.com/samuelakpanglo'
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Title>Ready to turn your ideas into a code-powered reality? Feel free to connect, let's chat to make it happen😎.</Title>
        <SocialGrid>
          {socialLinks.map((link, index) => (
            <SocialLink 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkText>{link.name}</LinkText>
              <FiArrowUpRight />
            </SocialLink>
          ))}
        </SocialGrid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
