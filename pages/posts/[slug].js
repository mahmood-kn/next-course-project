import { useRouter } from 'next/router';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-utils';

const SinglePost = ({ post }) => {
  const router = useRouter();
  return <PostContent post={post} />;
};

export default SinglePost;

export function getStaticProps(ctx) {
  const { params } = ctx;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((f) => f.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
