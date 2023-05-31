import { useState } from "react";
import { DropdownList } from "../DropdownList";
import { TextInputs } from "../TextInputs";
import "./FormContent.css";

export const FormContent = (props) => {
  const [nameTypedValue, setName] = useState('');
  const [officeTypedValue, setOffice] = useState('');
  const [imageTypedValue, setImage] = useState('');
  const [teamValue, setTeam] = useState('');

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
        <TextInputs
          require={true}
          value={nameTypedValue}
          typedValue={value => setName(value)}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextInputs
          require={true}
          value={officeTypedValue}
          typedValue={value => setOffice(value)}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextInputs
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
    </section>
  )
}