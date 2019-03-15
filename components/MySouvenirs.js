import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const ElementContainer = styled.div`
display:flex;
justify-content:${ props => (props.center ? "center" : props.end ? "flex-end":"flex-start")};
padding:${ props => (props.center ? 0 : props.end ? "0 5px 0 0":"0 0 0 5px")};
font-family: 'Ubuntu', sans-serif;
`
const SouvenirWrapper = styled.div`
  border: 1px solid white;
  border-radius:14px;
  min-width:80vw;
  margin:0 0 20px 0;
  `

const HeroBg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  background-image: linear-gradient(to right, #000 , #784343);
  min-width:100vw;
  min-height:100vh;
  overflow:visible;
`

const HeaderText = styled.h2`
  font-size:2.4em;
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  font-family: 'Cinzel', serif;
  color:#FFF
`

const ParagraphText = styled.p`
  font-size:1.6em;
  color:#FFF;
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');
  font-family: 'Amatic SC', cursive;
  margin:${props => props.margin || "0" };
  `
const MySouvenirs = ({souvenirs, showCollection}) => {
  const imgSound = require("../images/scroll-arrow-light.png");

  const souvenirList = souvenirs.map( souvenir => {
    if (souvenir!== 0){
      return (
        <SouvenirWrapper className="post" key={Math.random()}>
            <ElementContainer center><ParagraphText>{souvenir.name}</ParagraphText></ElementContainer>
            <ElementContainer center><ParagraphText margin="0 0 15px 0">{souvenir.location}</ParagraphText></ElementContainer>
            <ElementContainer center><ParagraphText margin="0 5px">{souvenir.souvenirStory}</ParagraphText></ElementContainer>
            <ElementContainer center><img width="20px" height="20px" src="../images/big-music-note.svg"/><ParagraphText margin="0 5px"><a href={souvenir.audio} target="_blank">{souvenir.audio }</a></ParagraphText></ElementContainer>
        </SouvenirWrapper>
      )
    }
    else {return null}
  })
if(showCollection === true){
  return (
    <Fade>
    <HeroBg>
      <HeaderText>
        Collection
      </HeaderText>
      <div>
      {souvenirList}
      </div>
    </HeroBg>
    </Fade>
  )}
  else {
    return null
  }
}

export default MySouvenirs


