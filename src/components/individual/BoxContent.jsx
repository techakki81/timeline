// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
border-radius: 5px;
background-color: #00b0bd;
width: 180px;
position: absolute;
// left: -77px;
padding: 15px;

&::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    ${
        ({top}) => top ? `border-top-color: #00b0bd;bottom: -20px;`: `border-bottom-color: #00b0bd;top: -20px;bottom: 0%;`
    }   
  `

export default function BoxContent( { text, top}) {
    return (
        <BoxCss top={top}>
            <p>{text}</p>
        </BoxCss>
    )
}

