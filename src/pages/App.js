
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState(''); //currentRepo "campo de entrada" para o nome de um repositório e setCurrentRepo como a maneira de atualizar o texto nesse campo.
  const [repos, setRepos] = useState([]); //Imagine repos como uma "lista de repositórios" e setRepos como a maneira de adicionar ou remover itens dessa lista.


  const handleSearchRepo = async () => {

    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {

        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('')
          return
        } else {
          alert('Repositório já adicionado')
        }
      }
    }

    catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('Repositório não encontrado');
        }
        else {
          console.error('Erro na requisição:', error.response);
          alert('Erro ao acessar a API. Tente novamente mais tarde.');
        }
      } else if (error.request) {
        console.error('Erro de rede:', error.request);
        alert('Erro de rede. Verifique sua conexão e tente novamente.');
      } else {
        console.error('Erro inesperado:', error.message);
        alert('Erro inesperado. Tente novamente mais tarde.');
      }
    }

  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    // Filtra a lista de repositórios para remover o item com o ID especificado
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
    // utilizar filter.
  }


  return (
    <Container>
      <h1> Bem vindo a Wiki do GitHub</h1> <br/>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} /><br/>
      <h3>Escreva o perfil seguido do repositório, separados por /</h3>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
