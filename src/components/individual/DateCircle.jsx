import React from 'react'
import styled from 'styled-components/macro'

const DateCircleCss = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #fff;
    border: 2px solid #d9d9d9;
    & > p {
        margin:3px 0 0 15px;
      }
`   


export default function DateCircle({day, month}) {
   
    return (
        <DateCircleCss>
            <p>{day}</p>
            <p>{month}</p>
        </DateCircleCss>   
         )
}
