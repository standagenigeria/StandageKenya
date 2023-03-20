import React, { useEffect} from "react";
import styled from "styled-components";
import Header from "./Header";
import NewPosts from "./AllPosts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/blogSlice";
import Pagination from "../../components/Paginate";


const Index = () => {
  const blog = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  
  const {posts, currentPage, totalPages, loading, error} = blog;

  useEffect(() => {
    dispatch(fetchPosts(1));
    console.log(loading);
  }, []);


  return (
    <Blog>
      <Header posts={posts} loading={loading} />
      <Wrapper>
        <NewPosts posts={posts} loading={loading} />
      </Wrapper>
      <Pagination
        nPages={totalPages}
        currentPage={currentPage}
      />
    </Blog>
  );
};

const Blog = styled.main``;

const Wrapper = styled.div`
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Index;
