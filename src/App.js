import "./styles/index.css"
import Banner from './components/Banner/index.js'
import { FormContent } from "./components/FormContent";
import { useState } from "react";
import { Team } from "./components/Team";

function App() {
  const teams = [
    {
      name: 'Programação',
      firstColor: '#57C278',
      secondColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      firstColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      firstColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF',
    }
  ]

  const [employers, setEmployers] = useState([]);

  const newEmployer = (employer) => {
    setEmployers([...employers, employer]);
  }

  return (
    <div>
      <Banner />
      <FormContent
        teams={teams.map(team => team.name)}
        employerForm={employer => newEmployer(employer)}
      />

      {teams.map(team => <Team
        employers={employers.filter(employer => employer.team === team.name)}
        key={team.name}
        name={team.name}
        Fc={team.firstColor}
        Sc={team.secondColor}
      />)}
    </div>
  );
}

export default App;
