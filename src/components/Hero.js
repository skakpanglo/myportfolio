import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  border: 2px solid #000;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey👋🏻, I'm Samuel. A founder, ALX SWE Student, Mobile App & Web Dev. and CS Student @{' '}
        <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
          KNUST
        </a>
      </Title>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My journey as a student has been dynamic—I’ve explored design, leadership, and mentorship while building innovative projects. 
        I’m passionate about creating products that are not only visually appealing but also solve real problems. 
        With a strong technical foundation, I strive to bring creative ideas to life.
      </Description>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ButtonContainer>
          <CTAButton to="/lets-talk">Let's talk</CTAButton>
          <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeButton>
        </ButtonContainer>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
