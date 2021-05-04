// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
  //TODO calculat tehe width
  width:17%;
  position:relative;
  `

export default function Box( {children}) {
    return (
        <BoxCss>
            {children}
        </BoxCss>
    )
}

