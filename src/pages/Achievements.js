import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiBriefcase } from 'react-icons/fi';

const AchievementsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 8rem 2rem;
`;

const Header = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Gambarino', serif;
  
  span {
    color: #4b10fe;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4b10fe;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 6rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: #4b10fe;
  }
`;

const InternshipCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #4b10fe;
`;

const InternshipContent = styled.div``;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: 'Gambarino', serif;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  background: #f0f0f0;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const CertificateCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificateInfo = styled.div`
  flex: 1;
`;

const CertificateName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Gambarino', serif;
`;

const Issuer = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 0.5rem;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b10fe;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Achievements = () => {
  const internships = [
    {
      company: 'ALX Africa',
      logo: 'ALX',
      duration: 'Feb 2024 - Present',
      description: 'Working on various software engineering projects, focusing on full-stack development and system design. Collaborating with international teams and mentoring fellow students.',
      skills: ['C Programming', 'Python', 'Shell Scripting', 'Linux', 'Git', 'Data Structures', 'Algorithms']
    },
    {
      company: 'Codebase',
      logo: 'CB',
      duration: 'Jan 2024 - Present',
      description: 'Leading frontend development initiatives and implementing responsive design principles. Working with modern JavaScript frameworks and state management solutions.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'API Integration']
    }
  ];

  const certificates = [
    {
      name: 'Software Engineering Program',
      issuer: 'ALX Africa',
      date: 'Feb 2024',
      url: '#'
    },
    {
      name: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: 'Jan 2024',
      url: '#'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      url: '#'
    }
  ];

  return (
    <AchievementsContainer>
      <Header>
        <Title>
          Growth through <span>experience</span> and <span>learning</span>
        </Title>
        <Subtitle>
          A showcase of my professional journey, featuring internships that shaped my skills and certifications that validate my expertise.
        </Subtitle>
      </Header>

      <SectionTitle>
        <FiBriefcase /> Internships & Experience
      </SectionTitle>
      <Grid>
        {internships.map((internship, index) => (
          <InternshipCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CompanyLogo>{internship.logo}</CompanyLogo>
            <InternshipContent>
              <CompanyName>{internship.company}</CompanyName>
              <Duration>{internship.duration}</Duration>
              <Description>{internship.description}</Description>
              <Skills>
                {internship.skills.map((skill, i) => (
                  <Skill key={i}>{skill}</Skill>
                ))}
              </Skills>
            </InternshipContent>
          </InternshipCard>
        ))}
      </Grid>

      <SectionTitle>
        <FiAward /> Certifications
      </SectionTitle>
      <Grid>
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertificateInfo>
              <CertificateName>{cert.name}</CertificateName>
              <Issuer>{cert.issuer} • {cert.date}</Issuer>
            </CertificateInfo>
            <ViewButton href={cert.url} target="_blank" rel="noopener noreferrer">
              View Certificate <FiExternalLink />
            </ViewButton>
          </CertificateCard>
        ))}
      </Grid>
    </AchievementsContainer>
  );
};

export default Achievements;
