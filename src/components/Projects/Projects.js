import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const PUBLIC_URL = process.env.PUBLIC_URL;

const projects = [
  {
    title: 'My-Deen',
    description: 'A project demonstrating React Skills and Creativity. Project in Progress...',
    imageUrl: `${PUBLIC_URL}/assets/MyDeenPics/pic0.png`,
    link: 'https://github.com/mahdiajebin/my-deen',
    images: [`${PUBLIC_URL}/assets/MyDeenPics/pic0.png`, `${PUBLIC_URL}/assets/MyDeenPics/pic1.png`, `${PUBLIC_URL}/assets/MyDeenPics/pic2.png`],
  },
  {
    title: 'ClumsyProof',
    description: 'A project showcasing .net skills and user interfaces.',
    imageUrl: `${PUBLIC_URL}/assets/ClumsyProofPics/pic1.png`,
    link: 'https://github.com/mahdiajebin/ClumsyProofVB.net',
    images: [`${PUBLIC_URL}/assets/ClumsyProofPics/pic1.png`, `${PUBLIC_URL}/assets/ClumsyProofPics/pic2.png`, `${PUBLIC_URL}/assets/ClumsyProofPics/pic3.png`, `${PUBLIC_URL}/assets/ClumsyProofPics/pic4.png`],
  },
  {
    title: 'Angular Project',
    description: 'in Progress. Adding soon',
    imageUrl: `${PUBLIC_URL}/assets/image1.jpeg`,
    link: 'https://github.com/mahdiajebin/grocer',
    images: ['link-to-image1', 'link-to-image2']
  },
  {
    title: 'Springboot Project',
    description: 'in Progress. Adding soon',
    imageUrl: `${PUBLIC_URL}/assets/image1.jpeg`,
    link: 'https://github.com/mahdiajebin/ReactClass',
    images: ['link-to-image1', 'link-to-image2'],
  },
  {
    title: 'Java Project',
    description: 'in Progress. Adding soon',
    imageUrl: `${PUBLIC_URL}/assets/image1.jpeg`,
    link: 'https://github.com/mahdiajebin/JavaDSA',
    images: ['link-to-image1', 'link-to-image2'],
  },
  {
    title: 'Angular Project',
    description: 'in Progress. Adding soon',
    imageUrl: `${PUBLIC_URL}/assets/image1.jpeg`,
    link: 'https://github.com/mahdiajebin/JavaDSA',
    images: ['./Assets/project-mockup-example.jpeg', 'link-to-image2'],
  }
];

const Projects = () => (
  <Container className="my-5">
    <div id="projects" className="mb-6 text-center">
      <h1>PROJECTS</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center mb-4">
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
