import { TOP_PICK_IMAGE_URL } from '../utils/constants';

const TopPickCard = ({ topPick }) => {
  const { creativeId, fontColor } = topPick;
  const { price, defaultPrice } = topPick?.dish?.info;

  return (
    <div className='relative'>
      <img className='min-w-[350px] rounded-2xl' src={TOP_PICK_IMAGE_URL + creativeId} />

      <div className='absolute bottom-5 w-full px-6 flex justify-between items-center'>
        <span style={{ color: fontColor, fontWeight: 500 }}>₹{(price || defaultPrice) / 100}</span>
        <button className='add-item-btn'>Add</button>
      </div>
    </div>
  );
};

export default TopPickCard;
