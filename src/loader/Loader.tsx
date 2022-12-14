import React from "react";
import styled from "styled-components";
const Loader = () => {
  return (
    <div style={{ width: "100%", height: "80vh", marginTop: "40vh" }}>
      <Loaders />
    </div>
  );
};

export default Loader;
export const Loaders = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  margin: auto;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
