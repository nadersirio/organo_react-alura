import { AiFillCloseCircle } from 'react-icons/ai';
import "./Colaborator.css"

export const Colaborator = ({employer, backgroundColor, delEmployer}) => {
  return (
    <div className='colaborator'>
      <AiFillCloseCircle size={25} className="delete" onClick={delEmployer} />
      <div className='head' style={{backgroundColor: backgroundColor}}>
        <img src={employer.image} alt={employer.name} />
      </div>
      <div className='footer'>
        <h4>{employer.name}</h4>
        <h5>{employer.office}</h5>
      </div>
    </div>)
}
