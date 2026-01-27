import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const CardContainer = styled(motion.div)`
  width: 100%;
  position: relative;
`;

const ProjectLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;

  &:hover img {
    transform: scale(1.05);
  }
`;

const ComingSoonLabel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 255, 0.2);
  color: blue;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  z-index: 2;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const Content = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #fff;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: 'Gambarino', serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled(FiArrowUpRight)`
  font-size: 1.8rem;
  opacity: 0.3;
  transition: all 0.3s ease;
  stroke-width: 1.5;

  ${ProjectLink}:hover & {
    opacity: 1;
    transform: translateX(5px) translateY(-5px);
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MoreInfo = styled.button`
  color: #999;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;

  &:before {
    content: '${props => props.isOpen ? '×' : '+'}';
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const ExpandedContent = styled(motion.div)`
  padding-top: 2rem;
`;

const RoleTitle = styled.h4`
  font-size: 1.1rem;
  color: #6366F1;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const DutiesTitle = styled(RoleTitle)`
  margin-top: 1.5rem;
`;

const DetailText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const DetailedDescription = styled.div`
  margin-top: 2rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.8;
`;

const PortfolioCard = ({ title, description, imageUrl, projectUrl, role, duties, detailedDescription, showComingSoon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      <ProjectLink href={projectUrl} target="_blank" rel="noopener noreferrer">
        <Card>
          <ImageContainer>
            {showComingSoon && <ComingSoonLabel>Coming Soon</ComingSoonLabel>}
            <ProjectImage 
              src={imageUrl || '/images/placeholder.jpg'} 
              alt={title}
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
          </ImageContainer>
          <Content>
            <Title>
              {title}
              <Arrow />
            </Title>
            <Description>{description}</Description>
            <MoreInfo as="div" isOpen={isExpanded} onClick={toggleExpand}>More info</MoreInfo>
          </Content>
        </Card>
      </ProjectLink>
      <AnimatePresence>
        {isExpanded && (
          <ExpandedContent
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <RoleTitle>Role:</RoleTitle>
            <DetailText>{role}</DetailText>
            <DutiesTitle>Duties:</DutiesTitle>
            <DetailText>{duties}</DetailText>
            <DetailedDescription>
              {detailedDescription}
            </DetailedDescription>
          </ExpandedContent>
        )}
      </AnimatePresence>
    </CardContainer>
  );
};

export default PortfolioCard;
