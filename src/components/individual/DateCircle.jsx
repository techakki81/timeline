import React from 'react'
import styled from 'styled-components/macro'

const DateCircleCss = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #fff;
    border: 2px solid #d9d9d9;
    transform: translateY(125px);
    & > p {
        margin:3px 0 0 15px;
      }
`   


export default function DateCircle({date}) {
    console.log(`date fx`)
    console.log(date)
    console.log(date.getMonth())
    console.log(date.getDay())

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate()
   
    return (
        <DateCircleCss>
            <p>{day}</p>
            <p>{month}</p>
        </DateCircleCss>   
         )
}
