import React, { forwardRef } from 'react'
import { SmallContainer, StyledSpan } from '../Navbar/NavbarStyles'
import { GreyText, WitheText } from '../UI/StyledTexts'
import { AboutCard, AboutContainerStyled, AboutImg, SliderText } from './AboutStyles'

const About = () => {

  return (
    <>
    <SmallContainer >
      <SliderText>
      🍥 Envío en el día y a todo el país🍥 Descuento en clásicos 🍥 Registro de tus compras 🍥 
      </SliderText>      
    </SmallContainer>
    <AboutContainerStyled>
      <AboutCard>
        
        <AboutImg src={require("../images/anya.jpg")} alt="" />
        <GreyText> <StyledSpan>Selecciona</StyledSpan> el manga que quieras y agregalo al carrito.</GreyText>
      </AboutCard>
      <AboutCard>
        <AboutImg src={require("../images/loyd.jpg")} alt="" />
        <GreyText> <StyledSpan>Confirma</StyledSpan> la compra realizando el pago.</GreyText>
      </AboutCard>
      <AboutCard>
        <AboutImg src={require("../images/yor.jpg")} alt="" />
        <GreyText> <StyledSpan>Recibe y disfruta</StyledSpan> de tu nuevo manga en tu casa</GreyText>
      </AboutCard>
    </AboutContainerStyled>
    </>
  )
}

export default About