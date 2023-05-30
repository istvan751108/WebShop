import React from "react";

const OrderConfirmation = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
    height: "100vh",
    textAlign: "center",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "16px",
    marginTop: "32px",
    marginLeft: "150px",
  };

  const imageStyle = {
    border: "2px",
    marginLeft: "150px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h2>Rendelés megerősítve</h2>
        <p>Köszönjük megrendelését!</p>
        <p><i>A megrendelt árucikkét hamarosan szállítjuk</i></p>
      </div>
      <div>
        <img src="/transport.jpg" style={imageStyle} />
      </div>
    </div>
  );
};

export default OrderConfirmation;
