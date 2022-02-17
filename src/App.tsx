import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'urql';

const HomePageQuery = `
  query {
    page (
      where: { slug: "home" }
    ) {
      title
      subtitle
      logo {
        url
      }
    }
  }
`
function App() {
  const [count, setCount] = useState(0)
  const [result, reexecuteQuery] = useQuery({
    query: HomePageQuery,
  });
  const { data, fetching, error } = result;

  useEffect(() => {
    console.log(data, result)
  }, [fetching])

  if (fetching) return <p>Loading...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={data.page.logo.url} className="App-logo" alt="logo" />
        <p>{ data.page.title }</p>
        <p>
          { data.page.subtitle }
        </p>
      </header>
    </div>
  )
}

export default App
