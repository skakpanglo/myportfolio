import React from 'react';
import styled from '@emotion/styled';

const BlogContainer = styled.div`
  font-family: 'Gambarino', serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Gambarino', serif;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ComingSoonText = styled.p`
  font-family: 'Gambarino', serif;
  font-size: 1.5rem;
  color: #555;
`;

// Blog components will be implemented in the future
// Keeping the styles in a separate file when needed

const Blog = () => {
  return (
    <BlogContainer>
      <Title>You for Know</Title>
      <ComingSoonText>🚧 Coming soon. Stay tuned! 🚧</ComingSoonText>
    </BlogContainer>
  );
};

export default Blog;
