import React, { useContext, useState, useEffect } from "react";
import {
  BasketContainer,
  BasketTable,
  BasketHeader,
  BasketHeaderLine,
  BasketTitle,
  BasketQty,
  BasketPrice,
  BasketTotal,
  BasketButton,
} from "./basketStyles";
import { Link, useNavigate } from "react-router-dom";
import { UpIcon, DownIcon, TrashIcon } from "./icons";
import { CartContext } from "../contexts/cartContext";
import { getProductById } from "../fetcher";

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
    const fetchData = async () => {
      const items = getItems();
      const updatedItems = [];

      for (const item of items) {
        try {
          const response = await getProductById(Number(item.id));
          const updatedItem = {
            ...item,
            title: response.data.title,
            price: response.data.price,
          };
          updatedItems.push(updatedItem);
        } catch (error) {
          console.error(
            `Hiba történt a lekérdezés során az elemhez azonosítóval: ${item.id}`,
            error
          );
        }
      }

      setCartItems(updatedItems);
    };

    fetchData();
  }, [getItems]);

  const handleClearBasket = () => {
    clearBasket();
    setCartItems([]);
  };

  const handleIncreaseQuantity = (id: string) => {
    increaseQuantity({ id });
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    decreaseQuantity({ id });
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveProduct = (id: string) => {
    removeProduct({ id });
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
          <BasketQty>
            {item.quantity}
            <UpIcon
              width={20}
              onClick={() => handleIncreaseQuantity(item.id)}
            />
            <DownIcon
              width={20}
              onClick={() => handleDecreaseQuantity(item.id)}
            />
            <TrashIcon
              width={20}
              onClick={() => handleRemoveProduct(item.id)}
            />
          </BasketQty>
          <BasketPrice>{item.price} Ft</BasketPrice>
        </React.Fragment>
      ));
    } else {
      return <div>A kosár jelenleg üres</div>;
    }
  };

  const renderTotal = () => {
    const total = cartItems.reduce(
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
      <BasketButton onClick={() => navigate("/checkout")}>Pénztár</BasketButton>

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

      <BasketButton onClick={handleClearBasket}>Kosár ürítése</BasketButton>
      <BasketTotal>Összesen: {`${renderTotal()} Ft`}</BasketTotal>
    </BasketContainer>
  );
};

export default Basket;
