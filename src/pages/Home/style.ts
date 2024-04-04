import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #2f2e41;
`;

export const CardContainer = styled.div`
  width: 90%;
  display: grid;
  gap: 16px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const CardContent = styled.div`
  background-color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 16px;
`;

export const CardImage = styled.div`
  width: 100%;

  img {
    width: 147px;
  }
`;

export const CardButton = styled.div`
  display: flex;
`;
