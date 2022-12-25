import styled from "styled-components";

export const HeaderContainer = styled.section`
  height: 70px;
  background-color: #282c34;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
`;
export const HeaderLogo = styled.div`
  img {
    width: 150px;
    color: orange;
  }
`;

export const HeaderAddress = styled.div`
  padding-left: 5px;
`;

export const HeaderAddressOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px;
`;

export const HeaderOptionLine1 = styled.div`
  padding-right: 20px;
`;

export const HeaderOptionLine2 = styled.div`
  padding-right: 20px;
  font-weight: bolder;
  color: whitesmoke;
`;

export const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0px 25px 0px 20px;
  border: 2px solid #282c34;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  margin-right: -2px;
  height: 40px;
  border: 0;
  border-radius: 3px;
  outline: none;
  font-size: larger;
  padding: 0px 10px 0px 10px;
`;

export const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavOption = styled.div``;

export const HeaderCartItems = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    color: white;
    text-decoration: none;
  }
`;

export const CartItems = styled.div`
  margin-left: 5px;
`;

export const SearchIconWrapper = styled.div`
  background-color: orange;
  height: 40px;
  width: 40px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
