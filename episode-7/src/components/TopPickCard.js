import { TOP_PICK_IMAGE_URL } from '../utils/constants';

const TopPickCard = ({ topPick }) => {
  const { creativeId, fontColor } = topPick;
  const { price, defaultPrice } = topPick?.dish?.info;

  return (
    <div className='top-pick-item-card'>
      <img src={TOP_PICK_IMAGE_URL + creativeId} />
      <span style={{ color: fontColor }}>₹{(price || defaultPrice) / 100}</span>
    </div>
  );
};

export default TopPickCard;
