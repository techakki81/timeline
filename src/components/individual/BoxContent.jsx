// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
border-radius: 5px;
background-color:#CD853F;
width: 180px;
padding: 15px;
color:#FAFAD2;
// TO Talk. Normally you would have to write each selector differnect. with Styled comp i do not care

${
    ({positionTop}) => positionTop ? `transform:translateY(-50px);`:`transform: translateY(160px);`
 } 
&::before {
    content: "";
    position: absolute;
    // left: 50%;
    transform: translateX(-32%);
    border: 20px solid transparent;
    ${
        ({top}) => top ? `border-top-color: #D2691E;bottom: -40px;`: `border-bottom-color: #D2691E;top: -40px;`
    }       
  `

export default function BoxContent( { positionTop,text, top}) {
    return (
        <BoxCss positionTop={positionTop} top={top}>
            <p>{text}</p>
        </BoxCss>
    )
}

