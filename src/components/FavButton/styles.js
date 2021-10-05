import styled from 'styled-components'

export const Button = styled.button`
display: flex;
align-items: center;
padding-top: 8px;
& svg{
  margin-right: 4px;
} /* Amperson refeers to the before selector. in this case is a direct reference to button, it's an anidation of selectors */
`
