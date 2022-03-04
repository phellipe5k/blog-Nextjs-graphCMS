import { useQuery } from "@apollo/client";
import * as GraphQLQueries from '../graphql/queries'; 
import Base from '../template/Base';
import { default as HomeTemplate } from '../template/Home';

const Home = () => {
    return <HomeTemplate />

}

export default Home;
