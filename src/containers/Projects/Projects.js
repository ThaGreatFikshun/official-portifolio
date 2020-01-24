import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageResponsive } from 'theme/grid';
import { FixedTitle, FixedSubTitle } from 'theme/types';
import {
  ImageButton,
  Group,
  TitleLink,
  Description,
  Skills,
} from './Projects.style';
import {Container} from 'theme/grid';

class Projects  extends Component {
  render() {
    return (
      <Container>
        <FixedTitle>Projects</FixedTitle>
        <FixedSubTitle>Portfolio:</FixedSubTitle>
        <Group>
          <TitleLink 
            href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" 
            target="_blank" 
            rel="nofollow">CREATING OWN PORTFOLIO</TitleLink>
          <Zoomy
            
            imageUrl={require('assets/t1.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton 
                           
                onClick={showImage}> 
                  <ImageResponsive width="20%" height="100%" src={require('assets/t1.png')} alt="template1"/>
                </ImageButton>

            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
          <Description>
            Lead Developer Full-Stack Development: 
          </Description>
          <Skills>
            <li>React js</li>
            <li>Advanced HTML5 & CSS3</li>
            <li>NodeJS</li>
            <li>JAVASCRIPT </li>
            <li>Project management skills</li>
            <li>Leadership skills</li>
          
          </Skills>

        
        
        </Group>
        <Group>
          
        
          <TitleLink 
            href="#" 
            target="_blank" 
            rel="nofollow">Contractors Warehouse</TitleLink>
          <Zoomy
            imageUrl={require('assets/t2.png')}
            renderThumbnail={({ showImage }) => 
              <ImageButton              
                onClick={showImage}> 
                  <ImageResponsive width="20%" height="100%" src={require('assets/t2.png')} alt="template2"/>
                </ImageButton>

            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
          <Description>
            Ecommerce - Lead Developer: 
          </Description>
          <Skills>
            <li>webstorm php workframe</li>
            <li>project management skills</li>
            <li>Leadership skills</li>
          
          </Skills>

        
        
        </Group>
      </Container>

    );
  }
}

export default Projects;