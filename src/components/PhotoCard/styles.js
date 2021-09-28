import styled, { css, keyframes } from 'styled-components'


const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  
  to {
    filter: blur(0);
    opacity: 1;
  }
  `

const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  css`
    animation: 1s ${fadeInKeyFrames} ease;
  `
}

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0; /* for have always the same ratio aspect respect (16:9) */
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg{
    margin-right: 4px;
  } /* Amperson refeers to the before selector. in this case is a direct reference to button, it's an anidation of selectors */
`
