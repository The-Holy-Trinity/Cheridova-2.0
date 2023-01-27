import React from "react";
const Aboutus = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About us</h1>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
          fontStyle: 'Helvetica-Oblique',
          color: 'teal',
        }}
      >
        Meet the Developers
      </h1>
     
      <img src={Charlie} width="200" height="200" />
      <h3
        style={{
          textAlign: 'left',
          color: 'teal',
          wordWrap: 'normal',
          wordWrap: 'break-word',
        }}
      >
        Charlie Si, an avid gamer with a great eye for fashion if you're a
        sweatshirt and jeans type of guy
      </h3>
      <br />
      <img src={Bella} align="right" width="200" height="200" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 style={{ textAlign: 'right', color: 'teal' }}>
        Annabella Chan, a San Diego native, with a natural California girl style
      </h3>
      <img src={Shannon} width="200" height="200" />
      <h3 style={{ textAlign: 'left', color: 'teal' }}>
        Shannon Young, a self proclaimed fashionista on a budget who can always
        find the most stylish things at prices that won't break the bank
      </h3>
      <br />
    </>
  );
};
export default Aboutus;
