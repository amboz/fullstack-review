import React from 'react';

const RepoListEntry = (props) => (
  <div>
    Repo: <h2>{props.repo.name}</h2>
    Description: <h5>Description: {props.repo.description}</h5>
      Owner: <img src={props.repo.owner.avatar_url} width='100' height='100'></img>
  </div>
)

export default RepoListEntry;