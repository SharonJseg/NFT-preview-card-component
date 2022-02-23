import './Card.css';
import cardImg from '../../images/image-equilibrium.jpg';
import ethIcon from '../../images/icon-ethereum.svg';
import clockIcon from '../../images/icon-clock.svg';
import creatorImg from '../../images/my-img.jpg';
import viewIcon from '../../images/icon-view.svg';

const Card = () => {
  return (
    <div className='card'>
      <div className='card__image-container'>
        <picture>
          <img src={cardImg} alt='glass cube' className='card__image' />
        </picture>

        <div className='card__image-overlay'>
          <picture>
            <img src={viewIcon} alt='view' className='card__view-icon' />
          </picture>
        </div>
      </div>
      <h2 className='card__title'>Equilibrium #3429</h2>
      <p className='card__description'>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className='card__details'>
        <div className='card__data-container'>
          <div className='card__data'>
            <picture>
              <img src={ethIcon} alt='etherum price icon' />
            </picture>
            <p className='card__price'>0.041 ETH</p>
          </div>
          <div className='card__data'>
            <picture>
              <img src={clockIcon} alt='clock icon' className='clock-icon' />
            </picture>
            <p className='card__timeleft'>3 days left</p>
          </div>
        </div>
        <div className='card__creator'>
          <picture>
            <img
              src={creatorImg}
              alt='creator'
              className='card__creator-image'
            />
          </picture>
          <p>
            Creation of <span className='card__creator-name'>Sharon Segal</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
