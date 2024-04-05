import styled from "styled-components";

export const CardContent = styled.div`
  display: grid;
  gap: 8px;
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
  justify-content: center;
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
