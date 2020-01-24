import React, { Component } from 'react';

import { Container } from 'theme/grid';
import WhenInView from 'components/WhenInView/WhenInView';

import { 
  HeroImage,
  RevealP,
} from './Home.style';

class Home extends Component {
  static propTypes = {};
  render() {
    return (
      <Container>
        <HeroImage>
          <h1>OfficialJamesUsiu.</h1>
          <h2>Full Stack Developer</h2>

        </HeroImage>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
              I am a Developer with experience using Node.js, Javascript,MongoDB and Firebase as well as front-end frameworks like React to deliver responsive feature rich user experiences. Additional experience using Java and Google's new cross-platform framework Flutter.
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) => 
            <RevealP hide={ !isInView }>
             Web development refers to building, creating, and an maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.

While the terms "web developer" and "web designer" are often used synonymously, they do not mean the same thing. Technically, a web designer only designs website interfaces using HTML and CSS. A web developer may be involved in designing a website, but may also write web scripts in languages such as PHP and ASP. Additionally, a web developer may help maintain and update a database used by a dynamic website.

Web development includes many types of web content creation. Some examples include hand coding web pages in a text editor, building a website in a program like Dreamweaver, and updating a blog via a blogging website. In recent years, content management systems like WordPress, Drupal, and Joomla have also become popular means of web development. These tools make it easy for anyone to create and edit their own website using a web-based interface.

While there are several methods of creating websites, there is often a trade-off between simplicity and customization. Therefore, most large businesses do not use content management systems, but instead have a dedicated Web development team that designs and maintains the company's website(s). Small organizations and individuals are more likely to choose a solution like WordPress that provides a basic website template and simplified editing tools.

NOTE: JavaScript programming is a type of web development that is generally not considered part of web design. However, a web designer may reference JavaScript libraries like jQuery to incorporate dynamic elements into a site's design.
            </RevealP>
          }
        </WhenInView>
        
      </Container>
    );
  }
}

export default Home;
