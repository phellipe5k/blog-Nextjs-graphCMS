import { createContext } from 'react';
import { Profile } from '../types/profile';

const ProfileContext = createContext<Profile | any>({});

export default ProfileContext;
