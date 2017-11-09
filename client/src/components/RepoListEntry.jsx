import React from 'react';

const RepoListEntry = (props) => {
  console.log(props.repo.owner.avatar_url);
  console.log(props.repo.owner.html_url);
  return (
    <div>
    <hr></hr>
    <h3> Repo: </h3>
    <a href={props.repo.html_url}>{props.repo.name}</a>
       <h5>Description: {props.repo.description}</h5>
        <img src={props.repo.owner.avatar_url} width='80' height='80'></img>
        <h5> Watchers: {props.repo.watchers}</h5>
    </div>
  );
}

export default RepoListEntry;