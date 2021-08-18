import AllPost from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-utils';
import Head from 'next/head';

const PostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming posts' />
      </Head>
      <AllPost posts={posts} />
    </>
  );
};

export default PostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
