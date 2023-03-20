import moment from "moment";
import React from "react";
import { NavigationType, useNavigate, useNavigationType } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import Newsletter from "../Contact/Newsletter";

const AllPosts = ({posts, loading, error}) => {

  const navigate = useNavigate();
  
  const handleClick = (id) => {
    navigate(`/blog/${id}`)
    console.log(id)
  }

  const refineDate = (date) => {
    let newDate = moment(date).format("MMMM Do YYYY");
    return newDate;
  };

  return (
    <PostsContainer>

      <h2>New Posts</h2>
      <div className="wrapper">
        { loading || posts.length === 0 ? (
          <Spinner />
        ) : (
          posts.map((post, index) => {
            return(
            <>
              {index !== 0 && (
              <div className="glow__box">
              <div className="flexbox" key={index} onClick={() => handleClick(post.id)}>
                <img
                  className="cover"
                  src={post["jetpack_featured_media_url"]}
                  alt="mask"
                />
                <div className="details">
                  <h3
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content.rendered.slice(0, 170)+ "...",
                    }}
                  ></p>
                   <p className="orange">{refineDate(post.date)}.</p>
                </div>
              </div>
              </div>
              )}
               {index === 6 && (
                <div className="news__letter">
                  <Newsletter tagLine="Get notified about latest news and updates. Subscribe with your email address" />
                </div>
              )}
            </>
          )})
        )}
       
      </div>
    </PostsContainer>
  );
};

const PostsContainer = styled.section`
  padding: 80px 24px;
  .news__letter {
    background-color: var(--mainBlack);
    margin: 120px 0;

    h2 {
      color: white;
    }
    p {
      color: #f2f2f2;
    }
    input {
      background: transparent;
      color: white;
    }
  }

  .flexbox:hover {
    cursor: pointer;
    transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img.cover {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 24px;
    line-height: 28px;
    color: #1a1a1a;
    margin-bottom: 3rem;
    text-align: center;
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-top: 24px;
    margin-bottom: 5px;
    color: var(--mainPurple);
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: var(--fontColor);
  }
  p.orange {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    color: var(--mainOrange);
  }
  .glow__box + .glow__box {
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    padding: 80px 0px;
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
    .flexbox{
      width: 950px;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :nth-child(even) {
        flex-direction: row-reverse;
      }
    }
    .glow__box {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .glow__box + .glow__box {
    margin-top: 80px;
  }
    img.cover {
      width: 416px;
      height: 240px;
    }
    .details {
      width: 40%;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    p.orange {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export default AllPosts;
