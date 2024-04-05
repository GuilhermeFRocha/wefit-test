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
  background-color: #2f2e41;
`;

export const CheckoutContent = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  display: grid;
  padding: 24px;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

export const CheckoutProduct = styled.div`
  display: grid;
  gap: 24px;
`;

export const CheckoutDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CheckoutImage = styled.div`
  width: 91px;

  img {
    width: 100%;
  }
`;

export const CheckoutDesc = styled.div`
  display: grid;
  gap: 8px;

  p {
    font-size: 0.875rem;
    font-weight: 700;
    color: #2f2e41;
    line-height: 19px;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: #2f2e41;
    line-height: 19px;
  }
`;

export const CheckoutAmount = styled.div`
  display: grid;
`;

export const CheckoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
  }
`;

export const CheckoutTotal = styled.div`
  display: grid;
`;

export const CheckoutTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #999999;
  line-height: 19px;
`;

export const CheckoutFinish = styled.div`
  padding-top: 24px;
  border-top: 1px solid #999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutButtonFinish = styled.button`
  font-size: 0, 75rem;
  font-weight: 700;
  color: #fff;
  line-height: 16px;
  background-color: #009edd;
  border: none;
  padding: 8px 32px;
  border-radius: 4px;
  cursor: pointer;
`;

export const CheckoutPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 0.875rem;
    font-weight: 700;
    color: #999999;
    line-height: 19px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2f2e41;
    line-height: 32px;
  }
`;
