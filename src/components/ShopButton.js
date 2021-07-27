import styled from "styled-components";

export const ShopButton = styled.button`
  background: var(--mainBlue);
  color: #fff;
  padding: 0.2rem 1.1rem;
  margin: 0.2rem 1.1rem;
  margin-top: ${(props) => (props.basket ? "40px !important" : "0")};
  width: ${(props) => (props.basket ? "100%" : "auto")};
  transition: all 0.5s ease-in-out;
  font-size: 1.4rem;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background: var(--secondBlue);
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
