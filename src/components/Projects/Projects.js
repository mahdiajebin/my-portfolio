import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'My-Deen',
    description: 'A project demonstrating React Skills and Creativity. Project in Progress...',
    imageUrl:'/assets/MyDeenPics/pic0.png', 
    link: 'https://github.com/mahdiajebin/my-deen',
    images: ['/assets/MyDeenPics/pic0.png', '/assets/MyDeenPics/pic1.png','/assets/MyDeenPics/pic2.png'], 
  },
  {
    title: 'ClumsyProof',
    description: 'A project showcasing .net skills and user interfaces.',
    imageUrl:'/assets/ClumsyProofPics/pic1.png', 

    link: 'https://github.com/mahdiajebin/ClumsyProofVB.net',
    images: ['/assets/ClumsyProofPics/pic1.png', '/assets/ClumsyProofPics/pic2.png','/assets/ClumsyProofPics/pic3.png','/assets/ClumsyProofPics/pic4.png'], 
  },
  {
    title: 'Angular Project',
    description: 'in Progress. Adding soon',
    imageUrl:'/assets/image1.jpeg', 

    link: 'https://github.com/mahdiajebin/grocer',
    images: ['link-to-image1', 'link-to-image2']
  },
  {
    title: 'Springboot Project',
    description: 'in Progress. Adding soon',
    imageUrl:'/assets/image1.jpeg', 

    link: 'https://github.com/mahdiajebin/ReactClass',
    images: ['link-to-image1', 'link-to-image2'], 
  },
  {
    title: 'Java Project',
    description: 'in Progress. Adding soon',
    imageUrl:'/assets/image1.jpeg', 

    link: 'https://github.com/mahdiajebin/JavaDSA',
    images: ['link-to-image1', 'link-to-image2'], 
  },
  {
    title: 'Angular Project',
    description: 'in Progress. Adding soon',
    imageUrl:'/assets/image1.jpeg', 

    link: 'https://github.com/mahdiajebin/JavaDSA',
    images: ['./Assets/project-mockup-example.jpeg', 'link-to-image2'], 
  }
];

const Projects = () => (
  <Container className="my-5">
    <div id="projects" className='mb-6'>
      <h1>PROJECTS</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <ProjectCard 
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              images={project.images}
            />
          </Col>
        ))}
      </Row>
    </div>
  </Container>
);

export default Projects;
