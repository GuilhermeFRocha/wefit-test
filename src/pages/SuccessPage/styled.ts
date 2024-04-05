import styled from "styled-components";

export const SuccessContainer = styled.div`
  background-color: #fff;
  gap: 24px;
  text-align: center;
  display: grid;
  justify-items: center;
  padding: 40px;
  border-radius: 4px;
  max-width: 1200px;
  width: calc(100% - 80px);
  margin: 0 auto;
  box-sizing: border-box;

  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2f2e41;
    line-height: 27px;
  }

  div {
    padding: 24px 0;
  }

  button {
    background-color: #009edd;
    border-radius: 4px;
    padding: 11px 32px;
    color: #fff;
    border: none;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 16px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 560px) {
    img {
      width: 100%;
    }
  }
`;
