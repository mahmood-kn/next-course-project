import React from 'react';
import Hero from '../components/home/hero';
import FeaturedPosts from '../components/home/featured-posts';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-nextjs',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJS is great framework building on React that make server side rendering possible.',
      date: '2022-02-10',
    },
    {
      slug: 'getting-started-nextjs2',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJS is great framework building on React that make server side rendering possible.',
      date: '2022-02-10',
    },
    {
      slug: 'getting-started-nextjs3',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJS is great framework building on React that make server side rendering possible.',
      date: '2022-02-10',
    },
    {
      slug: 'getting-started-nextjs4',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt:
        'NextJS is great framework building on React that make server side rendering possible.',
      date: '2022-02-10',
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
