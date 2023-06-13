import "./Inputs.css";

export const Inputs = (props) => {
  return (
    <div className={`Inputs color-${props.type}`}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={event => props.typedValue(event.target.value)}
        value={props.value}
        placeholder={props.placeholder}
        required={props.require}
      /><br />
    </div>
  )
}