import React from 'react';
import styled from '@emotion/styled';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 3rem;
  color: #666;
  max-width: 900px;
  margin-top: 5.2rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin: 3rem 0 2rem;
  color: blue;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 2rem 0 1.5rem;
    text-align: center;
  }
`;

const Portfolio = () => {
  const startupProjects = [
    {
      title: 'Osono Remit',
      description: 'Fast, Secure High-Value Transactions, Zero Fees',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://osonoremit.com',
      role: 'Product Design Lead',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'Osono Remit gives you the power to create and securely send money anywhere using USD debit cards and payout wallets. I led the product design team in creating an intuitive and secure user experience for both mobile and web platforms.'
    },
    {
      title: 'Muzzi',
      description: 'Move your money forward, securely.',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://muzzi.app',
      role: 'Product Design Lead',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'Muzzi gives you the power to create and securely spend anywhere using USD debit cards and payout wallets. The platform focuses on providing a seamless experience for managing international payments.'
    },
    {
      title: 'The Kolanut',
      description: 'Stories by African Elders',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://thekolanut.co',
      role: 'Product Design Lead',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'The Kolanut is a platform dedicated to preserving and sharing African heritage through storytelling. I designed an immersive experience that makes it easy for elders to share their stories and for users to discover them.'
    },
    {
      title: 'Phasio',
      description: 'Give your manufacturing clients a red-carpet experience',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://phasio.co',
      role: 'Product Design Lead',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'Phasio revolutionizes the manufacturing industry by providing a premium client management platform. The design focuses on streamlining communication and project tracking for manufacturers and their clients.'
    },
    {
      title: 'EaglePay',
      description: 'Fast, Secure & Convenient Global Payments',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://eaglepay.global',
      role: 'Product Design Lead',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'EaglePay is a comprehensive global payment solution that prioritizes speed and security. I led the design of both mobile and web interfaces, ensuring a consistent and user-friendly experience across all platforms.'
    }
  ];

  const webflowProjects = [
    {
      title: 'BeriaAI',
      description: 'Generative art platform',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://beria.ai',
      role: 'Product Design Lead',
      duties: 'Webflow Website Design',
      detailedDescription: 'BeriaAI showcases the intersection of artificial intelligence and artistic creation. I designed a gallery-like experience that highlights the unique generative artworks while maintaining excellent performance.'
    },
    {
      title: 'PulseDrops 2.0',
      description: 'NFT Drops bookmarking',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://pulsedrops.xyz',
      role: 'Product Design Lead',
      duties: 'Webflow Website Design',
      detailedDescription: 'PulseDrops 2.0 helps users track and manage their NFT collection drops. The website design emphasizes ease of use and clear information hierarchy to help collectors stay organized.'
    },
    {
      title: 'Spods 10™',
      description: '10mins with the most misunderstood designers',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://spods.design',
      role: 'Product Design Lead',
      duties: 'Webflow Website Design',
      detailedDescription: 'Spods 10™ is a unique platform featuring 10-minute interviews with innovative designers. The website design creates an engaging storytelling experience while maintaining optimal reading comfort.'
    },
    {
      title: 'Aiko',
      description: 'All in one link in bio',
      imageUrl: '/images/placeholder.png',
      projectUrl: 'https://aiko.bio',
      role: 'Product Design Lead',
      duties: 'Webflow Website Design',
      detailedDescription: 'Aiko provides a sophisticated link-in-bio solution for creators. The website showcases the product\'s features through an elegant and intuitive design that reflects its ease of use.'
    }
  ];

  return (
    <PortfolioContainer>
      <Header>
        <Description>
          I work with early-stage startups to build their ideas into meaningful MVPs or scale their products to market-fit.
        </Description>
      </Header>

      <SectionTitle>Selected Projects</SectionTitle>
      <ProjectsGrid>
        {startupProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            role={project.role}
            duties={project.duties}
            detailedDescription={project.detailedDescription}
          />
        ))}
      </ProjectsGrid>

      <Description style={{ marginBottom: '2rem' }}>
        I also create webflow websites and templates for the community.
      </Description>
      <ProjectsGrid>
        {webflowProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            role={project.role}
            duties={project.duties}
            detailedDescription={project.detailedDescription}
          />
        ))}
      </ProjectsGrid>

    </PortfolioContainer>
  );
};

export default Portfolio;
