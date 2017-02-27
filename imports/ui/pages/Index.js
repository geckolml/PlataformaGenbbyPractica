import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';


const Index = () => (

  <Jumbotron className="text-center">
    <h2>Bienvenido a Genbby</h2>
    <Button
      bsStyle="success"
      className="pull-center"
      onClick={(event) => {
            Meteor.loginWithSteam();}}>Vincular tu cuenta de Steam</Button>
  </Jumbotron>
);

export default Index;
