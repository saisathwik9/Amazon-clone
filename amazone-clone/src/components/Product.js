import {
  Rating,
  AddButton,
  ProductDetails,
  ProductImg,
  Price,
  Title,
  Container,
} from "./Product.style";
import { db } from "../db-config/database";

const Product = ({ id, items }) => {
  const { name, imgUrl, price, rating } = items;

  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);

    cartItem.get().then((item) => {
      if (item.exists) {
        cartItem.update({ quantity: item.data().quantity + 1 });
      } else {
        cartItem.set({
          name: name,
          imgUrl: imgUrl,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <ProductImg>
        <img src={imgUrl} />
      </ProductImg>

      <ProductDetails>
        <Title>{name}</Title>
        <Price>${price}</Price>
        <Rating>{Array(rating).fill("⭐️ ")}</Rating>
        <AddButton onClick={() => addToCart()}>Add To Cart</AddButton>
      </ProductDetails>
    </Container>
  );
};

export default Product;
