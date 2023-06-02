import styled from "styled-components";

export const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
`;

export const BasketTable = styled.div`
  grid-column: 1 / span 3;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
  width: 100%;
`;

export const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
`;

export const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;

export const BasketTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
  width: 100%;
  overflow-wrap: break-word;
`;

export const BasketQty = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: grid;
  padding-left: 20px;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

export const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const BasketTotal = styled.h2`
  justify-self: end;
  padding-top: 20px;
`;

export const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;
