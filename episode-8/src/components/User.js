import { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      contact: '',
    };
  }

  componentDidMount() {}

  render() {
    const { name, location, contact } = this.state;

    return (
      <div className='user-card'>
        <h4>Name: {name}</h4>
        <p>Location: {location}</p>
        <p>Contact: {contact}</p>
      </div>
    );
  }
}

export default User;
