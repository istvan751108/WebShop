import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;

export const CheckoutTable = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  column-gap: 20px;
  padding-left: 10px;
`;

export const CheckoutHeader = styled.div`
  grid-column: 1 / span 3;
  padding-top: 20px;
`;

export const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  border: 1px solid gray;
`;

export const CheckoutTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

export const CheckoutAddress = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

export const CheckoutFormLabel = styled.label`
  justify-self: end;
`;

export const CheckoutInput = styled.input`
  border-width: 1px;
  border-style: solid;
  ${(props) =>
    props.onInvalid &&
    `
        border-color: red;
        border-width: 3px;
    `}
`;

export const CheckoutFormCheckbox = styled.input`
  grid-column: 2 / span 3;
  justify-self: start;
  margin-bottom: 20px;
`;

export const CheckoutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 3;
`;

export const CancelButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 1;
`;

export const CheckoutError = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 150px;
  margin right: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
