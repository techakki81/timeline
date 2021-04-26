// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
width:17%;
min-height:300px;
position: relative;

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
        ({top}) => top ? `border-top-color: #00b0bd;bottom: -20px;`: `border-bottom-color: #00b0bd;top: -20px;`
    }   
  `

export default function Box( {date, text, top}) {
    return (
        <BoxCss top={top}>
            <p>{date}</p>
             <p>{text}</p>
        </BoxCss>
    )
}

