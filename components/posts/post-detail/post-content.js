import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const dummy_post = {
  slug: 'getting-started-nextjs4',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-02-10',
};

const PostContent = () => {
  const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={dummy_post.title} />
      <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
