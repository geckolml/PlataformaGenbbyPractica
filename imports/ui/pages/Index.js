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
            Meteor.loginWithSteam();
            var idSteam = Meteor.user().profile.id; // ID de Steam
            if (idSteam){
                Meteor.call('update',String(Meteor.userId()),String(idSteam)); // Agrega el ID de steam al documento del usuario loggeado.
            }

            console.log(Meteor.userId()); // Imprime ID del usuario
            Meteor.call('remove',String(idSteam)); // Elimina el usuario creado por la API de steam por defecto.
          }}>Vincular tu cuenta de Steam</Button>
  </Jumbotron>
);

export default Index;
