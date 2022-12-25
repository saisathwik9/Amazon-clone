import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  z-index: 100;
  border-radius: 5px;
`;

export const Title = styled.b``;

export const Price = styled.div`
  padding-top: 10px;
`;

export const ProductImg = styled.div`
  padding: 20px;
  position: relative;
  text-align: center;
  height: 220px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Rating = styled.div``;

export const AddButton = styled.button`
  padding: 10px 30px;
  background-color: orange;
  border: 2px solid gold;
  border-radius: 5px;
  font-size: larger;
  align-content: flex-end;
  cursor: pointer;
`;
