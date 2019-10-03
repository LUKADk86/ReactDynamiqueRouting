import React from 'react';
import axios from 'axios';

class User extends React.Component{

  state={
      utilisateur: []
  }

  componentDidMount(){

    axios.get( 'https://jsonplaceholder.typicode.com/users/',{
    params: {
      id: this.props.match.params.id
    }
  } )
      .then(resultat => {
        console.log(resultat)
        this.setState({
          utilisateur: resultat.data
        })
      })
    }

  render(){
    const {utilisateur}=this.state;
    console.log(utilisateur)
    const userShow=utilisateur.map(use=>{
      return(
        <div key={use.id}>
        <p> le nom et prénom:{use.name}</p>
        <p>le surnom: {use.username}</p>
        <p>mail: {use.email}</p>
        <p>téléphone: {use.phone}</p>
        <p>ville: {use.city}</p>
        <p>site: {use.website}</p>
        </div>
      )
    })
  return(
    <div>
        hello
        {userShow}


    </div>
  )}

}
export default User
