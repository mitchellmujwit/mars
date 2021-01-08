import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import { 
  HomeMainEl,
  MainRow,
  MainColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './HomeMain.elements'

const HomeMain = ({
  primary,
  lightBg, 
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  desctiption,
  headLine,
  lightText,
  topLine,
  img,
  alt,
  start
}) => {
  return (
    <>
     <HomeMainEl lightBg={lightBg}>
      <Container>
        <MainRow imgStart={imgStart}>
          <MainColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{desctiption}</Subtitle>
              <Link to='/book-a-trip'>
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </MainColumn>
          <MainColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt}></Img>
            </ImgWrapper>
          </MainColumn>
        </MainRow>
       </Container>
      </HomeMainEl> 
    </>
  )
}

export default HomeMain
