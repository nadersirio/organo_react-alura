import "./Team.css";
import { Colaborator } from "../Colaborator/index"

export const Team = (props) => {
  return (
    (props.employers.length > 0) && <section className="team" style={{ backgroundColor: props.Sc }}>
      <h3 style={{ borderColor: props.Fc }}>{props.name}</h3>
      <div className="employers">
        {props.employers.map( employer => <Colaborator
          key={employer.name}
          name={employer.name}
          office={employer.office}
          image={employer.image}
          backgroundColor={props.Fc}
        />)}
      </div>
    </section>
  )
}