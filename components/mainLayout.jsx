import React from "react";

const mainLayout = ({ children }) => {
  return (
    <div>
      <h1>mainLayout</h1>
      <hr />
      <main>{children}</main>
    </div>
  );
};

export default mainLayout;
