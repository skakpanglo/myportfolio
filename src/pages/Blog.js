import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

// Keep styles for future blog layout
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BlogPost = styled(motion.article)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 2rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const PostExcerpt = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
`;

const ReadMore = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development...',
      image: '/images/blog/web-dev.jpg',
      date: 'March 25, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Designing for Impact',
      excerpt: 'How to create meaningful user experiences that drive engagement and results...',
      image: '/images/blog/design.jpg',
      date: 'March 20, 2025',
      readTime: '4 min read'
    },
    // Add more blog posts here
  ];

  return (
    <BlogContainer>
      <Title>Latest Tech Insights</Title>
      <ComingSoonText>🚧 Coming soon. Stay tuned! 🚧</ComingSoonText>

      {/*
      <BlogGrid>
        {posts.map(post => (
          <BlogPost
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PostImage src={post.image} alt={post.title} />
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <PostMeta>
                <span>{post.date} · {post.readTime}</span>
                <ReadMore href={`/blog/${post.id}`}>
                  Read more →
                </ReadMore>
              </PostMeta>
            </PostContent>
          </BlogPost>
        ))}
      </BlogGrid>
      */}
    </BlogContainer>
  );
};

export default Blog;
