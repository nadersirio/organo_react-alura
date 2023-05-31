import "./Colaborator.css"

export const Colaborator = ({name, office, image, backgroundColor}) => {
  return (
    <div className='colaborator'>
      <div className='head' style={{backgroundColor: backgroundColor}}>
        <img src={image} alt={name} />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>)
}
