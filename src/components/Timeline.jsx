import React from 'react'
import styled from 'styled-components/macro'
import {Box, BoxContent, DateCircle,Line} from './individual'

const TimelineCss = styled.div`
display: flex;
width: 100%;
flex-direction: column;

`
const FlexRow = styled.div`
 display:flex;
 flex-direction:row;
 justify-content: space-between; 
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

    
    if( !cards || cards.length===0)
       return "no data"

    return (
        <TimelineCss>
            <FlexRow>
                {
                     cards.map( (card,index) => 
                        // key has to be there 
                        <Box key={card.date.toString()}> 
                            <DateCircle date ={card.date}></DateCircle>
                            <BoxContent isOdd={index%2} text={card.text} top={card.positionTop}></BoxContent>
                        </Box>
                    )
                }
            </FlexRow>

            <FlexRow>
                <Line></Line>
            </FlexRow>              
          
        </TimelineCss>
    )
}
