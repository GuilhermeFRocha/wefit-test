import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #2f2e41;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const CardSearch = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;

  img {
      cursor: pointer;
    }

  input {
    width: 100%;
    border: none;
    outline: none;
    font: 1rem;
    font-weight: 400;
    line-height: 21px;
    color: #2f2e41;

    &::placeholder {
      color: #c0c0c0;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CardContent = styled.div`
  display: grid;
  gap: 8px;
  background-color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 16px;
  margin: 0 auto;
`;

export const CardImage = styled.div`
  width: 100%;

  img {
    width: 147px;
  }
`;

export const CardTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: #333333;
  line-height: 16px;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #2f2e41;
  line-height: 21px;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #009edd;
  padding: 11px 56px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: #fff;
    }
  }

  p {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 16px;
    color: #fff;
    white-space: nowrap;
  }
`;
