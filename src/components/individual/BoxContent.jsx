// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
border-radius: 5px;
background-color: #00b0bd;
width: 180px;
padding: 15px;

// TO Talk. Normally you would have to write each selector differnect. with Styled comp i do not care

${
    ({positionTop}) => positionTop ? `transform:translateY(-50px);`:`transform: translateY(140px);`
 } 
&::before {
    content: "";
    position: absolute;
    // left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    ${
        ({top}) => top ? `border-top-color: #00b0bd;bottom: -20px;`: `border-bottom-color: #00b0bd;top: -19px;`
    }       
  `

export default function BoxContent( { positionTop,text, top}) {
    return (
        <BoxCss positionTop={positionTop} top={top}>
            <p>{text}</p>
        </BoxCss>
    )
}

