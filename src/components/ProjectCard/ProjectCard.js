import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ImageModal from '../Modal/ImageModal';
import './ProjectCard.css'; 

const ProjectCard = ({ title, description, link, images, imageUrl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }} className="m-3">
      <Card.Body>
  <Card.Title style={{color: 'white'}}>{title}</Card.Title>
  <Card.Text>{description}</Card.Text>
  {imageUrl && <img src={imageUrl} alt="Image" className="project-image" />}
  <div className="button-container">
    <Button variant="primary" href={link} target="_blank">View Code</Button>
    <Button variant="secondary" onClick={handleShow}>View Pictures</Button>
  </div>
</Card.Body>

      </Card>

      <ImageModal 
        show={show} 
        handleClose={handleClose} 
        title={title} 
        images={images} 
      />
    </>
  );
};

export default ProjectCard;
