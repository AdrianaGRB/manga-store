import React from 'react'
import { HeroGridContainer, HeroInformationContainer, HighlightText, ImagesStyledFive, ImagesStyledFour, ImagesStyledOne, ImagesStyledSix, ImagesStyledThree, ImagesStyledTwo, TextStyledP, TextStyledsub } from './HeroStyles'


const Hero = () => {
  return (<>
    <HeroGridContainer>
        <HeroInformationContainer>
        <img src={require("../images/jpFlag.png")} alt="Japan Flag" style={{width: "50px"}}/> 
        <TextStyledsub>
            Navega por la mayor tienda de manga online
        </TextStyledsub>
        <TextStyledP>Encuentra tus mangas favoritos desde Japón <HighlightText> hasta tu casa </HighlightText></TextStyledP>
        </HeroInformationContainer>
    </HeroGridContainer>
    </>
  )
}

export default Hero