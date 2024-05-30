import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const PageNotFoundStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: #01a8de;
  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .description {
    max-width: 800px;
    margin: 0 auto 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    background: #01a8de;
  }
  .image {
    max-width: 400px;
    margin: 0 auto 40px;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <img src="/404.png" alt="notfound" className="image" />
        <h1 className="heading">404 - Looks like you're lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <button onClick={() => navigate("/")} className="back">
          Go back home
        </button>
      </div>
    </PageNotFoundStyles>
  );
};

export default NotFoundPage;