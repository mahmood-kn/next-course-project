import React from 'react';
import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';
import { getFeaturedPosts } from '../lib/posts-utils';
import Head from 'next/head';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mahmood's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
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
