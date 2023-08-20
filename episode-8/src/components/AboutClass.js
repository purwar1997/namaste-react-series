import React from 'react';
import UserClass from './UserClass';

class AboutClass extends React.Component {
  constructor(props) {
    console.log('Parent constructor');

    super(props);

    this.state = {
      aboutCount: 0,
    };
  }

  increaseCountValue() {
    this.setState({ aboutCount: this.state.aboutCount + 1 });
  }

  componentDidMount() {
    console.log('Parent mounted');
  }

  componentDidUpdate() {
    console.log('Parent updated');
  }

  componentWillUnmount() {
    console.log('Parent unmounted');
  }

  render() {
    console.log('Parent render');

    return (
      <div className='about'>
        <h1>About Us</h1>
        <h2>About count: {this.state.aboutCount}</h2>
        <button onClick={() => this.increaseCountValue.call(this)}>Increase count</button>
        <UserClass id='1' name='Shubham Purwar' location='Bangalore' contact='@shubhampurwar35' />
        <UserClass id='2' name='Jack Dorsey' location='San Jose' contact='@jack' />
        <UserClass id='3' name='Kunal Shah' location='Bangalore' contact='@kunalb11' />
      </div>
    );
  }
}

export default AboutClass;
