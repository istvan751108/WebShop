import React from "react";
import {
  CheckoutContainer,
  CheckoutTable,
  CheckoutHeader,
  CheckoutHeaderLine,
  CheckoutTitle,
  CheckoutAddress,
  CheckoutFormLabel,
  CheckoutInput,
  CheckoutFormCheckbox,
  CheckoutButton,
  CancelButton,
  CheckoutError,
} from "./checkout_styled";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    shippingAddress1: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    shippingAddress2: "",
    shippingCity: "",
    copyToShipping: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Név kötelező"),
    email: Yup.string()
      .email("Érvénytelen e-mail cím")
      .required("E-mail kötelező"),
    shippingAddress1: Yup.string().required("Szállítási cím kötelező"),
    billingAddress1: Yup.string().required("Számlázási cím kötelező"),
    billingAddress2: Yup.string(),
    billingCity: Yup.string(),
    shippingAddress2: Yup.string(),
    shippingCity: Yup.string(),
  });

  const handleSubmit = (values: any) => {
    navigate("/orderconfirmation");
  };

  const handleCopyToShippingChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void,
    values: any
  ) => {
    const copyToShipping = e.target.checked;
    if (copyToShipping) {
      const billingAddress1 = values.billingAddress1;
      const billingAddress2 = values.billingAddress2;
      const billingCity = values.billingCity;

      setFieldValue("shippingAddress1", billingAddress1);
      setFieldValue("shippingAddress2", billingAddress2);
      setFieldValue("shippingCity", billingCity);
    } else {
      setFieldValue("shippingAddress1", "");
      setFieldValue("shippingAddress2", "");
      setFieldValue("shippingCity", "");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
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
              <Field
                as={CheckoutInput}
                type="text"
                name="name"
                placeholder="Írja be a nevét"
              />

              <CheckoutFormLabel>Email:</CheckoutFormLabel>
              <Field
                as={CheckoutInput}
                type="text"
                name="email"
                placeholder="Írja be az e-mail címét"
              />
            </CheckoutTable>
            <div>
              <ErrorMessage name="name" component={CheckoutError} />
              </div><div>
              <ErrorMessage name="email" component={CheckoutError} />
            </div>

            {/* Row 7 */}
            <CheckoutHeader>
              <h4>Címadatok:</h4>
            </CheckoutHeader>

            {/* Row 8 */}
            <CheckoutHeaderLine />

            {/* Row 9 */}
            <CheckoutTable>
              <CheckoutFormLabel>Másolás a szállításhoz:</CheckoutFormLabel>
              <Field
                as={CheckoutFormCheckbox}
                type="checkbox"
                name="copyToShipping"
                checked={values.copyToShipping}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleCopyToShippingChange(e, setFieldValue, values);
                  setFieldValue("copyToShipping", e.target.checked);
                }}
              />

              <CheckoutFormLabel>Számlázási cím:</CheckoutFormLabel>
              <CheckoutAddress>
                <Field as={CheckoutInput} type="text" name="billingAddress1" />
                <Field as={CheckoutInput} type="text" name="billingAddress2" />
                <Field as={CheckoutInput} type="text" name="billingCity" />
              </CheckoutAddress>

              <CheckoutFormLabel>Szállítási cím:</CheckoutFormLabel>
              <CheckoutAddress>
                <Field
                  as={CheckoutInput}
                  type="text"
                  name="shippingAddress1"
                  placeholder="Írja be az első címsort"
                />
                <Field as={CheckoutInput} type="text" name="shippingAddress2" />
                <Field as={CheckoutInput} type="text" name="shippingCity" />
              </CheckoutAddress>
            </CheckoutTable>

            <CancelButton onClick={() => navigate("/basket")}>
              Törlés
            </CancelButton>

            <CheckoutButton
              type="submit"
              disabled={
                !values.name || !values.email || !values.shippingAddress1
              }
            >
              Rendelés megerősítése
            </CheckoutButton>
          </CheckoutContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;

