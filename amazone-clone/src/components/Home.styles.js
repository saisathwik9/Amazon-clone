import styled from "styled-components";

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg;");
  min-height: 600px;
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Content = styled.div`
  margin-top: -300px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 480px));
  gap: 20px;
  margin: -300px 40px 0px 40px;
  grid-auto-rows: 500px;
`;

export const Product = styled.div`
  background-color: white;
  z-index: 100;
  border: 2px solid red;
  margin: 0px 20px 0px 20px;
`;
