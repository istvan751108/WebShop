import React, { useContext } from "react";

import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

const Basket = () => {
  const navigate = useNavigate();
  const { getItems } = useContext(CartContext);
  const renderCart = () => {
    const cartItems = getItems();
  
    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <React.Fragment>
          <div>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </div>
          <BasketQty>{p.quantity}</BasketQty>
          <BasketPrice>{p.price} Ft</BasketPrice>
        </React.Fragment>
      ));
    } else {
      return <div>A kosár jelenleg üres</div>;
    }
  };


  return (
    <BasketContainer>
      <BasketTitle>Bevásárlókosár</BasketTitle>
      <BasketButton>Pénztár</BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Tétel</h4>
          <h4>Mennyiség</h4>
          <h4>Ár</h4>
        </BasketHeader>

        <BasketHeaderLine />

        <BasketHeader>{renderCart()}</BasketHeader>

        <BasketHeaderLine />

        <BasketButton>Kosár ürítése</BasketButton>
        <BasketTotal>Összesen: 0Ft</BasketTotal>
      </BasketTable>
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
  grid-template-columns: 1fr 0.5fr 0.5fr;
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
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.h2`
  justify-self: end;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;
