import React, { Component } from 'react';
import Hero from '../components/Hero';
import SouvenirForm from '../components/SouvenirForm';
import MySouvenirs from '../components/MySouvenirs';
import styled from 'styled-components'
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

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
    overflow-y: ${props => props.overflowY || "auto" };
`


export default class App extends Component {

    state={
        souvenirs:[
            {name:"Vietnam livin", location:"Ho chi Minh, Vietnam", color:"blue", audio:"https://www.youtube.com/watch?v=jemgIOAjGDw", souvenirStory:"I had fun traveling for a week. I met cool people and had great food, such as Banh Mi. Will definitely go again."},
            {name:"Chile during Christmas", location:"Valparaiso, Chile", color:"blue", audio:"www.spotify.com", souvenirStory:"I had fun traveling for a week. I met cool people and had great food, such as ceviché. Will definitely go again."}
        ],
        showCollection:false,
        createSouvenir:false,
    }
    addSouvenir = (souvenir) => {

        souvenir.id = Math.random();
        souvenir.date = "Today"; // moment().format('MMMM Do YYYY, h:mm:ss a');
        let souvenirs = [...this.state.souvenirs, souvenir];
        this.setState({
          souvenirs: souvenirs,
        })
    }

    getCollection = (e) => {
        this.setState({
            showCollection:!this.state.showCollection
        })
        
    }

    newSouvenir = (e) => {
        this.setState({
            createSouvenir:!this.state.createSouvenir
        })
        
    }
    render() {
        return (
             <Flex justify="space-between" height="auto" overflow="visible">
                    <Hero scrollFade={this.scrollFade} getCollection={this.getCollection} showCollection={this.state.showCollection} createSouvenir={this.state.createSouvenir} newSouvenir={this.newSouvenir}/>
                    <Flex direction="row">
                    <SouvenirForm souvenirs={this.state.souvenirs} addSouvenir={this.addSouvenir} newSouvenir={this.newSouvenir} createSouvenir={this.state.createSouvenir} getCollection={this.getCollection}/>
                    <MySouvenirs souvenirs={this.state.souvenirs} showCollection={this.state.showCollection} newSouvenir={this.newSouvenir}/>
                    </Flex>
            </Flex>
    )
  }
}
