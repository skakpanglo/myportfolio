import React from 'react';
import styled from '@emotion/styled';
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';

const SocialContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const SocialLink = styled.a`
  color: #000;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialLink href="https://www.linkedin.com/in/jmsbaduor/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://twitter.com/jmsbaduor" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://instagram.com/jamesbaduor" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://webflow.com/jmsbaduor" target="_blank" rel="noopener noreferrer">
        <SiWebflow />
      </SocialLink>
      <SocialLink href="https://dribbble.com/jmsbaduor" target="_blank" rel="noopener noreferrer">
        <FaDribbble />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialLinks;
