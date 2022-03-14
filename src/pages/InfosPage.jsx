// nesta pagina eh onde vou puxar informacoes do API

// uma pagina com a foto do restaurante, nome, reviews ao lado direito
// logo abaixo, localizacao, rating...

//a foto poder ser adicionada aos favoritos do perfil .

import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

const DivTag = styled.div`
   {
    height: 90vh;
  }
`;

function InfosPage() {
    const [info, setInfo] = useState([]);

  return (
      <DivTag>
          <h1> More about the X restaurant below ! </h1>
      </DivTag>
  )
}

export default InfosPage