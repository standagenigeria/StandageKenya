import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../components/Spinner";

const Header = ({posts, loading, error}) => {

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
    <HeaderContainer>
      {loading || posts.length === 0 ? (
        <Spinner />
      ) : 
      <div className="wrapper">
        <img className="cover" src={posts[0]["jetpack_featured_media_url"]}
                   alt="banner" />
        <div className="flexbox">
          <div className="description">
            <h1 dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}></h1>
            <p  dangerouslySetInnerHTML={{
                      __html: posts[0].content.rendered.slice(0, 120),
                    }}>
            </p>
            <p className="orange">{refineDate(posts[0].date)}.</p>
            <div className="button__container">
              <button onClick={() => handleClick(posts[0].id)}>Read More</button>
            </div>
          </div>
        </div>
      </div>
        }
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: var(--mainBlack);
  padding: 40px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {

    transition: all 1s ease;
    animation: expand 1s ease-in-out forwards;
    img.cover {
      object-fit: cover;
      width: 100%;
      /* height: 320px; */
      margin-bottom: 40px;
    }

    .flexbox {
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #ffffff;
        text-align: center;
      }
      p {
        font-weight: 500;
        color: #f2f2f2;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 16px;
      }
      p.orange {
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #f8951d;
      }
      .button__container {
        display: flex;
        justify-content: center;
        margin-top: 32px;
        button {
        }
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      width: 856px;
    }
    img.cover {
      width: 856px;
      height: 440px;
      margin-bottom: 80px;
    }
    .flexbox {
      display: flex;
      align-items: center;
      justify-content: center;
      .description {
        width: 430px;
      }
    }
    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 24px;
    }
    p {
      margin: 16px 0;
      /* width: 471px; */
    }
    p.orange {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export default Header;
