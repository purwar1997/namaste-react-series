import { TOP_PICK_IMAGE_URL } from '../utils/constants';

const TopPickCard = ({ topPick }) => {
  const { creativeId, fontColor } = topPick;
  const { price, defaultPrice } = topPick?.dish?.info;

  return (
    <div className='top-pick-item-card'>
      <img src={TOP_PICK_IMAGE_URL + creativeId} />

      <div className='item-card-bottom'>
        <span style={{ color: fontColor }}>₹{(price || defaultPrice) / 100}</span>
        <button className='add-item-btn'>Add</button>
      </div>
    </div>
  );
};

export default TopPickCard;
