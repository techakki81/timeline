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
export default function Timeline({cards}) {
    
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
                            <BoxContent positionTop={card.positionTop} text={card.text} top={card.positionTop}></BoxContent>
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
