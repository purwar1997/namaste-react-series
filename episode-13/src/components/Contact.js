const Contact = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl'>Contact Us</h1>

      <form className='mt-5 flex gap-5'>
        <input
          className='border border-gray-400 px-3 py-1.5 rounded focus:outline-none'
          type='text'
          name='name'
          placeholder='Name'
        />

        <input
          className='border border-gray-400 px-3 py-1.5 rounded focus:outline-none'
          type='text'
          name='message'
          placeholder='Message'
        />

        <button className='bg-gray-100 border border-gray-400 px-3 py-1.5 rounded'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
