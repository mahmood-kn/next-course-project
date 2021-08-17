import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import dynamic from 'next/dynamic';
import Image from 'next/image';
// import ReactMarkdown from 'react-markdown';
const ReactMarkdown = dynamic(
  () => import('react-markdown').then((module) => module.default),
  { ssr: false }
);

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    // img: (img) => {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${img.src}`}
    //       alt={img.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.src}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          language={match[1]}
          PreTag='div'
          {...props}
          style={dracula}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
