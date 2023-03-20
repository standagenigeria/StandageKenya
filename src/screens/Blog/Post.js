import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import Image from "../../assets/banner1.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Newsletter from "../Contact/Newsletter";
import Featured from "./Featured";
import moment from "moment";

const Post = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    
    axios
      .get(`https://sutandeji.com.ng/?rest_route=/wp/v2/posts/${id}`)
      .then((result) => {
        let data = result.data;
        setPost({ data });
        setLoading(false);
        console.log(post);
      });
  }, [loading,id]);

  const refineDate = (date) => {
    let newDate = moment(date).format("MMMM Do YYYY");
    return newDate;
  };

  return (
    <HeaderContainer>
      {loading || Object.keys(post).length === 0 ? (
        <Spinner />
      ) : (
        <>
          <div className="wrapper">
            <img
              className="cover"
              src={post.data["jetpack_featured_media_url"]}
              alt="banner"
            />
            <div className="flexbox">
              <div className="description">
                <h1
                  dangerouslySetInnerHTML={{ __html: post.data.title.rendered }}
                ></h1>

                <p className="orange">{refineDate(post.date)}.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div
              className="content__details"
              dangerouslySetInnerHTML={{
                __html: post.data.content.rendered,
              }}
            ></div>
          </div>
          <div className="news__letter">
            <Newsletter tagLine="Get notified about latest news and updates. Subscribe with your email address" />
          </div>
          {post.data.categories.length !== 0 ? (
            <Featured
              currentPost={post.data.id}
              category={post.data.categories[0]}
            />
          ) : (
            ""
          )}
        </>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  .wrapper {
    padding: 40px 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--mainBlack);
    transition: all 1s ease;
    animation: expand 1s ease-in-out forwards;
    img.cover {
      object-fit: cover;
      width: 100%;
      /* height: 320px; */
      margin-bottom: 30px;
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

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px 32px;
    .content__details {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      p {
        margin-bottom: 24px;
      }
      li {
        font-weight: 600;
        margin-top: 14px;
        font-size: 18px;
      }
    }
  }

  .news__letter {
    background-color: var(--mainBlack);
    margin: 80px 0;

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

  @media (min-width: 768px) {
    .wrapper {
      width: 100%;

      img.cover {
        width: 856px !important;
        height: 440px;
        margin-bottom: 20px;
      }
      .flexbox {
        display: flex;
        align-items: center;
        justify-content: center;
        .description {
          width: 642px;
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
    .news__letter {
      margin: 120px 0;
    }
    .content {
      padding: 80px 32px 0;
    }
    .content__details {
      width: 736px;
    }
  }
`;

export default Post;
