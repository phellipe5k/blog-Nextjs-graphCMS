import { useQuery } from "@apollo/client";
import * as GraphQLQueries from '../graphql/queries'; 
import Base from '../template/Base';
import { default as HomeTemplate } from '../template/Home';

const Home = () => {
  const id = 'home';
  const { loading, error, data } = useQuery(GraphQLQueries.PROFILE.GET_BY_ID, {
    variables: { id },
  });
    return <HomeTemplate />

}

export default Home;
