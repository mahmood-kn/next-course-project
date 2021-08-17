import AllPost from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-utils';

const PostsPage = ({ posts }) => {
  return <AllPost posts={posts} />;
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
