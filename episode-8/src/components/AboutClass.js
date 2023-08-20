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

  increaseCountValue() {
    this.setState({ aboutCount: this.state.aboutCount + 1 });
  }

  render() {
    console.log('Parent Render');

    return (
      <div className='about'>
        <h1>About Us</h1>
        <h2>About count: {this.state.aboutCount}</h2>
        <button onClick={() => this.increaseCountValue.call(this)}>Increase count</button>
        <UserClass name='Shubham Purwar' location='Bangalore' contact='@shubhampurwar35' />
        <UserClass name='Jack Dorsey' location='San Jose' contact='@jack' />
        <UserClass name='Kunal Shah' location='Bangalore' contact='@kunalb11' />
      </div>
    );
  }
}

export default AboutClass;
