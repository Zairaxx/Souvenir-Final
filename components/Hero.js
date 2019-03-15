import React from 'react'
import styled, {keyframes} from 'styled-components'
import Fade from 'react-reveal/Fade'

const HeroText  = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Cinzel');
    font-family: 'Cinzel', serif;
    font-size:3.6rem;
    color: #FFF;
    text-align:center;
`
const HeroBg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  background-image: linear-gradient(to left, #003A3E , #141E30);
  min-width:100vw;
  min-height:100vh;
  overflow:visible;
`

const scrollIt = keyframes`
    0% {
      transform:translateY(0px);
    }
    50% {
        transform:translateY(35px);
    }

    100% {
      transform:translate(Y)
    }
`

const HeroSlogan = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');
    font-family: 'Amatic SC', cursive;
    color:white;
    text-align:center;
    margin:-1px;

`
const ScrollDown = styled.div`

  animation: ${scrollIt} 1.5s linear infinite;
`
const NavSite = styled.div`
position:relative;
background-image: linear-gradient(to left, #003A3E , #141E30);
min-width:100vw;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const NavItem = styled.div `
margin:0px;
border:1px solid white;
border-radius:10px;
min-width:160px;
min-height:50px;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
margin:10px 10px;
&:hover {
  background-color:white;
  color:black;
}
`

const Hero = ({scrollFade, getCollection, showCollection, createSouvenir, newSouvenir}) => {
  const imgSrc = require('../images/scroll-arrow-light.png');
  if(showCollection === false && createSouvenir == false){
  return (
    <Fade>
    <div>
        <HeroBg>
          <div>
            <HeroText>
              <Fade> Souvenir </Fade></HeroText>
              <HeroSlogan>
              <br/>
              Write it down. <br/>Read it out loud. Listen closely. <br/><br/>Live it. All over again.
            </HeroSlogan>
          </div>
          <ScrollDown>
            <img src={imgSrc} alt="Scroll down to view more" width="120px" height="40px"/>
          </ScrollDown>
        </HeroBg>
        <NavSite>
          <HeroSlogan>
          <Fade right cascade>
                Start a new journey
              <NavItem onClick={newSouvenir}>Create new Souvenir</NavItem>
            </Fade>
            <Fade right cascade> Take a glimpse at your memories.
          <NavItem onClick={getCollection}>Collection</NavItem>
            </Fade>
          </HeroSlogan>
        </NavSite>
    </div>
    </Fade>
  )}
  else {
    return null
  }
}

export default Hero
