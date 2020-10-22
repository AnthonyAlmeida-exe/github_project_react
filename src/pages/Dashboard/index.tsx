import React from 'react';

import { Title, Form, List } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <List />
    </>
  );
};

export default Dashboard;
