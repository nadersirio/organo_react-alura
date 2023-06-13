import "./styles/index.css";
import Banner from './components/Banner/index.js';
import { FormContent } from "./components/FormContent";
import { useState } from "react";
import { Team } from "./components/Team";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'Data Sciense',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#D86EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FEBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    }
  ]);

  const initial = [
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'JULIANA AMOASEI',
      office: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'DANIEL ARTINE',
      office: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'GUILHERME LIMA',
      office: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
      favorite: false,
    },
    {
      name: 'PAULO SILVEIRA',
      office: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
      favorite: false,
    },
  ]

  const [employers, setEmployers] = useState(initial);

  const newEmployer = (employer) => {
    setEmployers([...employers, employer]);
  }

  const deleteEmployer = (id) => {
    setEmployers(employers.filter(employer => employer.id !== id));
  }

  const changeColorTeam = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  const newTeam = (team) => {
    setTeams([...teams, {...team, id: uuidv4() } ])
  }

  const onFavorite = (id) => {
    setEmployers(employers.map(employer => {
      if(employer.id === id) employer.favorite = !employer.favorite;
      return employer
    }))
  }

  return (
    <div>
      <Banner />
      <FormContent
        teamForm={newTeam}
        teams={teams.map(team => team.name)}
        employerForm={employer => newEmployer(employer)}
      />
      <section>
        {teams.map((team, index) => {
          return (
            <Team
              employers={employers.filter(employer => employer.team === team.name)}
              key={index}
              team={team}
              delEmployer={deleteEmployer}
              colorChange={changeColorTeam}
              onFavorite={onFavorite}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App;
