// s1
import styled from 'styled-components/macro'
import React from 'react'

const BoxCss = styled.div`
`

export default function Box( {children}) {
    return (
        <BoxCss>
            {children}
        </BoxCss>
    )
}

