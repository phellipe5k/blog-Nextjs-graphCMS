import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Profile } from '../types/profile';
import ProfileContext from './Context';
import * as GraphQLQueries from '../graphql/queries';

interface Provider {
    children: React.ReactNode;
}

const Provider =  ({ children }: Provider) => {
  const [profile, setProfile] = useState<Profile>();
  
  const id = "ckzt9vr9k1kyo0c22tmc4tlkb";
  const { loading, error, data } = useQuery(GraphQLQueries.PROFILE.GET_BY_ID, {
    variables: { id },
  });

  useEffect(() => {
    if (!loading) {
      setProfile(data.profile)
    }
  }, [loading])

  return (
    <ProfileContext.Provider value={ [{ profile, setProfile }, loading, error] }>
      { children }
    </ProfileContext.Provider>
    
  )
}

export default Provider;