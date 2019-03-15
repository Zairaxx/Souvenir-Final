import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import MySouvenirs from '../components/MySouvenirs'

const InputField = styled.input`
    text-align:center;
    margin-bottom:2em;
    width:30em;
    border-radius:8px;
`

const Flex = styled.div`
    background-color:${props => props.bgColor || "auto" };
    display:${props => props.display || "flex" };
    position: ${props => props.position || "auto" };
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justify || "center"};
    width: ${props => props.width || "auto" };
    height: ${props => props.height || "auto" };
    top: ${props => props.top || "0" };
    min-width: ${props => props.minWidth || "auto" };
    left: ${props => props.left || "auto" };
    right: ${props => props.right || "auto" };
    overflow: ${props => props.overflow || "auto" };
`

const FlexSlider = styled.div`
    background-image: ${props => props.bgColor || "auto" };
    display:${props => props.display || "flex" };
    position: ${props => props.position || "auto" };
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justify || "center"};
    width: ${props => props.width || "auto" };
    top: ${props => props.top || "0" };
    min-height: 100vh;
    min-width: ${props => props.minWidth || "auto" };
    left: ${props => props.left || "auto" };
    right: ${props => props.right || "auto" };
    overflow-x:hidden;
    overflow-y: ${props => props.overflowY || "visible" };
    z-index: ${props => props.zIndex || "0" };
    padding: ${props => props.padding || "0" };
`

const ColorBox = styled.span`
    display:${props => props.display || "flex"};
    width:13px;
    height:13px;
    background-image: ${props => props.color || "linear-gradient(to left, #003A3E , #141E30)"};
    border: 1px solid black;
    margin-left:5px;
    border-radius:3px;
    cursor: ${props => props.cursor || "pointer"};

    &:hover {
        border: ${props => props.hover || "3px solid black"};
    }
`

const SouvenirText = styled.h2`
    font-size:${props => props.size || "1rem"};
    color:${props => props.color || "black"};
    font-style:${props => props.fontStyle || "normal"};
`

const TextArea = styled.textarea`
    resize:none;
    margin:0 0 10px 0;
    `

const Form = styled.form`
    display:flex;

`


export default class SouvenirForm extends Component {

    state={
        name:"",
        location:"",
        color:"",
        audio:"",
        souvenirStory:""
    }

    pickColor = (color) => {
        this.setState({
            color:color
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSouvenir(this.state);
        this.props.newSouvenir();
    }

  render() {
      if(this.props.createSouvenir === false) {
          return null
      }
      else {
    return (
        <FlexSlider id="flex-slider-wrapper" direction="row" minWidth="100vw" position="relative" justify="center" bgColor={(this.state.color || "white")} overflow="visible" overflowY="hidden">
            <Form onSubmit={this.handleSubmit}>
            <Flex minWidth="100%" position="relative" id="pageOne">
                <InputField type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                <InputField type="text" placeholder="Location" id="location" onChange={this.handleChange}/>
                <InputField type="link" placeholder="Add audio link" id="audio" onChange={this.handleChange}/>
                <Flex direction="column">
                    <Flex direction="row" overflow="visible">
                        <h3> Color:</h3>
                        <ColorBox cursor="auto" hover="auto" color={this.state.color}/>
                    </Flex>
                    <Flex direction="row" width="100%">
                        <ColorBox color="linear-gradient(to left, #2c3e50 , #3498db)" onClick={() => (this.pickColor("linear-gradient(to left, #2c3e50 , #3498db)"))}/>
                        <ColorBox color="linear-gradient(to left, #2bc0e4 , #eaecc6)" onClick={() => (this.pickColor("linear-gradient(to left, #2bc0e4 , #eaecc6)"))}/>
                        <ColorBox color="linear-gradient(to left, #134e5e , #71b280)" onClick={() => (this.pickColor("linear-gradient(to left, #134e5e , #71b280)"))}/>
                        <ColorBox color="linear-gradient(to left, #6a3093 , #a044ff)" onClick={() => (this.pickColor("linear-gradient(to left, #6a3093 , #a044ff)"))}/>
                        <ColorBox color="linear-gradient(to left, #e53935 , #e35d5b)" onClick={() => (this.pickColor("linear-gradient(to left, #e53935 , #e35d5b)"))}/>
                        <ColorBox color="linear-gradient(to left, #f46b45 , #eea849)" onClick={() => (this.pickColor("linear-gradient(to left, #f46b45 , #eea849)"))}/>
                        <ColorBox color="linear-gradient(to left, #fd746c , #ff9068)" onClick={() => (this.pickColor("linear-gradient(to left, #fd746c , #ff9068)"))}/>
                        <ColorBox color="linear-gradient(to left, #1e130c , #9a8478)" onClick={() => (this.pickColor("linear-gradient(to left, #1e130c , #9a8478)"))}/>
                        <ColorBox color="linear-gradient(to left, #CCCCB2 , #757519)" onClick={() => (this.pickColor("linear-gradient(to left, #CCCCB2 , #757519)"))}/>
                        <ColorBox color="linear-gradient(to left, #8e9eab , #eef2f3)" onClick={() => (this.pickColor("linear-gradient(to left, #8e9eab , #eef2f3)"))}/>
                    </Flex>
                    <h2>Write your story:</h2>
                    <SouvenirText fontStyle="oblique" color="white">{this.state.name}</SouvenirText>
                    <TextArea cols="50" rows="15"id="souvenirStory" onChange={this.handleChange}></TextArea>
                    <Flex direction="row" justify="space-around" minWidth="100%">
                        <input id="submit-souvenir" type="submit" value="Submit story"></input>
                        <input id="cancel-form" type="button" value="Cancel" onClick={this.props.newSouvenir}></input>
                    </Flex>
                </Flex>
            </Flex>
        </Form>
        </FlexSlider>
    )}
  }
}