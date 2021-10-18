import styled from 'styled-components'

export const Button = styled.button`
background: #8d00ff;
border-radius: 3px;
color: #fff;
height: 32px;
display: 100px;
width: 100%;
text-align: center;
&[disabled]{ /* if the attribute is true then */
  opacity: .3;
}
`
