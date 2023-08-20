import { Component } from 'react';
import User from './User';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='about'>
        <h1>About Us</h1>
        <User />
      </div>
    );
  }
}

export default About;
