import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #2f2e41;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.7rem;
  outline: none;
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    text-align: right;

    p {
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff;
      line-height: 19px;
    }

    span {
      font-size: 0.75rem;
      font-weight: 600;
      color: #999999;
      line-height: 16px;
    }
  }
`;
