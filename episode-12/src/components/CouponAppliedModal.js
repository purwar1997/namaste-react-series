import { closeModal } from '../utils/helpers';
import { COUPON_MODAL_IMAGE_URL } from '../utils/constants';

const CouponAppliedModal = ({ couponCode, setOpenCouponModal }) => {
  return (
    <div className='modal-background' onClick={event => closeModal(event, setOpenCouponModal)}>
      <div className='w-96 bg-white rounded-md'>
        <div className='flex flex-col items-center gap-5 px-10 pt-16 pb-6 relative'>
          <img className='w-20 absolute -top-9' src={COUPON_MODAL_IMAGE_URL} />

          <h2 className='text-lg font-medium uppercase'>'{couponCode}' Applied</h2>

          <div className='text-center'>
            <h1 className='text-4xl font-bold'>₹300</h1>
            <span className='inline-block mt-1.5'>savings with this coupon</span>
          </div>

          <p className='text-sm text-center text-gray-500'>
            Happy to have you back! Look out for great offers on every order
          </p>
        </div>

        <div className='py-3.5 border-t border-gray-300 text-center'>
          <button
            className='text-orange font-bold uppercase'
            onClick={event => closeModal(event, setOpenCouponModal)}
          >
            Yay!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponAppliedModal;
