import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  const handleViewRepo = () => {
    window.open(repo.html_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className='buttons'>
        <button onClick={handleViewRepo} className="view-repo">
          Ver repositório
        </button>
        <button onClick={handleRemove} className="remove">
          Remover
        </button>
      </div>

    </ItemContainer>
  );
}

export default ItemRepo;
