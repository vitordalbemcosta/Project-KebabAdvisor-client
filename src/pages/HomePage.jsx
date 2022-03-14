import React from "react";


import styled from "styled-components";

const DivTag = styled.div`
   {
    height: 90vh;
  }
`;

function HomePage() {
  return (
    <DivTag>
      <h1>Kebab Advisor</h1>
      <h3>To Kebab Lovers</h3>
      <h3>From Kebab Lovers</h3>
    </DivTag>
  );
}

export default HomePage;


// Nesa pagina vai ser minha landing page... 

// descobrir como eu posso reutilizar os components em paginas diferentes. (important)