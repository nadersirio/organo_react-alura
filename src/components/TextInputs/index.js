import "./TextInputs.css";

export const TextInputs = (props) => {
  return (
    <div className="TextInputs">
      <label>{props.label}</label>
      <input onChange={event => props.typedValue(event.target.value)} value={props.value} placeholder={props.placeholder} required={props.require} /><br />
    </div>
  )
}