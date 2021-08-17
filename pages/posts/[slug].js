import { useRouter } from 'next/router';
import PostContent from '../../components/posts/post-detail/post-content';

const SinglePost = () => {
  const router = useRouter();
  return <PostContent />;
};

export default SinglePost;
