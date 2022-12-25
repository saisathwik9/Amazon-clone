import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border: 1px dotted red;
  border-radius: 10px;
  align-items: flex-start;
  margin: 20px 20px;
`;

export const ImgContainer = styled.div`
  width: 120px;
  padding: 10px;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  flex: 2;
`;

export const Title = styled.b``;

export const Quantity = styled.div`
  margin-right: 20px;
  border: 2px solid green;
  border-radius: 5px;
  padding: 5px 15px;
  color: black;
`;

export const DeleteItemButton = styled.button`
  border: 2px solid orange;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  color: orange;
  background-color: white;
`;

export const PriceContainer = styled.div`
  text-align: end;
  flex: 0.5;
  margin: 20px 20px;

`;

export const Price = styled.div`
  text-align: end;
  margin-bottom: 5px;
`;

export const ItemDetails = styled.div`
  display: flex;
  margin-top: 20px;
`;
