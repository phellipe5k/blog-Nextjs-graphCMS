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
  const [slug, setSlug] = useState('');
  const { loading, error, data, refetch } = useQuery(GraphQLQueries.PROFILE.GET_BY_SLUG, {
    variables: { slug },
  });

  useEffect(() => {
    if (!loading && slug) {
      console.log('REFETCHING!!')
      refetch({ slug })
    }
  }, [loading, slug])

  useEffect(() => {
    if (!loading) {
      console.log(data,'auhsdhausda')
      setProfile(data.profile);
    }
  }, [loading])

  return (
    <ProfileContext.Provider value={[{profile, setProfile, setSlug}, loading] }>
      { children }
    </ProfileContext.Provider>
    
  )
}

export default Provider;