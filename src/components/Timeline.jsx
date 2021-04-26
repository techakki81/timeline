import React from 'react'
import styled from 'styled-components/macro'
import {Box, DateCircle,Line} from './individual'

export default function Timeline({cards}) {
    
    console.log(cards)
    if( !cards || cards.length===0)
       return "no data"

    return (
        <>
        <Line></Line>
        {
            cards.map( card => card.date +":"+ card.text)
        }
        </>
    )
}
