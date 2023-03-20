import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const Featured = ({ category, currentPost }) => {
  const [posts, setPosts] = useState([]);
  let date;

  useEffect(() => {
    console.log(category);
    axios
      .get(
        `https://sutandeji.com.ng/wp-json/wp/v2/posts?categories=${category}`
      )
      .then((result) => {
        let data = result.data;
        setPosts(data);
        console.log(posts);
      });
  }, [category]);

  const navigate = useNavigate();

  const handleClick = (currentId) => {
    navigate(`/blog/${currentId}`);
    console.log(currentId);
  };

  const refineDate = (date) => {
    let newDate = moment(date).format("MMMM Do YYYY");
    return newDate;
  };

  return (
    <FeaturedContainer>
      {posts.length !== 0 ? (
        <div className="featured__wrapper">
          <h2>More Posts</h2>
          <div className="flexbox">
            {posts
              .filter((post) => post.id !== currentPost)
              .slice(0, 2)
              .map((post) => (
                <div className="box" onClick={() => handleClick(post.id)}>
                  <img src={post.jetpack_featured_media_url} alt="" />
                  <h3
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.content.rendered.slice(0, 120) + "... ",
                    }}
                  ></p>
                  <p className="orange">{refineDate(post.date)}.</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </FeaturedContainer>
  );
};

const FeaturedContainer = styled.section`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 24px;
  }
  .flexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
  .box {
    padding: 10px 20px;
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: var(--mainPurple);
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin-bottom: 24px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin: 5px 0;
      color: var(--fontColor);
    }
    p.orange {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--mainOrange);
    }
    :hover {
      cursor: pointer;
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  @media (min-width: 900px) {
    .featured__wrapper {
      width: 856px;
    }
    .flexbox {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 32px;
      .box {
        width: 416px;
      }
    }
  }
`;

export default Featured;
