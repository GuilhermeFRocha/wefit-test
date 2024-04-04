import styled from "styled-components";

export const ErrorContainer = styled.main`
  background-color: #fff;
  margin: 1rem;
  gap: 24px;
  text-align: center;
  display: grid;
  justify-items: center;
  padding-top: 64px;
  padding-bottom: 140px;
  border-radius: 4px;

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
    color: #2f2e41;
    line-height: 27px;
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

export const CheckoutContainer = styled.div`
  display: grid;
`;

export const CheckoutContent = styled.div`
  display: flex;
`;

export const CheckoutFinish = styled.div`
  display: flex;
`;
