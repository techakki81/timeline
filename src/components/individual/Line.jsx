// s1
import styled from 'styled-components/macro'
import React from 'react'

const LineCss = styled.div`
  width:100%;
  height: 5px;
  background: ${({color})=>color};
  `
//hardcode the
export default function Line({color='#DAA520'} ) {
    return (
        <LineCss color={color}>
        </LineCss>
    )
}

