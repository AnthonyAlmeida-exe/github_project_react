import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, List, Error } from './styles';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubeExplore:repos');
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca deste repositório!');
    }
  }

  useEffect(() => {
    localStorage.setItem('@GithubeExplore:repos', JSON.stringify(repos));
  }, [repos]);

  return (
    <>
      <Title>Explore Repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          placeholder="Digite o nome do repositório"
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <List>
        {repos.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </List>
    </>
  );
};

export default Dashboard;
