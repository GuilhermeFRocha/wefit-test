import styled from "styled-components";

export const SuccessContainer = styled.div`
  background-color: #fff;
  margin: 1rem;
  gap: 24px;
  text-align: center;
  display: grid;
  justify-items: center;
  padding-top: 64px;
  padding-bottom: 102px;
  border-radius: 4px;

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
`;
