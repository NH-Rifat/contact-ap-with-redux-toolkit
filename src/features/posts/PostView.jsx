import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  // console.log(posts);
  const disPosts = useDispatch();
  useEffect(() => {
    disPosts(fetchPosts());
  }, []);
  return (
    <div>
      <h1>Post is fetching by Redux Thunks</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts.slice(0,10).map((post) => {
          return (
            <article key={post.id} style={{marginTop:'50px',backgroundColor:'black',color:'white',width:'50%',textAlign:'center',margin:'0 auto',borderRadius:'8px',padding:'5px'}}>
            <div >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default PostView;
