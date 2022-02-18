import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import * as GraphQLQueries from './graphql/queries'; 


function App() {
  const slug = 'home';
  const { loading, error, data } = useQuery(GraphQLQueries.PAGE.GET_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.page.logo.url} className="App-logo" alt="logo" />
        <p>{ data.title }</p>
        <p>
          { data.page.subtitle }
        </p>
      </header>
    </div>
  )
}

export default App
