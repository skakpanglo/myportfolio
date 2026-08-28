import React from 'react';
import styled from '@emotion/styled';
import { FiArrowUpRight } from 'react-icons/fi';
import PortfolioCard from '../components/ui/PortfolioCard';

const PortfolioContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.2rem 1.3rem;
  font-family: 'Gambarino', serif;

  @media (max-width: 768px) {
    padding: 0.7rem 0.5rem;
  }
`;

const Header = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 3rem;
  color: #666;
  max-width: 900px;
  margin-top: 5.2rem;
  color: black;
  font-family: 'Gambarino', serif;

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
  font-family: 'Gambarino', serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 2rem 0 1.5rem;
    text-align: center;
  }
`;

const OtherClientsSection = styled.section`
  background-color: #fff;
  color: #000;
  padding: 0;
  margin: 2rem 0 0 0.3rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1.2rem;
  }
`;

const OtherClientsContainer = styled.div`
  max-width: 1800px;
  margin: 0 0 0 0;
  width: 100%;
  padding: 0 0 4rem 0;
`;

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  gap: 1.5rem;
  padding-bottom: 4rem;
  width: 100%;
  
  @media (max-width: 1400px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 3rem;
  }
`;

const ClientLink = styled.a`
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
  min-height: 220px;

  &:hover {
    border-color: grey;
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 1.25rem;
    color: #999;
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: grey;
    transform: translate(4px, -4px);
  }
`;

const ClientName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: 'Gambarino', serif;
`;

const ClientRole = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Gambarino', serif;
`;

const ClientDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0 0;
  line-height: 1.6;
  font-family: 'Gambarino', serif;
`;



