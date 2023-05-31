import "./DropdownList.css"

export const DropdownList = (props) => {
  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select
        required={props.require}
        value={props.value}
        onChange={event => props.typedValue(event.target.value)}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}