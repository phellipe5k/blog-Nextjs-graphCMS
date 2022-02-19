import { useQuery } from "@apollo/client";
import * as GraphQLQueries from '../graphql/queries'; 
import Base from '../template/Base';
const Home = () => {
    
  const id = 'home';
  const { loading, error, data } = useQuery(GraphQLQueries.PROFILE.GET_BY_ID, {
    variables: { id },
  });
    return (
        <Base>
            <h1>Hello World</h1>
        </Base>
    )

}

export default Home;
