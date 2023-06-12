import "./Team.css";
import { Colaborator } from "../Colaborator/index"
import hexToRgba from "hex-to-rgba";

export const Team = ({team, employers, delEmployer, colorChange}) => {
  return (
    (employers.length > 0) && <section className="team" style={{ backgroundColor: hexToRgba(team.color, '0.5')}}>
      <input type="color" onChange={event => colorChange(event.target.value, team.name)} value={team.color} className="input-color" />
      <h3 style={{ borderColor: team.color }}>{team.name}</h3>
      <div className="employers">
        {employers.map( employer => <Colaborator
          employer={employer}
          backgroundColor={team.color}
          delEmployer={delEmployer}
        />)}
      </div>
    </section>
  )
}