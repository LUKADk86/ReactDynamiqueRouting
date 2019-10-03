import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Blog extends Component{
  state={
    users: []
  }
  componentDidMount(){

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {

      this.setState({
        users: res.data
      })
    })
  }
  render(){

    const {users}=this.state;
    const userList=users.map(user=>{
    return (
      <div key={user.id}>
        props.match.params.id={user.id}
          <h4>utilisateur</h4>
          <NavLink exact to={`blog/${user.id}`}>{user.id}</NavLink>
          <p>{user.id} . le nom et prénom:{user.name}</p><p>le surnom: {user.username}</p>
          <div>-----------------</div>
      </div>
    )})
    return (
      <div>
      <h2>le blog</h2>
      {userList}
      </div>
  )}
}

export default Blog;
