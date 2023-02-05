import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { login } from './features/auth/authSlice';
import Data from './features/data/Data';
import ErrorPage from './features/error/ErrorPage';

function App() {
  const {token, loading} = useAppSelector((state) => state.identity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if (!token && !loading) {
    //   // console.log('Rerender')
    //   dispatch(login({username: 'monitoradmin@stark.com', password: 'M123456!' }))
    // }
  }, [token]);

  return (
    <div className="App">
      {token ? <Data /> : <ErrorPage/>}
    </div>
  );
}

export default App;
