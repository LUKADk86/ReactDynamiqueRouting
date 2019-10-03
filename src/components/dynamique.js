import React from 'react';
const Dynamique = (props) => {

const exemple=props.match.params.erreur;
  return (
    <div>

        <h3>url inexistante</h3>
        <p> veuillez vérifier votre adresse {exemple}</p>
    </div>
  )
}
export default Dynamique;
