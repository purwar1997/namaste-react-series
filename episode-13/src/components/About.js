import { Component } from 'react';
import User from './User';

class About extends Component {
  constructor(props) {
    super(props);

    // this.state = { intervalId: null };
  }

  componentDidMount() {
    console.log('About mounted');

    this.intervalId = setInterval(() => console.log('Namaste React'), 1000);

    // const intervalId = setInterval(() => console.log('Namaste React'), 1000);
    // this.setState({ intervalId });
  }

  componentDidUpdate() {
    console.log('About updated');
  }

  // If we don't use clearInterval, there will be lot of setIntervals hanging around in browser
  // which will cause performance loss

  componentWillUnmount() {
    console.log('About unmounted');

    clearInterval(this.intervalId);

    // clearInterval(this.state.intervalId);
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
