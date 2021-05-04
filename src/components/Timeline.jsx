import React from 'react'
import styled from 'styled-components/macro'
import {Box, BoxContent, DateCircle,Line} from './individual'

const TimelineCss = styled.div`
  position:relative;
  width:100%;
  margin:auto;
  height:300px;
  display:flex;
  
`

export default function Timeline() {
    const cards =[
        {
            date: new Date(2018, 11, 24),
            text:"Lorem Ipsum doloth2",
            positionTop:true
        },
        {
            date: new Date(2019, 10, 21),
            text:"Lorem Ipsum doloth",
            positionTop:false
        },
        {
            date: new Date(2019, 6, 12),
            text:"Lorem Ipsum doloth",
            positionTop:true
        },
        {
            date: new Date(2021, 1, 24),
            text:"Lorem Ipsum doloth",
            positionTop:false
        }
    ] 

    console.log(cards)
    if( !cards || cards.length===0)
       return "no data"

    return (
        <TimelineCss>
        <Line></Line>
        {
            cards.map( card => 
            <Box> 
                <DateCircle date ={card.date}></DateCircle>
                <BoxContent text={card.text} top={card.positionTop}></BoxContent>
            </Box>
                )
        }  
        </TimelineCss>
    )
}
