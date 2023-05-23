import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UpIcon, DownIcon, TrashIcon } from "./icons";
import { CartContext } from "../contexts/cartContext";

const Basket = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const navigate = useNavigate();
  const {
    getItems,
    clearBasket,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const handleClearBasket = () => {
    clearBasket();
    setCartItems([]);
  };

  const handleIncreaseQuantity = (id: string) => {
    increaseQuantity({ id });
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecreaseQuantity = (id: string) => {
    decreaseQuantity({ id });
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleRemoveProduct = (id: string) => {
    removeProduct({ id });
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((p, index) => (
        <React.Fragment key={index}>
          <div>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </div>
          <BasketQty>
            {p.quantity}
            <UpIcon width={20} onClick={() => handleIncreaseQuantity(p.id)} />
            <DownIcon
              width={20}
              onClick={() => handleDecreaseQuantity(p.id)}
            />
            <TrashIcon width={20} onClick={() => handleRemoveProduct(p.id)} />
          </BasketQty>
          <BasketPrice>{p.price} Ft</BasketPrice>
        </React.Fragment>
      ));
    } else {
      return <div>A kosár jelenleg üres</div>;
    }
  };

  const renderTotal = () => {
    const items = getItems();
    const total = items.reduce(
      (acc: number, item: any) =>
        acc +
        (typeof item.price === "number" ? item.price : 0) *
          (typeof item.quantity === "number" ? item.quantity : 0),
      0
    );
    return total;
  };

  return (
    <BasketContainer>
      <BasketTitle>Bevásárlókosár</BasketTitle>
      <BasketButton onClick={() => navigate("/checkout")}>
        Pénztár
      </BasketButton>

      <BasketTable>
        <BasketHeader>
          <h4>Tétel</h4>
          <h4>Mennyiség</h4>
          <h4>Ár</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>{renderCart()}</BasketHeader>
        <BasketHeaderLine />
      </BasketTable>

      <BasketButton onClick={handleClearBasket}>
        Kosár ürítése
      </BasketButton>
      <BasketTotal>Összesen: {`${renderTotal()} Ft`}</BasketTotal>
    </BasketContainer>
  );
};

export default Basket;

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
`;

const BasketTable = styled.div`
  grid-column: 1 / span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
  width: 100%;
`;

const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
  width: 100%;
  overflow-wrap: break-word;
`;

const BasketQty = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: grid;
  padding-left: 20px;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.h2`
  justify-self: end;
  padding-top: 20px;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;
