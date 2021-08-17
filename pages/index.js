import React from 'react';
import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';
import { getFeaturedPosts } from '../lib/posts-utils';

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
