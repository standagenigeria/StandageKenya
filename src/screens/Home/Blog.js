import React, { useEffect} from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/blogSlice";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

const Blog = () => {

  const blog = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  const {posts } = blog;

  useEffect(() => {
    dispatch(fetchPosts(1));
    let title = posts;
    console.log(title);
  }, []);

  const navigate = useNavigate();
  
  const handleClick = (id) => {
    navigate(`/blog/${id}`)
    console.log(id)
  }

  return (
    <BlogContainer>
      <h2>Blog Posts</h2>
      <p>Read more about the company news and updates here.</p>
      {posts.length === 0 ? (
        <Spinner />
      ) : (
        <div className="blog__section">
          <div className="blog">
            <div className="flexbox" onClick={() => handleClick(posts[3].id)}>
              <img
               src={posts[0]["jetpack_featured_media_url"]}
                alt="mask"
              />
              <div className="details">
                <h3
                  dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }}
                ></h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: posts[0].content.rendered.slice(0, 120) + "... <span>Read more.</span>",
                    }}
                  >
                  </p>
              </div>
            </div>
            <div className="mid__line"></div>
            <div className="flexbox" onClick={() => handleClick(posts[3].id)}>
              <img
                  src={posts[1]["jetpack_featured_media_url"]}
                alt="mask"
              />
              <div className="details">
                <h3
                  dangerouslySetInnerHTML={{ __html: posts[1].title.rendered }}
                ></h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: posts[1].content.rendered.slice(0, 120) + "... <span>Read more.</span>",
                    }}
                  ></div>
              </div>
            </div>
          </div>
          <div className="border__line"></div>
          <div className="blog">
            <div className="flexbox" onClick={() => handleClick(posts[3].id)} >
              <img
                src={posts[2]["jetpack_featured_media_url"]}
                alt="mask"
              />
              <div className="details">
                <h3
                  dangerouslySetInnerHTML={{ __html: posts[2].title.rendered }}
                ></h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: posts[2].content.rendered.slice(0, 120) + "... <span>Read more.</span>",
                    }}
                  ></div>
              </div>
            </div>
            <div className="mid__line"></div>
            <div className="flexbox" onClick={() => handleClick(posts[3].id)}>
              <img
                   src={posts[3]["jetpack_featured_media_url"]}
                alt="mask"
              />
              <div className="details">
                <h3
                  dangerouslySetInnerHTML={{ __html: posts[3].title.rendered }}
                ></h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: posts[3].content.rendered.slice(0, 120) + "... <span>Read more.</span>",
                    }}
                  ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BlogContainer>
  );
};

const BlogContainer = styled.section`
  padding: 80px 24px;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--mainPurple);
    text-align: center;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--fontColor);
    text-align: center;
  }
  .blog__section {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 24px;
    justify-content: center;
    align-items: center;

    .blog {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      .flexbox {
        width: 80vw;
        :hover{
          cursor: pointer;
        }
        img {
          width: 100%;
          object-fit: cover;
          /* height: 200px; */
        }
        h3 {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: var(--mainPurple);
        }
        p {
          display: none;
        }
      }
    }

    .border__line {
      width: 70vw;
      border-bottom: 1px solid #e6e6e6;
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin-bottom: 10px;
    }

    .blog__section {
      margin-top: 80px;
      flex-direction: row;
      gap: unset;
      justify-content: space-evenly;

      .border__line {
        width: 3px;
        height: 300px;
        border-bottom: none;
        border-left: 1px solid #e6e6e6;
      }
    }

    .blog {
      width: 483px;
      flex-direction: column;
      justify-content: center;

      .mid__line {
        width: 40vw;
        border-bottom: 1px solid #e6e6e6;
        margin: 15px 0;
      }

      .flexbox {
        width: 80% !important;
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;

        img {
          width: 160px !important;
          height: 120px;
        }

        h3 {
          /* font-weight: 600 !important; */
          font-size: 16px !important;
          /* line-height: 28px !important; */
        }
      }
    }
  }

  @media (min-width: 1000px) {
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
    .blog {
      width: 483px;
      flex-direction: column;
      justify-content: center;

      .flexbox {
        width: 80% !important;
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;

        img {
          width: 160px !important;
          height: 120px;
        }

        h3 {
          font-weight: 600 !important;
          font-size: 20px !important;
          line-height: 28px !important;
          margin-bottom: 5px;
        }

        p {
          display: block !important;
          text-align: left;
          font-weight: 500 !important;
          font-size: 14px !important;
          line-height: 20px !important;
          color: var(--fontColor) !important;
        }
        /* .block {
          display: flex;
        } */
        Span {
          /* justify-self: flex-end; */
          /* display: block !important; */
          /* text-align: left; */
          font-weight: 500 !important;
          font-size: 14px !important;
          line-height: 20px !important;
          color: var(--mainOrange) !important;
        }
      }
    }
  }
`;

export default Blog;
