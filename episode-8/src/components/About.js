import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      {/* function is being invoked */}
      {/* <User name='Shubham Purwar' location='Etawah' contact='@shubhampurwar35' /> */}
      {/* class is being instantiated */}
      <UserClass name='Shubham Purwar' location='Etawah' contact='@shubhampurwar35' />
    </div>
  );
};

export default About;
