import { useState } from "react";
import { DropdownList } from "../DropdownList";
import { Inputs } from "../Inputs";
import "./FormContent.css";

export const FormContent = (props) => {
  const [nameTypedValue, setName] = useState('');
  const [officeTypedValue, setOffice] = useState('');
  const [imageTypedValue, setImage] = useState('');
  const [teamValue, setTeam] = useState('');
  const [nameTeam, setNameTeam] = useState('');
  const [colorTeam, setColorTeam] = useState('');

  const SubmitForm = (event) => {
    event.preventDefault();
    props.employerForm({
      name: nameTypedValue,
      office: officeTypedValue,
      image: `${imageTypedValue}.png`,
      team: teamValue,
    })
    setName('');
    setOffice('');
    setImage('');
    setTeam('');
  }

  return (
    <section className="formContent">
      <form onSubmit={SubmitForm} className="TextContent">
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <Inputs
          require={true}
          value={nameTypedValue}
          typedValue={value => setName(value)}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Inputs
          require={true}
          value={officeTypedValue}
          typedValue={value => setOffice(value)}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <Inputs
          require={true}
          value={imageTypedValue}
          typedValue={value => setImage(value)}
          label="Imagem"
          placeholder="Informe o endereço do GitHub"
        />
        <DropdownList
          require={true}
          label="Time"
          value={teamValue}
          typedValue={value => setTeam(value)}
          itens={props.teams}
        />
        <button className="TextButton">Criar Card</button>
      </form>
      <form className="TextContent" onSubmit={(event) => {
        event.preventDefault()
        props.teamForm({ name: nameTeam, color: colorTeam })
      }}>
        <h1>Preencha os dados para criar um novo Time.</h1>
        <Inputs
          require
          value={nameTeam}
          typedValue={value => setNameTeam(value)}
          label="Nome"
          placeholder="Digite o nome do Time"
        />
        <Inputs
          require
          type='color'
          value={colorTeam}
          typedValue={value => setColorTeam(value)}
          label="Color"
          placeholder="Digite a cor do Time"
        />
        <button className="TextButton">Criar um novo Time</button>
      </form>
    </section>
  )
}