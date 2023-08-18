import React from 'react';
import UserClass from './UserClass';

class AboutClass extends React.Component {
  constructor() {
    console.log('Parent Constructor');

    super();

    this.state = {
      aboutCount: 0,
    };
  }

  componentDidMount() {
    console.log('Parent component mounted');
  }

  componentDidUpdate() {
    console.log('Parent component updated');
  }

  render() {
    console.log('Parent Render');

    return (
      <div className='about'>
        <h1>About Us</h1>
        <h2>About count: {this.state.aboutCount}</h2>
        <button onClick={() => this.setState({ aboutCount: this.state.aboutCount + 1 })}>
          Increase count
        </button>
        <UserClass name='Shubham Purwar' location='Bangalore' contact='@shubhampurwar35' />
      </div>
    );
  }
}

export default AboutClass;
