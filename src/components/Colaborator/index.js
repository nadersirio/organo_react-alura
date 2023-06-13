import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./Colaborator.css"

export const Colaborator = ({employer, backgroundColor, delEmployer, onFavorite}) => {

  const favorite = () => {
    onFavorite(employer.id);
  }

  return (
    <div className='colaborator'>
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => delEmployer(employer.id)}
      />
      <div className='head' style={{backgroundColor: backgroundColor}}>
        <img src={employer.image} alt={employer.name} />
      </div>
      <div className='footer'>
        <h4>{employer.name}</h4>
        <h5>{employer.office}</h5>
        <div className='favorite'>
          {employer.favorite
            ? <AiFillHeart size={20} onClick={favorite} color='#ff0000' />
            : <AiOutlineHeart size={20} onClick={favorite}/>
          }
        </div>
      </div>
    </div>)
}
