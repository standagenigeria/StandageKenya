import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { fetchPosts } from "../redux/slices/blogSlice";

const Pagination = ({ nPages, currentPage}) => {

  const dispatch = useAppDispatch();

  const totalPages = parseInt(nPages);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const setCurrentPage = (pgNumber) =>{
    window.scrollTo(0, 0);
    dispatch(fetchPosts(pgNumber));
  }

  return (
    <Container>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <p className="page-link" onClick={prevPage}>
            &lt;&lt;
          </p>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <p
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
            >
              {pgNumber}
            </p>
          </li>
        ))}
        <li className="page-item">
          <p className="page-link" onClick={nextPage}>
            &gt;&gt;
          </p>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      width: 50px;
      height: 50px;
      text-decoration: none;
      list-style-type: none;
    }
    p{
      text-align: center;
    }
  }
  .page-item {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: var(--mainBlack);
    background-color: #fff;
    border: 1px solid #dee2e6;
  }
  .page-item.active {
    z-index: 1;
    color: #fff;
    background-color: var(--mainBlack);
    border-color: var(--mainBlack);
  }

 
`;

export default Pagination;
