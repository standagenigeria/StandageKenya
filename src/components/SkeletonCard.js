import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
const SkeletonCard = () => {
    return (
      <Container>
        <h2 className="section-title">
          <Skeleton height={30} width={300} />
        </h2>

        <ul className="list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                <Skeleton circle={true} height={50} width={50} />  
                  <Skeleton height={36} width={`80%`} />
                </h4>
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            ))}
        </ul>
      </Container>
    );
  };


  const Container = styled.section `
  .list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.section-title {
  margin-top: 30px;
}

.card {
  width: calc(33% - 10px);
  margin: 20px 0;
}
.card-link {
  color: inherit;
  text-decoration: none;
}
.card-image {
  width: 100%;
}
.channel-image {
  border-radius: 100%;
  padding: 0, 10px, 0, 0; 
  width: 40px;
  height: 40px;  
}
.card-title {
  margin-top: 10px;
  margin-bottom: 0;
}
.card-channel {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}

/* Tablets */
@media (max-width: 1000px) {
  .App {
    max-width: 600px;
  }
  .card {
    width: calc(50% - 22px);
  }
}

/* Mobiles */
@media (max-width: 640px) {
  .card {
    width: 100%;
  }
}
  `;

  export default SkeletonCard;
