import React, { useReducer } from 'react'
import { AuthContext } from './context/AuthContext';
import { authReducer } from './authReducer';
import {types} from ' ../types/types'

const initialState = {
    logged: false,
};

export const AuthProvider = ({ children}) => {

  const [ state, dispatch] = useReducer( authReducer, initialState);
    const login  = async(name= '') => {
      const action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
    dispatch(action);
  }
  return (
    <AuthContext.Provider  value={{}}>
        { children }
   </AuthContext.Provider>
  );
}
