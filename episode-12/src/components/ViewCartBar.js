import { Link } from 'react-router-dom';
import { BsBagFill } from 'react-icons/bs';
import { calculateCartTotal } from '../utils/helpers';

const ViewCartBar = ({ cartItems }) => {
  return (
    <Link to='/checkout'>
      <div className='bg-lightGreen px-5 py-3.5 text-white font-medium flex justify-between items-center fixed bottom-0 w-calc'>
        <div className='flex items-center gap-3'>
          <span>{cartItems.length} Items</span>
          <span className='h-4 w-0.5 bg-white ' />
          <span className='relative top-px'>₹{calculateCartTotal(cartItems)}</span>
        </div>

        <div className='flex items-center gap-3'>
          <span className='uppercase'>View Cart</span>
          <BsBagFill />
        </div>
      </div>
    </Link>
  );
};

export default ViewCartBar;
