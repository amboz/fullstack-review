import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    $.ajax('/repos', {
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState({
          repos: data
        })
      }.bind(this)
    })
  }

  search (term) {
    let context = this;
    console.log(`${term} was searched`);
    $.ajax('/repos', {
      method: 'POST',
      data: {
        query: term
      },
      //perform GET request on success to update state/re-render
      success: function() {
        $.ajax('/repos', {
          method: 'GET',
          dataType: 'json',
          success: function(data) {
            context.setState({
              repos: data
            })
          }.bind(context)
        })
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));