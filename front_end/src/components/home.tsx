import * as React from "react";

const Home = () => {
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
};

const textStyle: React.CSSProperties = {
  fontSize: "24px",
  marginBottom: "16px",
};
const imageStyle = {
  border: "2px",
  width: "95%",
  height: "auto",
  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
};

return (
  <div style={containerStyle}>
    <div style={textStyle}><b>Köszöntjük Webáruházunkban!</b></div>
    <div>
      <img src="/home.jpg" style={imageStyle} />
    </div>
  </div>
);
};

export default Home; 