const Portfolio = () => {
  const startupProjects = [
    {
      title: 'Connect',
      description: 'Introducing Connect: The Future of Digital Networking',
      imageUrl: '/images/placeholder.png',
      projectUrl: '#',
      role: 'Fullstack Developer',
      duties: 'Mobile and Web App Design',
      detailedDescription: 'Connect is an innovative platform that seamlessly links  individuals and business professionals to their digital presence through a unique QR code or biometric code. This smart networking solution allows users to subscribe, create a profile, and have a personalized business card delivered to their doorstep.',
      showComingSoon: true
    },
    {
    title: 'PlanPal',
    description: 'Your Smart Daily Organizer.',
    imageUrl: '/images/placeholder.png',
    projectUrl: '/',
    role: 'Fullstack Developer',
    duties: 'Web App Design',
    detailedDescription: 'PlanPal is a simple and intuitive to-do list application designed to help users organize tasks, set priorities, and stay productive. With a clean interface and seamless user experience, PlanPal makes daily planning efficient—whether you are managing personal errands or project deadlines.',
    showComingSoon: true
    },
    {
    title: 'TLS',
    description: 'Church Website - The Lords Shepherd Ministries International',
    imageUrl: '/images/placeholder.png',
    projectUrl: '#',
    role: 'Fullstack Developer',
    duties: 'Web App Design And Development',
    detailedDescription: '',
    showComingSoon: true
    },
    //{
    //  title: 'Phasio',
    //  description: 'Give your manufacturing clients a red-carpet experience',
    //  imageUrl: '/images/placeholder.png',
    //  projectUrl: '#',
    //  role: 'Product Design Lead',
    //  duties: 'Mobile and Web App Design',
    //  detailedDescription: 'Phasio revolutionizes the manufacturing industry by providing a premium client management platform. The design focuses on streamlining communication and project tracking for manufacturers and their clients.'
    //},
    //{
    //  title: 'EaglePay',
    //  description: 'Fast, Secure & Convenient Global Payments',
    //  imageUrl: '/images/placeholder.png',
    //  projectUrl: '#',
    //  role: 'Product Design Lead',
    //  duties: 'Mobile and Web App Design',
    //  detailedDescription: 'EaglePay is a comprehensive global payment solution that prioritizes speed and security. I led the design of both mobile and web interfaces, ensuring a consistent and user-friendly experience across all platforms.'
    //}
  ];

  //const webflowProjects = [
  //  {
  //    title: 'BeriaAI',
  //    description: 'Generative art platform',
  //    imageUrl: '/images/placeholder.png',
  //    projectUrl: '#',
  //    role: 'Product Design Lead',
  //    duties: 'Webflow Website Design',
  //    detailedDescription: 'BeriaAI showcases the intersection of artificial intelligence and artistic creation. I designed a gallery-like experience that highlights the unique generative artworks while maintaining excellent performance.'
  //  },
  //  {
  //    title: 'PulseDrops 2.0',
  //    description: 'NFT Drops bookmarking',
  //    imageUrl: '/images/placeholder.png',
  //    projectUrl: '#',
  //    role: 'Product Design Lead',
  //    duties: 'Webflow Website Design',
  //    detailedDescription: 'PulseDrops 2.0 helps users track and manage their NFT collection drops. The website design emphasizes ease of use and clear information hierarchy to help collectors stay organized.'
  //  },
  //  {
  //    title: 'Spods 10™',
  //    description: '10mins with the most misunderstood designers',
  //    imageUrl: '/images/placeholder.png',
  //    projectUrl: '#',
  //    role: 'Product Design Lead',
  //    duties: 'Webflow Website Design',
  //    detailedDescription: 'Spods 10™ is a unique platform featuring 10-minute interviews with innovative designers. The website design creates an engaging storytelling experience while maintaining optimal reading comfort.'
  //  },
  //  {
  //    title: 'Aiko',
  //    description: 'All in one link in bio',
  //    imageUrl: '/images/placeholder.png',
  //    projectUrl: '#',
  //    role: 'Product Design Lead',
  //    duties: 'Webflow Website Design',
  //    detailedDescription: 'Aiko provides a sophisticated link-in-bio solution for creators. The website showcases the product\'s features through an elegant and intuitive design that reflects its ease of use.'
  //  }
  //];

  const otherClients = [
    {
      title: 'FoundHub',
      description: 'Digital Platform for Lost and Found Items',
      imageUrl: '/images/placeholder.png',
      projectUrl: '#',
      role: 'Fullstack Developer',
      duties: 'UI/UX Design & Fullstack Development',
      detailedDescription: 'Developed a community-driven platform that helps people report and find lost items. Implemented secure user authentication, real-time notifications, and an intuitive interface for item reporting and claiming.'
    },
    {
      title: 'TrueMark',
      description: 'Advanced Counterfeit Detection System',
      imageUrl: '/images/placeholder.png',
      projectUrl: '#',
      role: 'Full Stack Developer',
      duties: 'AI Integration & System Architecture',
      detailedDescription: 'Developed an advanced counterfeit detection system that uses AI and blockchain technology to identify fake products. The solution provides real-time verification, detailed product history, and tamper-proof authentication to combat counterfeiting across multiple industries.'
    }
  ];

  return (
    <PortfolioContainer>
      <Header>
        <Description>
        I collaborate with early-stage startups to transform their ideas into impactful MVPs and scale their products to achieve market fit.        
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
            showComingSoon={project.showComingSoon}
          />
        ))}
      </ProjectsGrid>

      <OtherClientsSection>
        <OtherClientsContainer>
          <SectionTitle style={{ color: 'blue', textAlign: 'left', fontSize: '1rem', marginBottom: '3rem', fontWeight: '500' }}>Other Clients</SectionTitle>
          <ClientGrid>
            {otherClients.map((client, index) => (
              <ClientLink 
                key={`client-${index}`}
                href={client.projectUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ClientName>{client.title}</ClientName>
                <ClientRole>{client.role}</ClientRole>
                <ClientDescription>{client.description}</ClientDescription>
                <FiArrowUpRight />
              </ClientLink>
            ))}
          </ClientGrid>
        </OtherClientsContainer>
      </OtherClientsSection>

      {/* <Description style={{ marginBottom: '2rem' }}>
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
      </ProjectsGrid> */}

    </PortfolioContainer>
  );
};

export default Portfolio;
