import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://conteudo.imguol.com.br/c/noticias/f1/2019/11/02/a-nasa-elegeu-como-foto-astronomica-do-dia-em-22-de-outubro-esta-imagem-da-via-lactea-capturada-por-jheison-huerta-no-salar-de-uyuni-na-bolivia-1572723035380_v2_976x549.jpg"
            alt="nothing"
          />
          <div>
            <strong>teste/teste</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <p>stars</p>
          </li>
          <li>
            <strong>1808</strong>
            <p>forks</p>
          </li>
          <li>
            <strong>1808</strong>
            <p>issues</p>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
