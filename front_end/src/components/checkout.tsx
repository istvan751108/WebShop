import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    shippingAddress1: "",
    touched: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
    errors: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
    disabled: true,
  });

  const handleChange = (ev: { target: { name: any; value: any } }) => {
    const { name, value } = ev.target;
    setForm((prevState) => {
      const updatedForm = {
        ...prevState,
        [name]: value,
      };
      const updatedErrors = {
        name: updatedForm.name.trim().length === 0,
        email: updatedForm.email.trim().length === 0,
        shippingAddress1: updatedForm.shippingAddress1.trim().length === 0,
      };
      const isFormValid = !Object.values(updatedErrors).some((error) => error);
      return {
        ...updatedForm,
        errors: updatedErrors,
        disabled: !isFormValid,
      };
    });
  };

  const handleBlur = (ev: { target: { name: any } }) => {
    const { name } = ev.target;
    setForm((prevState) => {
      const updatedForm = {
        ...prevState,
        touched: { ...prevState.touched, [name]: true },
      };
      const updatedErrors = {
        name: updatedForm.name.trim().length === 0,
        email: updatedForm.email.trim().length === 0,
        shippingAddress1: updatedForm.shippingAddress1.trim().length === 0,
      };
      const isFormValid = !Object.values(updatedErrors).some((error) => error);
      return {
        ...updatedForm,
        errors: updatedErrors,
        disabled: !isFormValid,
      };
    });
  };

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    if (form.disabled) {
      // Ellenőrizzük, hogy a gomb letiltott-e
      ev.preventDefault();
      return;
    }
    navigate("/orderconfirmation");
  };
  const showError = (field: string) =>
    Error[field as keyof typeof Error]
      ? form.touched[field as keyof typeof form.touched]
      : false;

  return (
    <form onSubmit={handleSubmit}>
      <CheckoutContainer>
        {/* Row 1 */}
        <CheckoutTitle>PÉNZTÁR</CheckoutTitle>

        {/* Row 4 */}
        <CheckoutHeader>
          <h4>Az Ön adatai:</h4>
        </CheckoutHeader>

        {/* Row 5 */}
        <CheckoutHeaderLine />

        {/* Row 6 */}
        <CheckoutTable>
          <CheckoutFormLabel>Név:</CheckoutFormLabel>
          <CheckoutInput
            type="text"
            name="name"
            onInvalid={(event) => showError("name") && event.preventDefault()}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Írja be a nevét"
          />
          <CheckoutFormLabel>Email:</CheckoutFormLabel>
          <CheckoutInput
            type="text"
            name="email"
            onInvalid={(event) => showError("email") && event.preventDefault()}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Írja be az e-mail címét"
          />
        </CheckoutTable>
        {/* Row 7 */}
        <CheckoutHeader>
          <h4>Címadatok:</h4>
        </CheckoutHeader>
        {/* Row 8 */}
        <CheckoutHeaderLine />
        {/* Row 9 */}
        <CheckoutTable>
          <CheckoutFormLabel>Másolás a szállításhoz:</CheckoutFormLabel>
          <CheckoutFormCheckbox type="checkbox" />
        </CheckoutTable>
        <CheckoutTable>
          <CheckoutFormLabel>Számlázási cím:</CheckoutFormLabel>
          <CheckoutAddress>
            <input type="text" name="billingAddress1" />
            <input type="text" name="billingAddress2" />
            <input type="text" name="billingCity" />
          </CheckoutAddress>
          <CheckoutFormLabel>Szállítási cím:</CheckoutFormLabel>
          <CheckoutAddress>
            <CheckoutInput
              type="text"
              name="shippingAddress1"
              onInvalid={(event) =>
                showError("shippingAddress1") && event.preventDefault()
              }
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Írja be az első címsort"
            />
            <input type="text" name="shippingAddress2" />
            <input type="text" name="shippingCity" />
          </CheckoutAddress>
        </CheckoutTable>
        <CancelButton onClick={() => navigate("/basket")}>Törlés</CancelButton>
        <CheckoutButton disabled={form.disabled}>
          Rendelés megerősítése
        </CheckoutButton>
      </CheckoutContainer>
    </form>
  );
};

export default Checkout;

const CheckoutContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const CheckoutHeader = styled.div`
  grid-column: 1 / span 3;
  padding-top: 20px;
`;
const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  border: 1px solid gray;
`;
const CheckoutTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

const CheckoutAddress = styled.div`
  display: grid;

  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
  justify-self: end;
`;

const CheckoutInput = styled.input`
  border-width: 1px;
  border-style: solid;

  ${(props) =>
    props.onInvalid &&
    `
        border-color: red;
        border-width: 3px;
    `}
`;

const CheckoutFormCheckbox = styled.input`
  grid-column: 2 / span 3;
  justify-self: start;
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 3;
`;

const CancelButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 1;
`;
